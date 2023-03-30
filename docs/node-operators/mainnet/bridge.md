---
description: Run a bridge operator on the Ronin mainnet.
---

# Run a bridge operator node
This guide demonstrates how to run a Ronin bridge operator node from a Docker image.

## Prerequisites
### Install Docker
* [Docker Engine](https://docs.docker.com/engine/install/)
* [Docker Compose plugin](https://docs.docker.com/compose/install/)

## Prepare endpoints
* Ethereum RPC endpoint. This is an [Alchemy](https://www.alchemy.com/overviews/private-rpc-endpoint), Infura or any other Ethereum RPC endpoint, used to listen for events from Ethereum chain and send events to Ethereum.

### Generate keys
Generate two private keys by following the steps in [Generate keys](/docs/node-operators/generate-keys):
* One key for bridge voter 
* One key for bridge operator

You will need these keys later in the process.

### Review system requirements

Below are the suggested system requirement to run a Ronin mainnet fullnode. However,
it's not future proof as the data size of Ronin grow larger overtime:

* 8-core CPU
* 32 GB RAM
* 700 GB high-speed SSD
* AMD64 architecture


## Install the bridge
1. Set up directories:

Create a bridge directory:
```
mkdir ~/ronin-bridge
```

Go to the newly created directory:
```
cd ~/ronin-bridge
```

Create a directory for bridge data:
```
mkdir -p data
```

Create chaindata directory
```
mkdir -p chaindata/data/ronin
```

2. Create `docker-compose.yml` file
   
Create `docker-compose.yml`

```
vim docker-compose.yml
```

3. Copy this code block to the `docker-compose.yml`:

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
      - ~/ronin-bridge/chaindata:/ronin
    environment:
      - SYNC_MODE=snap
      - PASSWORD=${PASSWORD}
      - BOOTNODES=${BOOTNODES}
      - NETWORK_ID=${NETWORK_ID}
      - RONIN_PARAMS=${RONIN_PARAMS}
      - VERBOSITY=${VERBOSITY}
      - MINE=false
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
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - ~/ronin-bridge/data:/var/lib/postgresql/data
  bridge:
    image: ${BRIDGE_IMAGE}
    restart: always
    container_name: bridge
    environment:
      - RONIN_RPC=${RPC_ENDPOINT}
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
```

4. Create an `.env` file. This file contains configuration parameters for your node.

```
vim .env
```

5. Copy this code block to the `.env`:

```
ETHEREUM_ENDPOINT=insert-your-ethereum-endpoint
BRIDGE_IMAGE=insert-latest-bridge-image
BRIDGE_OPERATOR_PRIVATE_KEY=insert-your-bridge-operator-private-key
BRIDGE_VOTER_PRIVATE_KEY=insert-your-bridge-voter-private-key
DB_PASSWORD=insert-your-db-password
NODE_IMAGE=insert-your-latest-node-image
INSTANCE_NAME=insert-your-instance-name

DB_USERNAME=postgres
DB_NAME=bridge
POSTGRES_DB=bridge

CONFIG_PATH=config.mainnet.json
VERBOSITY=3

RPC_ENDPOINT=http://node:8545

RONIN_TASK_INTERVAL=3
RONIN_TRANSACTION_CHECK_PERIOD=50
RONIN_MAX_PROCESSING_TASKS=200
ETHEREUM_GET_LOGS_BATCH_SIZE=100

# Node config

# BOOTNODES address of the bootnode to connect to the network, will be auto-filled
BOOTNODES=enode://cfa5f00c55eba79f359c9d95f5c0b2bb8e173867ffbb6e212c6799a52918502519e56650970e34caf1cd17418d4da46c3243588578886c3b4f8c42d1934bf108@104.198.242.88:30303,enode://f500391c41906a1dae249df084a3d1659fe602db671730b2778316114a5f7df44a0c6864a8dfffdc380fc81c6965dd911338e0e2591eb78a506857015d166250@34.135.18.26:30303,enode://fc7b8ceafe16e6f79ab2da3e73d0a3163d0c28efe0778863102f8f27758986fe28c1540a9a0bbdff29ab93ad1c5803462efe6c98165bbb404d9d099a55f1d2c9@130.211.208.201:30303
# NETWORK_ID network id
NETWORK_ID=2020
# Setting for oracle services, where staging = rinkey + testnet, and production = ethereum + mainnet.
# Setting nodekey
GASPRICE=20000000000

# Password to protect your private key.
PASSWORD=123456

VERBOSITY=3

CHAIN_STATS_WS_SERVER=stats.roninchain.com
CHAIN_STATS_WS_SECRET=xQj2MZPaN6

RONIN_PARAMS=--http.api eth,net,web3,consortium --txpool.pricelimit 20000000000 --txpool.nolocals

```

Replace those keys in your `.env` with your information:

- `ETHEREUM_ENDPOINT`: Your Ethereum RPC endpoint, can be Alchemy or Infura

- `BRIDGE_IMAGE`: Your node image version, find it under [latest image](/docs/node-operators/upgrade#latest-image-1).

- `BRIDGE_OPERATOR_PRIVATE_KEY`: Your bridge operator private key without the 0x prefix

- `BRIDGE_VOTER_PRIVATE_KEY`: Your bridge voter private key without the 0x prefix

- `DB_PASSWORD`: Your postgres database password

- `NODE_IMAGE`:  Your node image version, find it under [latest image](/docs/node-operators/mainnet/upgrade#latest-image).

- `INSTANCE_NAME`: The name of your instance that you want to display on the stats page.

6. (Optional) Download the snapshot to save the time:

```
cd ~/ronin-bridge/chaindata/data/ronin/
curl <chaindata latest check here https://github.com/axieinfinity/ronin-snapshot> -o chaindata.tar && tar -xvf chaindata.tar
mv <uncompressed data> chaindata
```
7. Start the node:

```
cd ~/ronin-bridge && docker-compose up -d
```

8. After a few minutes, go to the [stats page](https://stats.roninchain.com/) to check the status of your node. If it's green, the node is connected and up to date with the network.

9. Review the log for bridge and node  ( the node should sync to latest block for making bridge work )

```
docker logs node -f --tail 100
docker logs bridge -f --tail 100
```

