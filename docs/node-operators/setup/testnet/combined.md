---
description: Install a testnet validator and bridge on one machine using Docker.
slug: /node-operators/testnet/combined
tags:
  - docker-testnet
---

# Run a validator and bridge together

This guide demonstrates how to run a testnet validator node and a bridge operator on one machine using Docker.

## Prerequisites

### Docker

* [Docker Engine](https://docs.docker.com/engine/install/)
* [Docker Compose plugin](https://docs.docker.com/compose/install/)

### Ethereum endpoint

You need an Ethereum RPC endpoint to listen for events from Ethereum chain and send events to Ethereum. This can be an [Alchemy](https://www.alchemy.com/overviews/private-rpc-endpoint), Infura or any other Ethereum RPC endpoint.

### Private keys

Generate three private keys as described in [Generate keys](./../generate-keys.md):

* One key for the validator
* One key for the bridge voter
* One key for the bridge operator

### System requirements

Recommended system requirements for running a validator node on the Saigon testnet:

* 2 CPU cores
* 8 GB RAM
* 100 GB SSD
* x86-64 architecture

These requirements are rough guidelines, and each node operator
should monitor their node to ensure good performance for the intended task.
The size of your node will also grow over time.

## Install the node

1. Set up directories:

  Create a ronin directory:

  ```bash
  mkdir ~/ronin
  ```

  Go to the newly created directory:

  ```bash
  cd ~/ronin
  ```

  Create a directory for bridge data:

  ```bash
  mkdir -p data
  ```

  Create a directory for chain data:

  ```bash
  mkdir -p chaindata/data/ronin
  ```

1. Create a file called `docker-compose.yml`:

  ```bash
  vim docker-compose.yml
  ```

1. Paste the following into `docker-compose.yml`:

  ```yml
  version: "3"
  services:
    node:
      image: ${NODE_IMAGE}
      stop_grace_period: 5m
      stop_signal: SIGINT
      hostname: node
      container_name: node
      ports:
        - 127.0.0.1:8545:8545
        - 127.0.0.1:8546:8546
        - 30303:30303
        - 30303:30303/udp
        - 6060:6060
      volumes:
        - ~/ronin/chaindata:/ronin
      environment:
        - SYNC_MODE=snap
        - PASSWORD=${PASSWORD}
        - PRIVATE_KEY=${VALIDATOR_PRIVATE_KEY}
        - BOOTNODES=${BOOTNODES}
        - NETWORK_ID=${NETWORK_ID}
        - RONIN_PARAMS=${RONIN_PARAMS}
        - VERBOSITY=${VERBOSITY}
        - MINE=${MINE}
        - GASPRICE=${GASPRICE}
        - GENESIS_PATH=${GENESIS_PATH}
        - ETHSTATS_ENDPOINT=${INSTANCE_NAME}:${CHAIN_STATS_WS_SECRET}@${CHAIN_STATS_WS_SERVER}:443
    db:
      image: postgres:14.3
      restart: always
      command: postgres -c 'max_connections=1000'
      hostname: db
      container_name: db
      ports:
        - 127.0.0.1:5432:5432
      environment:
        POSTGRES_PASSWORD: ${DB_PASSWORD}
      volumes:
        - ~/bridgedata-v2:/var/lib/postgresql/data
    bridge:
      image: ${BRIDGE_IMAGE}
      restart: always
      container_name: bridge
      environment:
        - RONIN_RPC=${RPC_ENDPOINT}
        - RONIN_BRIDGE_VOTER_KEY=${BRIDGE_VOTER_PRIVATE_KEY}
        - RONIN_BRIDGE_OPERATOR_KEY=${BRIDGE_OPERATOR_PRIVATE_KEY}
        - ETHEREUM_RPC=${ETHEREUM_ENDPOINT}
        - DB_HOST=db
        - DB_NAME=${DB_NAME}
        - DB_PORT=5432
        - DB_USERNAME=${DB_USERNAME}
        - DB_PASSWORD=${DB_PASSWORD}
        - VERBOSITY=${VERBOSITY}
        - CONFIG_PATH=${CONFIG_PATH}
        - RONIN_TASK_INTERVAL=${RONIN_TASK_INTERVAL}
        - RONIN_TRANSACTION_CHECK_PERIOD=${RONIN_TRANSACTION_CHECK_PERIOD}
        - RONIN_MAX_PROCESSING_TASKS=${RONIN_MAX_PROCESSING_TASKS}
        - ETHEREUM_GET_LOGS_BATCH_SIZE=${ETHEREUM_GET_LOGS_BATCH_SIZE}
      depends_on:
        - db
        - node
  ```

  This compose file defines three services:

* `node`, which pulls a full Ronin node image from the GitHub Container Registry.
* `bridge`, which pulls a bridge image.
* `db`, which builds a Postgres database for the bridge.

1. Create an `.env` file to store configuration parameters for the services:

  ```bash
  vim .env
  ```

1. Paste the following into `.env` and replace placeholder values (like *`INSTANCE_NAME`*) with your node's information:

  ```.env
  # Your Ethereum RPC endpoint
  ETHEREUM_ENDPOINT=ETHEREUM_ENDPOINT

  # The name of your node that you want displayed on https://saigon-stats.roninchain.com/
  INSTANCE_NAME=INSTANCE_NAME

  # The latest version of the node's image as listed in https://docs.roninchain.com/docs/node-operators/setup/latest
  NODE_IMAGE=NODE_IMAGE
  
  # The latest version of the bridge's image as listed in https://docs.roninchain.com/docs/node-operators/setup/latest
  BRIDGE_IMAGE=BRIDGE_IMAGE

  # Your bridge operator private key without the 0x prefix
  BRIDGE_OPERATOR_PRIVATE_KEY=BRIDGE_OPERATOR_PRIVATE_KEY

  # If you're a governor, uncomment this line and replace with your bridge voter key, without the 0x prefix
  # BRIDGE_VOTER_PRIVATE_KEY=BRIDGE_VOTER_PRIVATE_KEY
  
  # Your validator private key without the 0x prefix
  VALIDATOR_PRIVATE_KEY=VALIDATOR_PRIVATE_KEY

  # The password to encrypt the node's keyfile
  PASSWORD=PASSWORD

  DB_NAME=bridge
  DB_USERNAME=postgres

  # The Postgres database password
  DB_PASSWORD=DB_PASSWORD

  RPC_ENDPOINT=http://node:8545

  CONFIG_PATH=config.testnet.json
  GENESIS_PATH=testnet.json
  DEPLOYMENT=test

  RONIN_TASK_INTERVAL=3
  RONIN_TRANSACTION_CHECK_PERIOD=50
  RONIN_MAX_PROCESSING_TASKS=200
  ETHEREUM_GET_LOGS_BATCH_SIZE=100

  BOOTNODES=enode://77e9cfce2d4c01c61115591984ca4012923c29846a7b66c775fed0cc8fe5f41b304a71e3e9433e067ea7ef86701c13992fefacf9e223786c62c530a7110e8142@35.224.85.190:30303
  
  NETWORK_ID=40925

  GASPRICE=20000000000
  
  MINE=true
  
  VERBOSITY=3

  CHAIN_STATS_WS_SERVER=saigon-stats.roninchain.com
  CHAIN_STATS_WS_SECRET=xQj2MZPaN6

  RONIN_PARAMS=--http.api eth,net,web3,consortium --miner.gaslimit 100000000 --miner.gasreserve 10000000
  ```

1. (Optional) Download the snapshot:

  ```bash
  cd ~/ronin/chaindata/data/ronin/
  curl https://storage.googleapis.com/testnet-chaindata/chaindata-22-3-2023.tar -o chaindata.tar && tar -xvf chaindata.tar
  mv chaindata-22-3-2023 chaindata
  ```

1. Start the node:

  ```bash
  cd ~/ronin && docker-compose up -d
  ```
  
  This command pulls a Ronin node image, a bridge image, a Postgres database, and starts the services you defined.

1. After a few minutes, go to the [stats page](https://saigon-stats.roninchain.com/) to check the status of your node. If it's green, the node is connected and up to date with the network.

1. Review the log for the validator and the bridge (the node should sync to the latest block for making the bridge work).

  ```bash
  docker logs node -f --tail 100
  docker logs bridge -f --tail 100
  ```
