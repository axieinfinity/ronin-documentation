---
description: Run a testnet validator and bridge operator on one machine using Docker.
title: Run a validator and bridge operator together
tags:
- docker-testnet
---

## Overview

This guide demonstrates how to run a testnet validator node and a bridge operator on one machine using Docker.

## Before you start

### Docker

Install Docker Engine and the Docker Compose plugin:

* [Docker Engine](https://docs.docker.com/engine/)
* [Docker Compose](https://docs.docker.com/compose/)

### RPC endpoints

Have two RPC endpoints ready:

* Ronin RPC endpoint for listening and sending events on the Saigon testnet: `https://saigon-testnet.roninchain.com/rpc`.
* Ethereum RPC endpoint for listening and sending events on the Ethereum chain, such as [Alchemy](https://www.alchemy.com/overviews/private-rpc-endpoint) or Infura.

### Private keys

Generate private keys for operating the nodes:

* One key for the validator
* One key for the bridge

For more information, see [Generate keys](../generate-keys.md).

## Run the node

1. Set up directories:

   ```bash
   mkdir -p ~/ronin/docker
   cd ~/ronin
   ```

   Create a directory for bridge data:

   ```bash
   mkdir bridgedata
   ```

   Create a directory for chain data:

   ```bash
   mkdir -p chaindata/data/ronin
   ```

2. In the `docker` directory, create a `docker-compose.yml` file with the following configuration:

   ```yaml
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
         - NETWORK_ID=${NETWORK_ID}
         - RONIN_PARAMS=${RONIN_PARAMS}
         - VERBOSITY=${VERBOSITY}
         - MINE=${MINE}
         - GASPRICE=${GASPRICE}
         - GENESIS_PATH=${GENESIS_PATH}
         - ETHSTATS_ENDPOINT=${INSTANCE_NAME}:${CHAIN_STATS_WS_SECRET}@${CHAIN_STATS_WS_SERVER}:443
         - BLS_PASSWORD=${BLS_PASSWORD}
         - BLS_PRIVATE_KEY=${BLS_PRIVATE_KEY}
         - BLS_AUTO_GENERATE=${BLS_AUTO_GENERATE}
         - ENABLE_FAST_FINALITY=${ENABLE_FAST_FINALITY}
         - ENABLE_FAST_FINALITY_SIGN=${ENABLE_FAST_FINALITY_SIGN}
         - BLS_SHOW_PRIVATE_KEY=${BLS_SHOW_PRIVATE_KEY}
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
  
     * `node` that pulls a full Ronin node image from the GitHub Container Registry.
     * `bridge` that pulls a bridge image.
     * `db` that builds a Postgres database for the bridge.

3. In the `docker` directory, create an `.env` file and add the following content, replacing the `<...>` placeholder values with your information:

   ```text
   # Your Ethereum RPC endpoint
   ETHEREUM_ENDPOINT=<ETHEREUM_ENDPOINT>
 
   # The name of your node that you want displayed on https://ronin-stats.roninchain.com/
   INSTANCE_NAME=<INSTANCE_NAME>
 
   # The latest version of the node's image as listed in https://docs.roninchain.com/validators/setup/upgrade-validator
   NODE_IMAGE=<NODE_IMAGE>
   
   # The latest version of the bridge's image as listed in https://docs.roninchain.com/bridge-operators/setup/upgrade-bridge
   BRIDGE_IMAGE=<BRIDGE_IMAGE>
 
   # Your bridge operator private key without the 0x prefix
   BRIDGE_OPERATOR_PRIVATE_KEY=<BRIDGE_OPERATOR_PRIVATE_KEY>
   
   # Your validator private key without the 0x prefix
   VALIDATOR_PRIVATE_KEY=<VALIDATOR_PRIVATE_KEY>
 
   # The password used to encrypt the node's private key file
   PASSWORD=<PASSWORD>
 
   # BLS Wallet features
   # Your BLS private key without the 0x prefix
   BLS_PRIVATE_KEY=<BLS_PRIVATE_KEY>
 
   # The password used to encrypt the BLS private key file
   BLS_PASSWORD=<BLS_PASSWORD>
 
   # Whether to participate in the finality vote broadcast
   ENABLE_FAST_FINALITY=true
 
   # Whether to produce the finality vote
   ENABLE_FAST_FINALITY_SIGN=true
  
   # Whether to automatically generate BLS private key
   BLS_AUTO_GENERATE=false
 
   # Whether to show the raw BLS private key after decryption
   BLS_SHOW_PRIVATE_KEY=false
 
   DB_NAME=bridge
   DB_USERNAME=postgres
 
   # The Postgres database password
   DB_PASSWORD=<DB_PASSWORD>
 
   RPC_ENDPOINT=http://node:8545
 
   CONFIG_PATH=config.testnet.json
   GENESIS_PATH=testnet.json
   DEPLOYMENT=test
 
   RONIN_TASK_INTERVAL=3
   RONIN_TRANSACTION_CHECK_PERIOD=50
   RONIN_MAX_PROCESSING_TASKS=200
   ETHEREUM_GET_LOGS_BATCH_SIZE=100
   
   NETWORK_ID=2021
 
   GASPRICE=20000000000
   
   MINE=true
   
   VERBOSITY=3

   CHAIN_STATS_WS_SECRET=xQj2MZPaN72
   CHAIN_STATS_WS_SERVER=ronin-stats-ws.roninchain.com
 
   RONIN_PARAMS=--http.api eth,net,web3,consortium --miner.gaslimit 100000000 --miner.gasreserve 10000000 --discovery.dns enrtree://AJCNIAXQIPO55NW3QE2NUBBDMPYZDOQUCAEUS65NHQFMUUFES5KOW@saigon.nodes.roninchain.com
   ```

4. (Optional) Download the snapshot from the [ronin-snapshot](https://github.com/axieinfinity/ronin-snapshot) repo:

   ```bash
   cd ~/ronin/chaindata/data/ronin/
   wget -q -O - <snapshot URL from the README file in the repo> | tar -I zstd -xvf -
   ```

5. Start the node:

   ```bash
   cd ~/ronin && docker-compose up -d
   ```
  
   This command pulls a Ronin node image, a bridge image, a Postgres database, and starts the services you defined.
6. After a few minutes, check the status of your node on the [Ronin Network Status](https://ronin-stats.roninchain.com/) page, the **Testnet** section. If it's green, the node is connected and up to date with the network.

7. Review the log for the validator and the bridge (the node should sync to the latest block for making the bridge work).

   ```bash
   docker logs node -f --tail 100
   docker logs bridge -f --tail 100
   ```
