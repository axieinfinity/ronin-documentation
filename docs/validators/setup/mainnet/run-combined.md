---
description: Run a mainnet validator and bridge operator on one machine using Docker.
title: Run a validator and bridge operator together
tags:
- docker-mainnet
---

## Overview

This guide demonstrates how to run a mainnet validator node and a bridge operator on one machine using Docker.

## Before you start

### Docker

* Install [Docker Engine](https://docs.docker.com/engine/install/)
* Install [Docker Compose plugin](https://docs.docker.com/compose/install/)
* Install [Zstandard](https://github.com/facebook/zstd)

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

## Run the node

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
         - SYNC_MODE=full
         - PASSWORD=${PASSWORD}
         - PRIVATE_KEY=${VALIDATOR_PRIVATE_KEY}
         - NETWORK_ID=${NETWORK_ID}
         - RONIN_PARAMS=${RONIN_PARAMS}
         - VERBOSITY=${VERBOSITY}
         - MINE=${MINE}
         - GASPRICE=${GASPRICE}
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
         - ~/ronin/data:/var/lib/postgresql/data
     bridge:
       image: ${BRIDGE_IMAGE}
       restart: always
       container_name: bridge
       environment:
         - LISTENERS__RONIN__RPCURL=${LISTENERS__RONIN__RPCURL}
         - RONIN_BRIDGE_VOTER_KEY=${BRIDGE_VOTER_PRIVATE_KEY}
         - LISTENERS__RONIN__SECRET__BRIDGEOPERATOR__PLAINPRIVATEKEY=${LISTENERS__RONIN__SECRET__BRIDGEOPERATOR__PLAINPRIVATEKEY}
         - LISTENERS__ETHEREUM__RPCURL=${LISTENERS__ETHEREUM__RPCURL}
         - DATABASE__HOST=db
         - DATABASE__DBNAME=${DATABASE__DBNAME}
         - DATABASE__PORT=5432
         - DATABASE__USER=${DATABASE__USER}
         - DATABASE__PASSWORD=${DATABASE__PASSWORD}
         - VERBOSITY=${VERBOSITY}
         - CONFIG_PATH=${CONFIG_PATH}
         - LISTENERS__RONIN__TASKINTERVAL=${LISTENERS__RONIN__TASKINTERVAL}
         - LISTENERS__RONIN__TRANSACTIONCHECKPERIOD=${LISTENERS__RONIN__TRANSACTIONCHECKPERIOD}
         - LISTENERS__RONIN__MAXPROCESSINGTASKS=${LISTENERS__RONIN__MAXPROCESSINGTASKS}
         - LISTENERS__ETHEREUM__GETLOGSBATCHSIZE=${LISTENERS__ETHEREUM__GETLOGSBATCHSIZE}
         - LISTENERS__RONIN__STATS__NODE=${LISTENERS__RONIN__STATS__NODE}
         - LISTENERS__RONIN__STATS__HOST=${LISTENERS__RONIN__STATS__HOST}
         - LISTENERS__RONIN__STATS__SECRET=${LISTENERS__RONIN__STATS__SECRET}
       depends_on:
         - db
         - node
   ```

   This compose file defines three services:
     * `node`, which pulls a Ronin node image from the GitHub Container Registry.
     * `bridge`, which pulls a bridge image.
     * `db`, which builds a Postgres database for the bridge.

1. Create an `.env` file to store configuration parameters for the services:

   ```bash
   vim .env
   ```

1. Paste the following into `.env` and replace placeholder values (like *`INSTANCE_NAME`*) with your node's information:

   ```text
   # Your Ethereum RPC endpoint
   LISTENERS__ETHEREUM__RPCURL=LISTENERS__ETHEREUM__RPCURL
 
   # The name of your node that you want displayed on https://ronin-stats.roninchain.com/
   INSTANCE_NAME=INSTANCE_NAME
 
   # The latest version of the node's image as listed in https://docs.roninchain.com/validators/setup/upgrade-validator
   NODE_IMAGE=NODE_IMAGE
 
   # The latest version of the bridge's image as listed in https://docs.roninchain.com/bridge-operators/setup/upgrade-bridge-operator
   BRIDGE_IMAGE=BRIDGE_IMAGE
 
   # Your bridge operator private key without the 0x prefix
   LISTENERS__RONIN__SECRET__BRIDGEOPERATOR__PLAINPRIVATEKEY=LISTENERS__RONIN__SECRET__BRIDGEOPERATOR__PLAINPRIVATEKEY
 
   # If you're a governor, uncomment this line and replace with your bridge voter key, without the 0x prefix
   # BRIDGE_VOTER_PRIVATE_KEY=BRIDGE_VOTER_PRIVATE_KEY
 
   # Your validator private key without the 0x prefix
   VALIDATOR_PRIVATE_KEY=VALIDATOR_PRIVATE_KEY
 
   # The password used to encrypt the node's private key file
   PASSWORD=PASSWORD
 
   # BLS Wallet features
   # Your BLS private key without the 0x prefix
   BLS_PRIVATE_KEY=BLS_PRIVATE_KEY_WITHOUT_0x
 
   # The password used to encrypt the BLS private key file
   BLS_PASSWORD=BLS_PASSWORD
 
   # Whether to participate in the finality vote broadcast
   ENABLE_FAST_FINALITY=true
 
   # Whether to produce the finality vote
   ENABLE_FAST_FINALITY_SIGN=true
 
   # Whether to automatically generate BLS private key
   BLS_AUTO_GENERATE=false
 
   # Whether to show the raw BLS private key after decryption
   BLS_SHOW_PRIVATE_KEY=false
 
   DATABASE__DBNAME=bridge
   DATABASE__USER=postgres
 
   # The Postgres database password
   DATABASE__PASSWORD=DATABASE__PASSWORD
 
   LISTENERS__RONIN__RPCURL=http://node:8545
 
   CONFIG_PATH=config.mainnet.json
 
   LISTENERS__RONIN__TASKINTERVAL=3
   LISTENERS__RONIN__TRANSACTIONCHECKPERIOD=50
   LISTENERS__RONIN__MAXPROCESSINGTASKS=200
   LISTENERS__ETHEREUM__GETLOGSBATCHSIZE=100
 
   NETWORK_ID=2020
 
   GASPRICE=20000000000
 
   MINE=true
 
   VERBOSITY=3
 
   CHAIN_STATS_WS_SECRET=WSyDMrhRBe111
   CHAIN_STATS_WS_SERVER=ronin-stats-ws.roninchain.com
 
   RONIN_PARAMS=--http.api eth,net,web3,consortium --miner.gaslimit 100000000 --miner.gasreserve 10000000 --discovery.dns enrtree://AIGOFYDZH6BGVVALVJLRPHSOYJ434MPFVVQFXJDXHW5ZYORPTGKUI@nodes.roninchain.com
   
   LISTENERS__RONIN__STATS__NODE=<your_node_name>
   LISTENERS__RONIN__STATS__HOST=wss://ronin-stats-ws.roninchain.com/bridge
   LISTENERS__RONIN__STATS__SECRET=WSyDMrhRBe111
   ```

1. (Optional) Download the snapshot from the [ronin-snapshot](https://github.com/axieinfinity/ronin-snapshot) repo:

   ```bash
   cd ~/ronin/chaindata/data/ronin/
   wget -q -O - <snapshot URL from the README file in the repo> | tar -I zstd -xvf -
   ```

1. Start the node:

   ```bash
   cd ~/ronin && docker-compose up -d
   ```

   This command pulls a Ronin node image, a bridge image, a Postgres database, and starts the services you defined.
1. After a few minutes, check the status of your node on the [Ronin Network Status](https://ronin-stats.roninchain.com/) page. If it's green, the node is connected and up to date with the network.

1. Review the log for the validator and the bridge (the node should sync to the latest block for making the bridge work).

   ```bash
   docker logs node -f --tail 100
   docker logs bridge -f --tail 100
   ```
