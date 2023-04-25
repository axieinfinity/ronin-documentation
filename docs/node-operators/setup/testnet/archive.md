---
description: Install a testnet archive node using Docker.
slug: /node-operators/testnet/archive
tags:
  - docker-testnet
---

# Run an archive node

This guide demonstrates how to run an archive node on the Saigon testnet using Docker.

## Prerequisites

### Docker

* [Docker Engine](https://docs.docker.com/engine/install/)
* [Docker Compose plugin](https://docs.docker.com/compose/install/)

### System requirements

Recommended system requirements for running an archive node on the Saigon testnet:

* 4-core CPU
* 8 GB RAM
* 250 GB SSD
* x86-64 architecture

These hardware requirements are rough guidelines, and each node operator
should monitor their node to ensure good performance for the intended task.
The size of your Ronin node will also grow over time.

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

  Create a directory for chain data:
  
  ```
  mkdir -p chaindata/data/ronin
  ```

2. Create a file called `docker-compose`:

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
        - ~/.ronin/chaindata:/ronin
      environment:
        - SYNC_MODE=full
        - PASSWORD=${PASSWORD}
        - BOOTNODES=${BOOTNODES}
        - NETWORK_ID=${NETWORK_ID}
        - RONIN_PARAMS=${RONIN_PARAMS}
        - VERBOSITY=${VERBOSITY}
        - MINE=false
        - GASPRICE=${GASPRICE}
        - GENESIS_PATH=${GENESIS_PATH}
        - ETHSTATS_ENDPOINT=${INSTANCE_NAME}:${CHAIN_STATS_WS_SECRET}@${CHAIN_STATS_WS_SERVER}:443
  ```

  This compose file defines the `node` service, which pulls a Ronin node image from the GitHub Container Registry.

4. Create an `.env` file to store configuration parameters for the service:

  ```
  vim .env
  ```

5. Paste the following into `.env` and replace placeholder values (like *`INSTANCE_NAME`*) with your node's information:

  ```
  # The name of your node that you want displayed on https://saigon-stats.roninchain.com/
  INSTANCE_NAME=INSTANCE_NAME

  # The latest version of the node's image as listed in https://docs.roninchain.com/docs/node-operators/setup/latest
  NODE_IMAGE=NODE_IMAGE

  # The password to encrypt the node's keyfile
  PASSWORD=PASSWORD

  BOOTNODES=enode://77e9cfce2d4c01c61115591984ca4012923c29846a7b66c775fed0cc8fe5f41b304a71e3e9433e067ea7ef86701c13992fefacf9e223786c62c530a7110e8142@35.224.85.190:30303

  NETWORK_ID=40925
  GASPRICE=20000000000

  DEPLOYMENT=test

  VERBOSITY=3

  CHAIN_STATS_WS_SECRET=xQj2MZPaN6
  CHAIN_STATS_WS_SERVER=saigon-stats.roninchain.com
  GENESIS_PATH=testnet.json

  RONIN_PARAMS=--gcmode archive --http.api eth,net,web3 --txpool.pricelimit 20000000000 --txpool.nolocals
  ```

6. Start the node:

  ```
  cd ~/ronin && docker-compose up -d
  ```
  
  This command pulls a Ronin node image and starts the service you defined.

7. After a few minutes, check the status of your node on the [Ronin Network Status](https://saigon-stats.roninchain.com/) page. If it's green, the node is connected and up to date with the network.
