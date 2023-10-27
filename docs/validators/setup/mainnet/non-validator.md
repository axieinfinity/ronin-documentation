---
description: Install a mainnet non-validator node using Docker.
slug: /validators/setup/mainnet/non-validator
tags:
  - docker-mainnet
---

# Run a non-validator node

This guide demonstrates how to run a non-validator node on the mainnet
using Docker. A non-validator node is also known as an RPC (remote
procedure call) node.

## Prerequisites

### Docker

* [Docker Engine](https://docs.docker.com/engine/install/)
* [Docker Compose plugin](https://docs.docker.com/compose/install/)
* [Zstandard](https://github.com/facebook/zstd)

### System requirements

Recommended system requirements for running a non-validator node on the mainnet:

* 6-core CPU
* 25 GB RAM
* 700 GB high-speed SSD
* x86-64 architecture

These hardware requirements are rough guidelines, and each node operator
should monitor their node to ensure good performance for the intended task.
The size of your node will also grow over time.

## Install the node

1. Set up directories:

  Create a node directory:

  ```
  mkdir ~/ronin
  ```

  Go to the newly created directory:

  ```
  cd ~/ronin
  ```

  Create a chain data directory:

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
        - BOOTNODES=${BOOTNODES}
        - NETWORK_ID=${NETWORK_ID}
        - RONIN_PARAMS=${RONIN_PARAMS}
        - VERBOSITY=${VERBOSITY}
        - MINE=${MINE}
        - GASPRICE=${GASPRICE}
        - ETHSTATS_ENDPOINT=${INSTANCE_NAME}:${CHAIN_STATS_WS_SECRET}@${CHAIN_STATS_WS_SERVER}:443
  ```

  This compose file defines the `node` service, which pulls a Ronin node image from the GitHub Container Registry.

4. Create an `.env` file to store configuration parameters for the service:

  ```
  vim .env
  ```

5. Paste the following into `.env` and replace placeholder values (like *`INSTANCE_NAME`*) with your node's information:

  ```
  # The name of your node that you want displayed on https://stats.roninchain.com/
  INSTANCE_NAME=INSTANCE_NAME

  # The latest version of the node's image as listed in https://docs.roninchain.com/docs/validators/setup/upgrade-validator
  NODE_IMAGE=NODE_IMAGE

  # The password used to encrypt the node's private key file
  PASSWORD=PASSWORD

  MINE=false

  BOOTNODES=enode://cfa5f00c55eba79f359c9d95f5c0b2bb8e173867ffbb6e212c6799a52918502519e56650970e34caf1cd17418d4da46c3243588578886c3b4f8c42d1934bf108@104.198.242.88:30303,enode://f500391c41906a1dae249df084a3d1659fe602db671730b2778316114a5f7df44a0c6864a8dfffdc380fc81c6965dd911338e0e2591eb78a506857015d166250@34.135.18.26:30303,enode://fc7b8ceafe16e6f79ab2da3e73d0a3163d0c28efe0778863102f8f27758986fe28c1540a9a0bbdff29ab93ad1c5803462efe6c98165bbb404d9d099a55f1d2c9@130.211.208.201:30303

  NETWORK_ID=2020
  GASPRICE=20000000000
  VERBOSITY=3

  CHAIN_STATS_WS_SECRET=xQj2MZPaN6
  CHAIN_STATS_WS_SERVER=stats.roninchain.com

  RONIN_PARAMS=--http.api eth,net,web3,consortium --txpool.pricelimit 20000000000 --txpool.nolocals
  ```

1. (Optional) Download the snapshot from [ronin-snapshot](https://github.com/axieinfinity/ronin-snapshot)

  ```
  cd ~/ronin/chaindata/data/ronin/
  wget -q -O - <snapshot URL> | tar -I zstd -xvf -
  mv <uncompressed data> chaindata
  ```

7. Start the node:

  ```
  cd ~/ronin && docker-compose up -d
  ```

  This command pulls a Ronin node image and starts the service you defined.

8. Review the log:

  ```
  docker logs node -f --tail 100
  ```

9. After a few minutes, check the status of your node on the [Ronin Network Status](https://stats.roninchain.com/) page. If it's green, the node is connected and up to date with the network.
