---
description: Install a testnet bridge operator after setting up the validator node.
---

# Run a bridge operator
This guide demonstrates how to run a bridge operator node on the Saigon testnet using Docker.

## Prerequisites
### Install Docker
* [Docker Engine](https://docs.docker.com/engine/install/)
* [Docker Compose plugin](https://docs.docker.com/compose/install/)

### Prepare an Ethereum endpoint
You need an Ethereum RPC endpoint to listen for events from Ethereum chain and send events to Ethereum. This can be an [Alchemy](https://www.alchemy.com/overviews/private-rpc-endpoint), Infura or any other Ethereum RPC endpoint.

### Generate keys
Generate two private keys as described in [Generate keys](./../generate-keys.md):
* One key for the bridge voter 
* One key for the bridge operator

## Install the node
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

  Create a directory for chain data:
  ```
  mkdir -p chaindata/data/ronin
  ```

2. Create a file called `docker-compose.yml`:

  ```
  vim docker-compose.yml
  ```

3. Paste the following into `docker-compose.yml`:

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
        POSTGRES_PASSWORD: example
      volumes:
        - ~/bridgedata-v2:/var/lib/postgresql/data
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

  This compose file defines two services:
     * `bridge`, which pulls a bridge image from the GitHub Container Registry.
     * `db`, which builds a Postgres database for the bridge.

4. Create an `.env` file to store configuration parameters for the services:

  ```
  vim .env
  ```

5. Paste the following into `.env`:

  ```
  BRIDGE_IMAGE=insert-latest-bridge-image
  BRIDGE_OPERATOR_PRIVATE_KEY=insert-bridge-operator-private-key
  BRIDGE_VOTER_PRIVATE_KEY=insert-bridge-voter-private-key

  DB_USERNAME=postgres
  DB_NAME=bridge
  DB_PASSWORD=insert-db-password
  POSTGRES_DB=bridge

  RPC_ENDPOINT=http://node:8545
  ETHEREUM_ENDPOINT=insert-ethereum-endpoint
  CONFIG_PATH=config.testnet.json
  VERBOSITY=3

  RONIN_TASK_INTERVAL=3
  RONIN_TRANSACTION_CHECK_PERIOD=50
  RONIN_MAX_PROCESSING_TASKS=200
  ETHEREUM_GET_LOGS_BATCH_SIZE=100

  PASSWORD=insert-password
  ```

  Replace the following values in the `.env` file with your information:
    * `ETHEREUM_ENDPOINT`: Your Ethereum RPC endpoint.
    * `BRIDGE_IMAGE`: The latest version of the bridge's image, which can be found in [Bridge operator](./../latest.md#bridge-operator).
    * `BRIDGE_OPERATOR_PRIVATE_KEY`: Your bridge operator private key without the `0x` prefix.
    * `BRIDGE_VOTER_PRIVATE_KEY`: Your bridge voter private key without the `0x` prefix.
    * `DB_PASSWORD`: Your Postgres database password.
    * `PASSWORD`: The password to encrypt the node's keyfile.

7. Start your node:

  ```
  cd ~/ronin-bridge && docker-compose up -d
  ```

  This command pulls a bridge image, a Postgres database, and starts the services you defined.

8. After a few minutes, go to the [stats page](https://saigon-stats.roninchain.com/) to check the status of your node. If it's green, the node is connected and up to date with the network.
