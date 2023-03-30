# Run a bridge operator node
This guide demonstrates how to run a bridge operator on the Ronin mainnet.

## Prerequisites
### Install Docker
* [Docker Engine](https://docs.docker.com/engine/install/)
* [Docker Compose plugin](https://docs.docker.com/compose/install/)

### Prepare endpoints
* Ronin RPC endpoint. If you set up your validator node on the same machine, the value is `${HOST_IP}:8545`. The `HOST_IP` needs to be exported in [Install Ronin](/docs/node-operators/mainnet/validator#install-ronin).
* Ethereum RPC endpoint. This is an [Alchemy](https://www.alchemy.com/overviews/private-rpc-endpoint), Infura or any other Ethereum RPC endpoint, used to listen for events from Ethereum chain and send events to Ethereum.

### Generate keys
Generate two private keys by following the steps in [Generate keys](/docs/node-operators/generate-key):
* One key for bridge voter 
* One key for bridge operator

You will need these keys later in the process.

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

2. Create a `docker-compose.yml` file:

```
vim docker-compose.yml
```

3. Copy this code block to the file:

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

4. Create an `.env` file. This file contains configuration parameters for your node.

```
vim .env
```

5. Copy this code block to the file:

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

Replace the following keys in the `.env` file with your node's information:
* `ETHEREUM_ENDPOINT`: Your Ethereum RPC endpoint—Alchemy or Infura.
* `RPC_ENDPOINT`: Your secured Ronin RPC endpoint. If you set up your validator node on the same machine, the value is in `${HOST_IP}:8545`. You need to export `HOST_IP` in [Install Ronin](/docs/node-operators/mainnet/validator#install-ronin).
* `BRIDGE_IMAGE`: The version of your node's image, which can be found under [Latest image](/docs/node-operators/latest-release#latest-image-1).
* `BRIDGE_OPERATOR_PRIVATE_KEY`: Your bridge operator private key without the `0x` prefix.
* `BRIDGE_VOTER_PRIVATE_KEY`: Your bridge voter private key without the `0x` prefix.
* `DB_PASSWORD`: Your Postgres database password.


6. Review the log:

```
docker logs bridge -f --tail 100
```
