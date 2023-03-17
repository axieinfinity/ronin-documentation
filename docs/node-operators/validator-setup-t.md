---
description: Set up and run a validator node
---
# Run a validator node (testnet)

This page describes how to set up a validator node and bridge operator node on the Ronin network.

## Latest release
### Validator
* [https://github.com/axieinfinity/ronin/releases/tag/v2.5.1](https://github.com/axieinfinity/ronin/releases/tag/v2.5.1)
* [ghcr.io/axieinfinity/ronin:v2.5.1-d1a6cc9](https://github.com/axieinfinity/ronin/pkgs/container/ronin/69326810?tag=v2.5.1-d1a6cc9)

Snapshot: `https://storage.googleapis.com/testnet-chaindata/chaindata-4-1-2023.tar`
Snapshot checksum using Md5sum: `f7b467cdc879e3ab2ade41a7d4a40653`.

### Bridge operator

* [https://github.com/axieinfinity/bridge-v2/releases/tag/0.2.1](https://github.com/axieinfinity/bridge-v2/releases/tag/0.2.1)
* [ghcr.io/axieinfinity/bridge:0.2.1-c15a725](https://github.com/axieinfinity/bridge-v2/pkgs/container/bridge/67046431?tag=0.2.1-c15a725)

## Prerequisites

* You must be a root user.
* Your machine must meet the minimum hardware requirements:
  * 2 CPU cores
  * 8 GB RAM
  * 100 GB SSD
* You need to have [docker-compose](https://docs.docker.com/compose/install/) installed.

## Steps

1. In your working directory, create subdirectories by running the following commands for storing our config, and chaindata.
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
      - SYNC_MODE=snap
      - PASSWORD=${PASSWORD}
      - PRIVATE_KEY=${VALIDATOR_PRIVATE_KEY}
      - BOOTNODES=${BOOTNODES}
      - NETWORK_ID=${NETWORK_ID}
      - RONIN_PARAMS=${RONIN_PARAMS}
      - VERBOSITY=${VERBOSITY}
      - MINE=${MINE}
      - GASPRICE=${GASPRICE}
      - GENESIS_PATH=${GENESIS_PATH}
      - ETHSTATS_ENDPOINT=${INSTANCE_NAME}:${CHAIN_STATS_WS_SECRET}@${CHAIN_STATS_WS_SERVER}:443
  db:
    image: postgres:14.3
    restart: always
    command: postgres -c 'max_connections=1000'
    hostname: db
    container_name: db
    ports:
      - 127.0.0.1:5432:5432
    environment:
      POSTGRES_PASSWORD: example
    volumes:
      - ~/bridgedata-v2:/var/lib/postgresql/data
  bridge:
    image: ${BRIDGE_IMAGE}
    restart: always
    container_name: bridge
    environment:
      - RONIN_RPC=http://node:8545
      - RONIN_BRIDGE_VOTER_KEY=${BRIDGE_VOTER_PRIVATE_KEY}
      - RONIN_BRIDGE_OPERATOR_KEY=${BRIDGE_OPERATOR_PRIVATE_KEY}
      - ETHEREUM_RPC=${ETHEREUM_ENDPOINT}
      - DB_HOST=db
      - DB_NAME=${DB_NAME}
      - DB_PORT=5432
      - DB_USERNAME=${DB_USERNAME}
      - DB_PASSWORD=${DB_PASSWORD}
      - VERBOSITY=${VERBOSITY}
      - CONFIG_PATH=${CONFIG_PATH}
      - RONIN_TASK_INTERVAL=${RONIN_TASK_INTERVAL}
      - RONIN_TRANSACTION_CHECK_PERIOD=${RONIN_TRANSACTION_CHECK_PERIOD}
      - RONIN_MAX_PROCESSING_TASKS=${RONIN_MAX_PROCESSING_TASKS}
      - ETHEREUM_GET_LOGS_BATCH_SIZE=${ETHEREUM_GET_LOGS_BATCH_SIZE}
    depends_on:
      - db
      - node
```

3. Create an `.env` file with the following contents, replacing the `insert-your-` placeholders with your credentials.

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

# User for postgres account.
DB_USERNAME=postgres
# Password for postgres account.
DB_PASSWORD=example
DB_NAME=bridge
# Database to store oracle.
POSTGRES_DB=bridge
# Password to protect your private key.
PASSWORD=123456

# Private key of validator address, without 0x. 
VALIDATOR_PRIVATE_KEY=insert-your-validator-private-key
ETHEREUM_ENDPOINT=https://eth-goerli.g.alchemy.com/v2/your-ethereum-endpoint
MINE=true

CONFIG_PATH=config.testnet.json
NODE_IMAGE=ghcr.io/axieinfinity/ronin:v2.5.1-d1a6cc9
BRIDGE_IMAGE=ghcr.io/axieinfinity/bridge:0.2.1-c15a725
VERBOSITY=3

RONIN_TASK_INTERVAL=3
RONIN_TRANSACTION_CHECK_PERIOD=50
RONIN_MAX_PROCESSING_TASKS=200
ETHEREUM_GET_LOGS_BATCH_SIZE=100
CHAIN_STATS_WS_SECRET=xQj2MZPaN6
CHAIN_STATS_WS_SERVER=saigon-stats.roninchain.com
GENESIS_PATH=testnet.json

RONIN_PARAMS=--http.api eth,net,web3,consortium --miner.gaslimit 100000000 --miner.gasreserve 2000000

# Private key of the bridge operator, used for acknowledging deposit and withdrawal events to facilitate asset transfers between Ronin and other EVM-based chains, without 0x.
BRIDGE_OPERATOR_PRIVATE_KEY=insert-your-operator-private-key

# Private key of the bridge voter (also known as "governor") without 0x. Only governor roles need to set this, otherwise you can leave it blank. 
BRIDGE_VOTER_PRIVATE_KEY=insert-your-voter-private-key
```

4. Download the snapshot.

```
cd ~/.skymavis/chaindata/data/ronin/
curl https://storage.googleapis.com/testnet-chaindata/chaindata-4-1-2023.tar -o chaindata.tar && tar -xvf chaindata.tar
mv chaindata-4-1-2023 chaindata
```

5. Start the node by running the following command:
```
cd  /axie/ronin-manager && docker-compose up -d 
```

After a few minutes, go to the [stats page](https://saigon-stats.roninchain.com/) to verify that your node is connected and up to date with the network.