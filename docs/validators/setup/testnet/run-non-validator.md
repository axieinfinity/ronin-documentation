---
description: Install a testnet non-validator node using Docker.
title: Run a non-validator node
tags:
  - docker-testnet
---

## Overview

This guide demonstrates how to run a non-validator node on the Saigon
testnet using Docker. A non-validator node is also known as an RPC
(remote procedure call) node.

## Prerequisites

Install Docker Engine and the Docker Compose plugin:

* [Docker Engine](https://docs.docker.com/engine/)
* [Docker Compose](https://docs.docker.com/compose/)

## Run the node

1. Set up directories:

   ```bash
   mkdir -p ~/ronin/docker
   cd ~/ronin
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
         - SYNC_MODE=full
         - PASSWORD=${PASSWORD}
         - NETWORK_ID=${NETWORK_ID}
         - RONIN_PARAMS=${RONIN_PARAMS}
         - VERBOSITY=${VERBOSITY}
         - MINE=${MINE}
         - GASPRICE=${GASPRICE}
         - GENESIS_PATH=${GENESIS_PATH}
         - ETHSTATS_ENDPOINT=${INSTANCE_NAME}:${CHAIN_STATS_WS_SECRET}@${CHAIN_STATS_WS_SERVER}:443
   ```

   This compose file defines the `node` service that pulls a Ronin node image from the GitHub Container Registry.
3. In the `docker` directory, create an `.env` file and add the following content, replacing the `<...>` placeholder values with your information:

   ```text
   # The name of your node that you want displayed on https://ronin-stats.roninchain.com/
   INSTANCE_NAME=<INSTANCE_NAME>
   
   # The latest version of the node's image as listed in https://docs.roninchain.com/validators/setup/upgrade-validator
   NODE_IMAGE=<NODE_IMAGE>
 
   # The password used to encrypt the node's private key file
   PASSWORD=<PASSWORD>
 
   MINE=false
 
   NETWORK_ID=2021
   GASPRICE=20000000000
   VERBOSITY=3
 
   CHAIN_STATS_WS_SECRET=xQj2MZPaN72
   CHAIN_STATS_WS_SERVER=ronin-stats-ws.roninchain.com
 
   CONFIG_PATH=config.testnet.json
   GENESIS_PATH=testnet.json
   DEPLOYMENT=test
   
   RONIN_PARAMS=--http.api eth,net,web3 --txpool.pricelimit 20000000000 --txpool.nolocals --discovery.dns enrtree://AJCNIAXQIPO55NW3QE2NUBBDMPYZDOQUCAEUS65NHQFMUUFES5KOW@saigon.nodes.roninchain.com
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

   This command pulls a Ronin node image and starts the service you defined.
6. Review the log:

   ```bash
   docker logs node -f --tail 100
   ```

7. After a few minutes, check the status of your node on the [Ronin Network Status](https://ronin-stats.roninchain.com/) page, the **Testnet** section. If it's green, the node is connected and up to date with the network.
