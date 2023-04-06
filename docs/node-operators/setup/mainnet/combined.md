---
description: Install a mainnet validator and bridge on one machine using Docker.
slug: /node-operators/mainnet/combined
---

# Run a validator and bridge together
This guide demonstrates how to run a mainnet validator node and a bridge operator on one machine using Docker.

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
Recommended system requirements for running a validator node on the mainnet:
* 8-core CPU
* 32 GB RAM
* 700 GB high-speed SSD
* x86-64 architecture

These requirements are rough guidelines, and each node operator
should monitor their node to ensure good performance for the intended task.
The size of your node will also grow over time.

## Install the node
1. Set up directories:

  Create a ronin directory:
  ```
  mkdir ~/ronin
  ```

  Go to the newly created directory:
  ```
  cd ~/ronin
  ```

  Create a directory for bridge data:
  ```
  mkdir -p data
  ```

  Create a directory for chain data:
  ```
  mkdir -p chaindata/data/ronin
  ```

2. Create a file called `docker-compose.yml`:

  ```
  vim docker-compose.yml
  ```

3. Paste the following into `docker-compose.yml`:

  ```
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
        - SYNC_MODE=full
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
        - ~/ronin/data:/var/lib/postgresql/data
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
     * `node`, which pulls a Ronin node image from the GitHub Container Registry.
     * `bridge`, which pulls a bridge image.
     * `db`, which builds a Postgres database for the bridge.

4. Create an `.env` file to store configuration parameters for the services:

  ```
  vim .env
  ```

5. Paste the following into `.env`:

  ```
  ETHEREUM_ENDPOINT=insert-ethereum-endpoint
  RPC_ENDPOINT=http://node:8545
  
  BRIDGE_IMAGE=insert-latest-bridge-image
  NODE_IMAGE=insert-latest-node-image

  BRIDGE_OPERATOR_PRIVATE_KEY=insert-operator-private-key
  BRIDGE_VOTER_PRIVATE_KEY=insert-voter-private-key
  VALIDATOR_PRIVATE_KEY=insert-validator-private-key
  
  PASSWORD=insert-password
  
  INSTANCE_NAME=insert-instance-name

  DB_USERNAME=postgres
  DB_PASSWORD=insert-db-password
  DB_NAME=bridge
  POSTGRES_DB=bridge

  CONFIG_PATH=config.mainnet.json

  RONIN_TASK_INTERVAL=3
  RONIN_TRANSACTION_CHECK_PERIOD=50
  RONIN_MAX_PROCESSING_TASKS=200
  ETHEREUM_GET_LOGS_BATCH_SIZE=100

  BOOTNODES=enode://cfa5f00c55eba79f359c9d95f5c0b2bb8e173867ffbb6e212c6799a52918502519e56650970e34caf1cd17418d4da46c3243588578886c3b4f8c42d1934bf108@104.198.242.88:30303,enode://f500391c41906a1dae249df084a3d1659fe602db671730b2778316114a5f7df44a0c6864a8dfffdc380fc81c6965dd911338e0e2591eb78a506857015d166250@34.135.18.26:30303,enode://fc7b8ceafe16e6f79ab2da3e73d0a3163d0c28efe0778863102f8f27758986fe28c1540a9a0bbdff29ab93ad1c5803462efe6c98165bbb404d9d099a55f1d2c9@130.211.208.201:30303

  NETWORK_ID=2020

  GASPRICE=20000000000

  MINE=true

  VERBOSITY=3

  CHAIN_STATS_WS_SERVER=stats.roninchain.com
  CHAIN_STATS_WS_SECRET=xQj2MZPaN6

  RONIN_PARAMS=--http.api eth,net,web3,consortium --miner.gaslimit 100000000 --miner.gasreserve 10000000
  ```

  Replace the following values in the `.env` file with your information:
     * `ETHEREUM_ENDPOINT`: Your Ethereum RPC endpoint.
     * `BRIDGE_IMAGE`: The version of your bridge's image, which can be found under [Bridge operator](./../latest.md#bridge-operator)
     * `BRIDGE_OPERATOR_PRIVATE_KEY`: Your bridge operator private key without the `0x` prefix.
     * `BRIDGE_VOTER_PRIVATE_KEY`: Your bridge voter private key without the `0x` prefix. Only governor roles need to set this, otherwise you can leave it blank. 
     * `VALIDATOR_PRIVATE_KEY`: Your validator private key without the `0x` prefix.
     * `DB_PASSWORD`: Your Postgres database password.
     * `NODE_IMAGE`: The version of your node's image, which can be found under [Ronin node](./../latest.md#ronin-node).
     * `INSTANCE_NAME`: The name of your node that you want to be displayed on the [stats page](https://stats.roninchain.com/).
     * `PASSWORD`: The password to encrypt the node's keyfile.

6. (Optional) Download the snapshot:

  ```
  cd ~/ronin/chaindata/data/ronin/
  curl <chaindata latest check here https://github.com/axieinfinity/ronin-snapshot> -o chaindata.tar && tar -xvf chaindata.tar
  mv <uncompressed data> chaindata
  ```

7. Start the node:

  ```
  cd ~/ronin && docker-compose up -d
  ```
  
  This command pulls a Ronin node image, a bridge image, a Postgres database, and starts the services you defined.

8. After a few minutes, go to the [stats page](https://stats.roninchain.com/) to check the status of your node. If it's green, the node is connected and up to date with the network.

9. Review the log for the validator and the bridge (the node should sync to the latest block for making the bridge work).

  ```
  docker logs node -f --tail 100
  docker logs bridge -f --tail 100
  ```
