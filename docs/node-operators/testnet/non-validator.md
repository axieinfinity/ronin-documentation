---
description: Set up and run a non-validator node
---
# Run a non-validator node
This page describes how to set up and run a non-validator node on testnet. This node is also known as an RPC (remote procedure call) node, because it's used for serving RPC requests.

## Latest release
### RPC node
* [https://github.com/axieinfinity/ronin/releases/tag/v2.5.1](https://github.com/axieinfinity/ronin/releases/tag/v2.5.1)
* [ghcr.io/axieinfinity/ronin:v2.5.1-d1a6cc9](https://github.com/axieinfinity/ronin/pkgs/container/ronin/69326810?tag=v2.5.1-d1a6cc9)

Snapshot: `https://storage.googleapis.com/testnet-chaindata/chaindata-4-1-2023.tar`
Snapshot checksum using Md5sum: `f7b467cdc879e3ab2ade41a7d4a40653`.

## Prerequisites

* You must be a root user.
* Your machine must meet the minimum hardware requirements:
  * 4 CPU cores
  * 8 GB RAM
  * 100 GB SSD
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
      - GENESIS_PATH=${GENESIS_PATH}
      - ETHSTATS_ENDPOINT=${INSTANCE_NAME}:${CHAIN_STATS_WS_SECRET}@${CHAIN_STATS_WS_SERVER}:443
```

5\. Create an `.env` file:

```
vim .env
```

6\. Paste the following contents into the file, replacing the `insert-...` placeholder values with your own:

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

CONFIG_PATH=config.testnet.json
NODE_IMAGE=ghcr.io/axieinfinity/ronin:v2.5.1-d1a6cc9
VERBOSITY=3

CHAIN_STATS_WS_SECRET=xQj2MZPaN6
CHAIN_STATS_WS_SERVER=saigon-stats.roninchain.com
GENESIS_PATH=testnet.json

RONIN_PARAMS=--http.api eth,net,web3,consortium --txpool.pricelimit 20000000000 --txpool.nolocals
```

7\. (Optional) Download the snapshot to save the time:

```
cd ~/.skymavis/chaindata/data/ronin/
curl https://storage.googleapis.com/testnet-chaindata/chaindata-4-1-2023.tar -o chaindata.tar && tar -xvf chaindata.tar
mv chaindata-4-1-2023 chaindata
```

8\. Start the node:

```
cd  /axie/ronin-manager && docker-compose up -d 
```

After a few minutes, go to the [stats page](https://saigon-stats.roninchain.com/) to check the status of your node. If it's green, the node is connected and up to date with the network.