---
description: Run a validator node on the Ronin mainnet.
title: Run a validator
tags:
- docker-mainnet
- decoupling
---

## Overview

This guide demonstrates how to run a validator node on the mainnet using Docker.

## Before you start

### Docker

* Install [Docker Engine](https://docs.docker.com/engine/install/)
* Install [Docker Compose plugin](https://docs.docker.com/compose/install/)

### Private key

Generate a private key for your validator node as described in [Generate keys](./../generate-keys.md).

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

   ```bash
   mkdir ~/ronin
   ```

   Go to the newly created directory:

   ```bash
   cd ~/ronin
   ```

   Create a chain data directory:

   ```bash
   mkdir -p chaindata/data/ronin
   ```

2. Create a file called `docker-compose.yml`:

   ```bash
   vim docker-compose.yml
   ```

3. Paste the following into `docker-compose.yml`:

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
   ```

   This compose file defines the `node` service, which pulls the Ronin node image from the GitHub Container Registry.
4. Create an `.env` file to store configuration parameters for the service:

   ```bash
   vim .env
   ```

5. Paste the following into `.env` and replace placeholder values (like *`INSTANCE_NAME`*) with your node's information:

   ```text
   # The name of your node that you want displayed on https://ronin-stats.roninchain.com/
   INSTANCE_NAME=INSTANCE_NAME
 
   # The latest version of the node's image as listed in https://docs.roninchain.com/validators/setup/upgrade-validator
   NODE_IMAGE=NODE_IMAGE
 
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
 
   MINE=true
 
   NETWORK_ID=2020
   GASPRICE=20000000000
   VERBOSITY=3
 
   CHAIN_STATS_WS_SECRET=WSyDMrhRBe111
   CHAIN_STATS_WS_SERVER=ronin-stats-ws.roninchain.com
 
   RONIN_PARAMS=--http.api eth,net,web3,consortium --miner.gaslimit 100000000 --miner.gasreserve 10000000 --discovery.dns enrtree://AIGOFYDZH6BGVVALVJLRPHSOYJ434MPFVVQFXJDXHW5ZYORPTGKUI@nodes.roninchain.com
   ```

6. (Optional) Download the snapshot from the [ronin-snapshot](https://github.com/axieinfinity/ronin-snapshot) repo:

   ```bash
   cd ~/ronin/chaindata/data/ronin/
   wget -q -O - <snapshot URL from the README file in the repo> | tar -I zstd -xvf -
   ```

7. Start the node:

   ```bash
   cd ~/ronin && docker-compose up -d
   ```

   This command pulls a Ronin node image and starts the service you defined.
8. Review the log:

   ```bash
   docker logs node -f --tail 100
   ```

9. After a few minutes, check the status of your node on the [Ronin Network Status](https://ronin-stats.roninchain.com/) page. If it's green, the node is connected and up to date with the network.

## Verify the node is working

Whenever you wish to verify that your node is working, run the following command:

```bash
docker-compose logs node | head -n 20
```

Verify that the account address in the response matches your registered consensus address.

```bash
node | Using account acf8bf98d1632e602d0b1761771049af21dd6597
```
