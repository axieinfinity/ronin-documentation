---
description: Set up and run an archive node
---
# Run a full archive node (testnet)

This page describes how to set up and run an archive Ronin node.

## Latest release
### RPC Node
* [https://github.com/axieinfinity/ronin/releases/tag/v2.5.1](https://github.com/axieinfinity/ronin/releases/tag/v2.5.1)
* [ghcr.io/axieinfinity/ronin:v2.5.1-d1a6cc9](https://github.com/axieinfinity/ronin/pkgs/container/ronin/69326810?tag=v2.5.1-d1a6cc9)

## Prerequisites

* You must be a root user.
* Your machine must meet the minimum hardware requirements:
  * 4 CPU cores
  * 8 GB RAM
  * 250 GB SSD
* You need to have [docker-compose](https://docs.docker.com/compose/install/) installed.

## Steps

1. Create subdirectories.
```
mkdir -p  /axie/ronin-manager
mkdir -p  ~/bridgedata-v2
mkdir -p ~/.skymavis/chaindata/data/ronin/
```

2. Create a `docker-compose` configuration with the following contents.

```
cd /axie/ronin-manager  && vim docker-compose.yml
```

```
version: "3"
services:
  node:
    image: ${NODE_IMAGE}
    stop_grace_period: 5m
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
      - GENESIS_PATH=${GENESIS_PATH}
      - ETHSTATS_ENDPOINT=${INSTANCE_NAME}:${CHAIN_STATS_WS_SECRET}@${CHAIN_STATS_WS_SERVER}:443
```

3. Create an `.env` file with the following contents.

```
vim .env
```

```
# BOOTNODES address of the bootnode to connect to the network, will be auto-filled
BOOTNODES=enode://77e9cfce2d4c01c61115591984ca4012923c29846a7b66c775fed0cc8fe5f41b304a71e3e9433e067ea7ef86701c13992fefacf9e223786c62c530a7110e8142@35.224.85.190:30303
# NETWORK_ID network id
NETWORK_ID=40925
# Setting for oracle services, where staging = rinkey + testnet, and production = ethereum + mainnet.
DEPLOYMENT=test
# Setting nodekey
GASPRICE=20000000000

# INSTANCE_NAME is the name of your instance that you want to display on the stats page.
INSTANCE_NAME=insert-your-instance-name

# Password to protect your private key.
PASSWORD=123456

# Private key of validator address, without 0x. 
VALIDATOR_PRIVATE_KEY=insert-your-validator-private-key

CONFIG_PATH=config.testnet.json
NODE_IMAGE=ghcr.io/axieinfinity/ronin:v2.5.1-d1a6cc9
VERBOSITY=3

CHAIN_STATS_WS_SECRET=xQj2MZPaN6
CHAIN_STATS_WS_SERVER=saigon-stats.roninchain.com
GENESIS_PATH=testnet.json

RONIN_PARAMS=--gcmode archive --http.api eth,net,web3,consortium --txpool.pricelimit 20000000000 --miner.gasprice 20000000000 --txpool.nolocals
```

4. Start the node.
```
cd  /axie/ronin-manager && docker-compose up -d 
```

After a few minutes, go to the [stats page](https://saigon-stats.roninchain.com/) to verify that your node is connected and up to date with the network.