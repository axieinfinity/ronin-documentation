# Run a bridge operator node

This page describe how to run a bridge operator on mainnet

## Prerequisites

[Docker Engine](https://docs.docker.com/engine/install/)

[Docker Compose plugin](https://docs.docker.com/compose/install/)

Ethereum RPC endpoint: An Ethereum RPC endpoint, can be set up with
[Alchemy](https://www.alchemy.com/overviews/private-rpc-endpoint), Infura

Ronin RPC endpoint: A Ronin RPC endpoint

## Generating keys

Before installing bridge, you will need to generate 2 private keys. 

- Bridge voter 
- Bridge operator 

This private keys will be used in the later steps. Follow tutorial in [Generate key](/docs/node-operators/generate-key).

## Install bridge
1. Setup ronin-bridge directories
   
Create ronin-bridge directory
```
mkdir ~/ronin-bridge
```

Go to bridge folder
```
cd ~/ronin-bridge
```

Create bridge data directory
```
mkdir -p data
```

2. Create `docker-compose.yml` file
   
Create `docker-compose.yml`

```
vim docker-compose.yml
```

copy this content to the file
   
```
version: "3"
services:
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

3. Create an `.env` file

Create `.env`

```
vim .env
```

copy this content to the file

```
ETHEREUM_ENDPOINT=your-ethereum-endpoint
RPC_ENDPOINT=your-rpc-endpoint
BRIDGE_IMAGE=latest-bridge-image
BRIDGE_OPERATOR_PRIVATE_KEY=your-bridge-operator-private-key
BRIDGE_VOTER_PRIVATE_KEY=your-bridge-voter-private-key
DB_USERNAME=postgres
DB_PASSWORD=your-db-password

DB_NAME=bridge
POSTGRES_DB=bridge

CONFIG_PATH=config.mainnet.json
VERBOSITY=3

RONIN_TASK_INTERVAL=3
RONIN_TRANSACTION_CHECK_PERIOD=50
RONIN_MAX_PROCESSING_TASKS=200
ETHEREUM_GET_LOGS_BATCH_SIZE=100
```

Replace those keys in your `.env` with your information:

- `ETHEREUM_ENDPOINT`: Your Ethereum RPC endpoint, can be Alchemy or Infura

- `RPC_ENDPOINT`: Your Ronin RPC endpoint.
If you set up your validator node on the same machine, the value should be `${HOST_IP}:8545`. 

- `BRIDGE_IMAGE`: Your node image version, find it under [latest image](/docs/node-operators/mainnet/latest-release#latest-image).

- `BRIDGE_OPERATOR_PRIVATE_KEY`: Your bridge operator private key without the 0x prefix

- `BRIDGE_VOTER_PRIVATE_KEY`: Your bridge voter private key without the 0x prefix

- `DB_PASSWORD`: Your postgres database password

4. Start the node:

```
docker-compose up -d
```

5. Review the log 

```
docker logs bridge -f --tail 100
```
