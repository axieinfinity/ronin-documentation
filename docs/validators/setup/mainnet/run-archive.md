---
description: Install a mainnet archive node using Docker.
title: Run an archive node
tags:
  - docker-mainnet
---

## Overview

This guide demonstrates how to run an archive node on the mainnet using Docker.

## Before you start

### Docker

* Install [Docker Engine](https://docs.docker.com/engine/install/)
* Install [Docker Compose plugin](https://docs.docker.com/compose/install/)

### System requirements

Recommended system requirements for running an archive node on the mainnet:

* 8-core CPU
* 32 GB RAM
* 7 TB high-speed SSD
* x86-64 architecture

These hardware requirements are rough guidelines, and each node operator
should monitor their node to ensure good performance for the intended task.
The size of your Ronin node will also grow over time.

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
         - ~/.ronin/chaindata:/ronin
       environment:
         - SYNC_MODE=full
         - PASSWORD=${PASSWORD}
         - NETWORK_ID=${NETWORK_ID}
         - RONIN_PARAMS=${RONIN_PARAMS}
         - VERBOSITY=${VERBOSITY}
         - MINE=false
         - GASPRICE=${GASPRICE}
         - ETHSTATS_ENDPOINT=${INSTANCE_NAME}:${CHAIN_STATS_WS_SECRET}@${CHAIN_STATS_WS_SERVER}:443
   ```

   This compose file defines the `node` service, which pulls a Ronin node image from the GitHub Container Registry.
1. Create an `.env` file to store configuration parameters for the service:

   ```bash
   vim .env
   ```

1. Paste the following into `.env` and replace placeholder values (like *`INSTANCE_NAME`*) with your node's information:

   ```text
   # The name of your node that you want displayed on https://stats.roninchain.com/
   INSTANCE_NAME=INSTANCE_NAME
 
   # The latest version of the node's image as listed in https://docs.roninchain.com/validators/setup/upgrade-validator
   NODE_IMAGE=NODE_IMAGE
 
   # The password used to encrypt the node's private key file
   PASSWORD=PASSWORD
 
   NETWORK_ID=2020
   GASPRICE=20000000000
 
   CONFIG_PATH=config.mainnet.json
   VERBOSITY=3
 
   CHAIN_STATS_WS_SECRET=WSyDMrhRBe111
   CHAIN_STATS_WS_SERVER=ronin-stats-ws.roninchain.com
 
   RONIN_PARAMS=--gcmode archive --http.api eth,net,web3 --txpool.pricelimit 20000000000 --txpool.nolocals --discovery.dns enrtree://AIGOFYDZH6BGVVALVJLRPHSOYJ434MPFVVQFXJDXHW5ZYORPTGKUI@nodes.roninchain.com
   ```

1. Start the node:

   ```bash
   cd ~/ronin && docker-compose up -d
   ```

   This command pulls a Ronin node image and starts the service you defined.
1. After a few minutes, check the status of your node on the [Ronin Network Status](https://ronin-stats.roninchain.com/) page. If it's green, the node is connected and up to date with the network.
