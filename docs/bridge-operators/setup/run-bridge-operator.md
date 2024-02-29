---
description: Run a bridge operator node on the Ronin mainnet.
title: Run a bridge operator
tags:
- docker-mainnet
---

## Overview

This guide demonstrates how to run a bridge operator node on the mainnet using Docker.

## Before you start

### Docker

* [Docker Engine](https://docs.docker.com/engine/install/)
* [Docker Compose plugin](https://docs.docker.com/compose/install/)
* [Zstandard](https://github.com/facebook/zstd)

### Ethereum endpoint

You need an Ethereum RPC endpoint to listen for events from Ethereum chain and send events to Ethereum. This can be an [Alchemy](https://www.alchemy.com/overviews/private-rpc-endpoint), Infura or any other Ethereum RPC endpoint.

### Private keys

Generate two private keys as described in [Generate keys](./../../validators/setup/generate-keys.md):

* One key for the bridge voter (if you're a governor)
* One key for the bridge operator

### System requirements

Recommended system requirements for running a bridge operator on the mainnet:

* 4-core CPU
* 8 GB RAM
* 100 GB high-speed SSD
* x86-64 architecture

These requirements are rough guidelines, and each node operator
should monitor their node to ensure good performance for the intended task.
The size of your Ronin node will also grow over time.

## Run the node

1. Create a bridge directory:

   ```bash
   mkdir ~/ronin-bridge
   ```

   Go to the newly created directory:

   ```bash
   cd ~/ronin-bridge
   ```

   Create a directory for bridge data:

   ```bash
   mkdir -p data
   ```

1. Create a file called `docker-compose.yml`:

   ```bash
   vim docker-compose.yml
   ```

1. Paste the following into `docker-compose.yml`:

   ```yaml
   version: "3"
   services:
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
         - ~/ronin-bridge/data:/var/lib/postgresql/data
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
   ```

   This compose file defines three services:

     * `bridge`, which pulls a bridge image.
     * `db`, which builds a Postgres database for the bridge.

1. Create an `.env` file to store configuration parameters for the services:

   ```bash
   vim .env
   ```

1. Paste the following into `.env` and replace placeholder values (like *`BRIDGE_STATS_NODE_NAME`*) with your bridge's information:

   ```text
   # Your Ethereum RPC endpoint
   LISTENERS__ETHEREUM__RPCURL=LISTENERS__ETHEREUM__RPCURL
 
   # The latest version of the bridge's image as listed in https://docs.roninchain.com/bridge-operators/setup/upgrade-bridge-operator
   BRIDGE_IMAGE=BRIDGE_IMAGE
 
   # Your bridge operator private key without the 0x prefix
   LISTENERS__RONIN__SECRET__BRIDGEOPERATOR__PLAINPRIVATEKEY=LISTENERS__RONIN__SECRET__BRIDGEOPERATOR__PLAINPRIVATEKEY
 
   # If you're a governor, uncomment this line and replace with your bridge voter key, without the 0x prefix
   # BRIDGE_VOTER_PRIVATE_KEY=BRIDGE_VOTER_PRIVATE_KEY
 
   DATABASE__DBNAME=bridge
   DATABASE__USER=postgres
 
   # The Postgres database password
   DATABASE__PASSWORD=DATABASE__PASSWORD
 
   CONFIG_PATH=config.mainnet.json
   VERBOSITY=3
 
   LISTENERS__RONIN__RPCURL=<replace_your_rpc_endpoint>
 
   LISTENERS__RONIN__TASKINTERVAL=3
   LISTENERS__RONIN__TRANSACTIONCHECKPERIOD=50
   LISTENERS__RONIN__MAXPROCESSINGTASKS=200
   LISTENERS__ETHEREUM__GETLOGSBATCHSIZE=100
 
 
   LISTENERS__RONIN__STATS__NODE=<your_node_name>
   LISTENERS__RONIN__STATS__HOST=wss://ronin-stats-ws.roninchain.com/bridge
   LISTENERS__RONIN__STATS__SECRET=WSyDMrhRBe111
   ```

1. Start the bridge operator

   ```bash
   cd ~/ronin-bridge && docker-compose up -d
   ```

   This command pulls a Ronin node image, a bridge image, a Postgres database, and starts the services you defined.
1. After a few minutes, check the status of your node on the [Ronin Network Status](https://ronin-stats.roninchain.com/) page. If it's green, the node is connected and up to date with the network.
1. Review the log for the bridge.

   ```bash
   docker logs node -f --tail 100
   docker logs bridge -f --tail 100
   ```

## Verify the bridge is working

Whenever you wish to verify that your node is working, run the following command:

```bash
docker-compose logs bridge | head -n 20
```

Verify that the operator account address in the response matches your registered
bridge operator address. If you're a Governing Validator, also check that the
voter account address matches the registered bridge voter address.

```bash
bridge     | INFO [03-22|07:59:10.368] [RoninListener] Operator account         address=0x2e82D2b56f858f79DeeF11B160bFC4631873da2B
bridge     | INFO [03-22|07:59:10.368] [RoninListener] Voter account            address=0x2295EdAA6BD5c07fB3227628c62Af12248106667
```
