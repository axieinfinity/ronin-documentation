---
description: Set up and run an archive node on mainnet
---

# Run an archive node
This page describes how to set up and run an archive node on mainnet.

## Latest release
### RPC node
* [https://github.com/axieinfinity/ronin/releases/tag/v2.5.1](https://github.com/axieinfinity/ronin/releases/tag/v2.5.1)
* [ghcr.io/axieinfinity/ronin:v2.5.1-d1a6cc9](https://github.com/axieinfinity/ronin/pkgs/container/ronin/69326810?tag=v2.5.1-d1a6cc9)

## Prerequisites
* You must be a root user.
* Your machine must meet the minimum hardware requirements:
  * 8 CPU cores
  * 32 GB RAM
  * 7 TB high-speed SSD
* You need to have [docker-compose](https://docs.docker.com/compose/install/) installed.

## Set up and run
1\. In your working directory, create subdirectories for the config and chain data by running the following commands:

```
mkdir -p  /axie/ronin-manager
mkdir -p ~/.skymavis/chaindata/data/ronin/
```

2\. Navigate to the `ronin-manager` directory:

```
cd /axie/ronin-manager
```

3\. Create a `docker-compose` file:

```
vim docker-compose.yml
```

4\. Paste the following contents into the file:

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
      - ~/.skymavis/chaindata:/ronin
    environment:
      - SYNC_MODE=full
      - PASSWORD=${PASSWORD}
      - PRIVATE_KEY=${VALIDATOR_PRIVATE_KEY}
      - BOOTNODES=${BOOTNODES}
      - NETWORK_ID=${NETWORK_ID}
      - RONIN_PARAMS=${RONIN_PARAMS}
      - VERBOSITY=${VERBOSITY}
      - MINE=false
      - GASPRICE=${GASPRICE}
      - ETHSTATS_ENDPOINT=${INSTANCE_NAME}:${CHAIN_STATS_WS_SECRET}@${CHAIN_STATS_WS_SERVER}:443
```

5\. Create an `.env` file:

```
vim .env
```

6\. Paste the following contents into the file, replacing the `insert-...` placeholder values with your own:

```
# BOOTNODES address of the bootnode to connect to the network, will be auto-filled
BOOTNODES=enode://cfa5f00c55eba79f359c9d95f5c0b2bb8e173867ffbb6e212c6799a52918502519e56650970e34caf1cd17418d4da46c3243588578886c3b4f8c42d1934bf108@104.198.242.88:30303,enode://f500391c41906a1dae249df084a3d1659fe602db671730b2778316114a5f7df44a0c6864a8dfffdc380fc81c6965dd911338e0e2591eb78a506857015d166250@34.135.18.26:30303,enode://fc7b8ceafe16e6f79ab2da3e73d0a3163d0c28efe0778863102f8f27758986fe28c1540a9a0bbdff29ab93ad1c5803462efe6c98165bbb404d9d099a55f1d2c9@130.211.208.201:30303
# NETWORK_ID network id
NETWORK_ID=2020
# Setting for oracle services, where staging = rinkey + testnet, and production = ethereum + mainnet.
# Setting nodekey
GASPRICE=20000000000

# INSTANCE_NAME is the name of your instance that you want to display on the stats page.
INSTANCE_NAME=insert-your-instance-name

# Password to protect your private key.
PASSWORD=123456

NODE_IMAGE=ghcr.io/axieinfinity/ronin:v2.5.1-d1a6cc9
VERBOSITY=3

# CHAIN_STATS_WS_SERVER the endpoint to connect to stats website server
CHAIN_STATS_WS_SERVER=stats.roninchain.com
# CHAIN_STATS_WS_SECRET the secret to connect to the above server
CHAIN_STATS_WS_SECRET=xQj2MZPaN6

RONIN_PARAMS=--gcmode archive --http.api eth,net,web3,consortium --txpool.pricelimit 20000000000 --txpool.nolocals
```

7\. Start the node:

```
cd  /axie/ronin-manager && docker-compose up -d
```

After a few minutes, go to the [stats page](https://stats.roninchain.com/) to check the status of your node. If it's green, the node is connected and up to date with the network.