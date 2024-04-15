---
description: Run a bridge node on the Ronin mainnet.
title: Run a bridge node
tags:
- docker-mainnet
---

## Overview

This guide demonstrates how to run a bridge node on the Ronin mainnet using Docker.

To be eligible for running a bridge node, you need to go through a governance process that requires approval of at least 70% of the current bridge operators.
Only the bridge operators selected by Sky Mavis and community can run bridge nodes.

## Prerequisites

### Docker

Install Docker Engine and the Docker Compose plugin:

* [Docker Engine](https://docs.docker.com/engine/)
* [Docker Compose](https://docs.docker.com/compose/)

### RPC endpoints

Have two RPC endpoints ready:

* Ronin RPC endpoint for listening and sending events on the mainnet: `https://api.roninchain.com/rpc`.
* Ethereum RPC endpoint for listening and sending events on the Ethereum chain, such as [Alchemy](https://www.alchemy.com/overviews/private-rpc-endpoint) or Infura.

### Private key

Generate a private key for operating the bridge node. For instructions, see [Generate keys](./../../validators/setup/generate-keys.md).

## Run the node

1. Set up a directory for the bridge and two nested directories for its data and the Docker configuration:

   ```bash
   mkdir -p ~/ronin-bridge/{data,docker}
   cd ~/ronin-bridge/docker/
   ```

2. In the `docker` directory, create a `docker-compose.yml` file with the following configuration:

   ```yaml
   version: "3.1"
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

   This compose file defines two services:

     * `bridge` that pulls a bridge image.
     * `db` that builds a Postgres database for the bridge.

3. In the `docker` directory, create an `.env` file and add the following content, replacing the `<...>` placeholder values with your information:

   ```text
   # Your Ethereum RPC endpoint
   LISTENERS__ETHEREUM__RPCURL=<ETHEREUM_RPC_ENDPOINT>
 
   # The latest version of the bridge's image as listed in https://docs.roninchain.com/bridge-operators/setup/upgrade-bridge
   BRIDGE_IMAGE=<BRIDGE_IMAGE>
 
   # Your bridge operator private key without the 0x prefix
   LISTENERS__RONIN__SECRET__BRIDGEOPERATOR__PLAINPRIVATEKEY=<BRIDGE_OPERATOR_PRIVATE_KEY>
 
   DATABASE__DBNAME=bridge
   DATABASE__USER=postgres
 
   # The Postgres database password
   DATABASE__PASSWORD=<DATABASE_PASSWORD>
 
   CONFIG_PATH=config.mainnet.json
   VERBOSITY=3

   # Ronin RPC endpoint
   LISTENERS__RONIN__RPCURL=<RONIN_RPC_ENDPOINT>
 
   LISTENERS__RONIN__TASKINTERVAL=3s
   LISTENERS__RONIN__TRANSACTIONCHECKPERIOD=50s
   LISTENERS__RONIN__MAXPROCESSINGTASKS=200
   LISTENERS__ETHEREUM__GETLOGSBATCHSIZE=100
 
   # The name of your node that you want displayed on https://ronin-stats.roninchain.com/
   LISTENERS__RONIN__STATS__NODE=<NODE_NAME>
   
   LISTENERS__RONIN__STATS__HOST=wss://ronin-stats-ws.roninchain.com/bridge
   LISTENERS__RONIN__STATS__SECRET=WSyDMrhRBe111
   ```

4. Start the bridge node:

   ```bash
   cd ~/ronin-bridge && docker-compose up -d
   ```

   This command pulls the bridge image and a Postgres database, and starts the services you defined.

5. After a few minutes, check the status of your node on the [Ronin Network Status](https://ronin-stats.roninchain.com/) page. If it's green, the node is connected and up to date with the network.
6. Review the log for the bridge.

   ```bash
   docker logs node -f --tail 100
   docker logs bridge -f --tail 100
   ```

## Verify the bridge is working

Whenever you wish to verify that your node is working, run the following command:

```bash
docker-compose logs bridge | head -n 20
```

Make sure that the "Operator account" address in the response matches your registered
bridge operator address.

Here's an example:

```bash
bridge     | INFO [03-22|07:59:10.368] [RoninListener] Operator account         address=0x2e82D2b56f858f79DeeF11B160bFC4631873da2B
```
