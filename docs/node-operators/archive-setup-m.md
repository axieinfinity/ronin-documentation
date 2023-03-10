---
description: Set up and run an archive node
---
# Run a full archive node (mainnet)

This page describes how to set up and run an archive Ronin node.

## Prerequisites
CPU: 8 cores
Memory: 32 GB
Disk: 7 TB SSD

## Steps

* Download the latest version of Ronin manager and uncompress:

```
$ curl -O -L -k https://stats.roninchain.com/downloads/ronin-manager-linux-latest.tar.gz

$ tar xf ronin-manager-linux-latest.tar.gz
```

* Initialize the environment by filling your params and instance name (you can check it on stats.roninchain.com later) and replacing the node image with the current version in the `.env` file:

```
$ cd pkg-ronin-manager-0.9.x

$ cp config/main.env .env

$ vi .env

# INSTANCE_NAME the name of your instance that you want to display on the website
INSTANCE_NAME=

# Additional Params
RONIN_PARAMS=--gcmode archive --http.api eth,net,web3,debug,consortium

# Replace latest NODE_IMAGE
NODE_IMAGE=axieinfinity/ronin-mainnet:v2.4.0-6034a62cf
```

* Remove the `docker-compose.yml` file and create a new one. The default configuration is for Ronin validators, running non-validating should use the new one:

```
$ rm -rf docker-compose.yml

$ vi docker-compose.yml
```

Your new docker-compose file must contain only node service, it should be like this:

```
version: "3"
services:
  node:
    image: ${NODE_IMAGE}
    stop_grace_period: 5m
    restart: always
    hostname: node
    container_name: node
    ports:
      - 127.0.0.1:8545:8545
      - 127.0.0.1:8546:8546
      - 30303:30303
      - 30303:30303/udp
    volumes:
      - ~/.skymavis/chaindata:/ronin
    environment:
      - MINE=false
      - SYNC_MODE=full
      - PASSWORD=${PASSWORD}
      - BOOTNODES=${BOOTNODES}
      - NETWORK_ID=${NETWORK_ID}
      - ETHSTATS_ENDPOINT=${INSTANCE_NAME}:${CHAIN_STATS_WS_SECRET}@${CHAIN_STATS_WS_SERVER}:443
      - RONIN_PARAMS=${RONIN_PARAMS}
```

* Pull the latest image and run node:

```
$ ./ronin-manager install

$ ./ronin-manager pull

$ ./ronin-manager start
```

* After some minutes, verify your node is connecting and up to date with the network at [stats.roninchain.com](https://stats.roninchain.com)

6. Start your Ronin node
```
$ ./ronin-manager start
```

