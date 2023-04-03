---
description: Install a testnet archive node using Docker.
---

# Run an archive node
Set up and run an archive node on the Saigon testnet.

## Latest release
### RPC node
* [https://github.com/axieinfinity/ronin/releases/tag/v2.5.2](https://github.com/axieinfinity/ronin/releases/tag/v2.5.2)
* [ghcr.io/axieinfinity/ronin:v2.5.2-9bf4895](https://github.com/axieinfinity/ronin/pkgs/container/ronin/80511518?tag=v2.5.2-9bf4895)

## Prerequisites
Recommended system requirements for running an archive node on the Saigon testnet:
* [Docker Compose plugin](https://docs.docker.com/compose/install/)
* A machine that meets the minimum hardware requirements:
  * 4-core CPU
  * 8 GB RAM
  * 250 GB SSD

## Set up and run
1. In your working directory, create subdirectories for the config and chain data by running the following commands:

```
mkdir -p /axie/ronin-manager
mkdir -p ~/.skymavis/chaindata/data/ronin/
```

2. Go to the `ronin-manager` directory:

```
cd /axie/ronin-manager
```

3. Create a `docker-compose` file:

```
vim docker-compose.yml
```

4. Copy this code block to the file:

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
      - BOOTNODES=${BOOTNODES}
      - NETWORK_ID=${NETWORK_ID}
      - RONIN_PARAMS=${RONIN_PARAMS}
      - VERBOSITY=${VERBOSITY}
      - MINE=false
      - GASPRICE=${GASPRICE}
      - GENESIS_PATH=${GENESIS_PATH}
      - ETHSTATS_ENDPOINT=${INSTANCE_NAME}:${CHAIN_STATS_WS_SECRET}@${CHAIN_STATS_WS_SERVER}:443
```

5. Create an `.env` file. This file contains configuration parameters for your node.

```
vim .env
```

6. Copy this code block to the file, replacing the `insert-...` values with your information:

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
NODE_IMAGE=ghcr.io/axieinfinity/ronin:v2.5.2-9bf4895
VERBOSITY=3

CHAIN_STATS_WS_SECRET=xQj2MZPaN6
CHAIN_STATS_WS_SERVER=saigon-stats.roninchain.com
GENESIS_PATH=testnet.json

RONIN_PARAMS=--gcmode archive --http.api eth,net,web3 --txpool.pricelimit 20000000000 --txpool.nolocals
```

7. Start the node:

```
docker-compose up -d 
```

8. After a few minutes, go to the [stats page](https://saigon-stats.roninchain.com/) to check the status of your node. If it's green, the node is connected and up to date with the network.
