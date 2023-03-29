# Run a bridge operator node

This page describe how to run a bridge operator on mainnet

## Prerequisites

[Docker Engine](https://docs.docker.com/engine/install/)

[Docker Compose plugin](https://docs.docker.com/compose/install/)

* Ethereum RPC URL:
[Alchemy](https://www.alchemy.com/overviews/private-rpc-endpoint), Infura or any Ethereum RPC endpoint, this is used to to listen for
events from Ethereum chain and send events to Ethereum.

* Ronin RPC, see [validator](/docs/node-operators/mainnet/validator)

## Set up and run
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

3. Create a `docker-compose` file:
   
```
vim docker-compose.yml
```

4. Paste the following contents into the file:
   
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

5. Create an `.env` file

`.env` file is configuration that you can set to your bridge.
Create a `.env` file with this content 

```
ETHEREUM_ENDPOINT=your-ethereum-endpoint
RPC_ENDPOINT=your-rpc-endpoint
BRIDGE_IMAGE=late-bridge-image
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

- `RPC_ENDPOINT`: Your secured Ronin RPC endpoint, for eg: `http://localhost:8545`

- `BRIDGE_IMAGE`: Your node image version, find it under [latest image](/docs/node-operators/mainnet/latest-release#latest-image).

- `BRIDGE_OPERATOR_PRIVATE_KEY`: Your bridge operator private key without the 0x prefix

- `BRIDGE_VOTER_PRIVATE_KEY`: Your bridge voter private key without the 0x prefix

- `DB_PASSWORD`: Your postgre database password


8. Review the log 

```
docker logs bridge -f --tail 100
```
