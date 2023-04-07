---
description: Install a testnet non-validator node using Docker.
slug: /node-operators/testnet/non-validator
---

# Run a non-validator node
This guide demonstrates how to run a non-validator node on the Saigon testnet using Docker.
This node is known as an RPC (remote procedure call) node,
because it's used for serving RPC requests.

## Prerequisites
### Docker
* [Docker Engine](https://docs.docker.com/engine/install/)
* [Docker Compose plugin](https://docs.docker.com/compose/install/)

### System requirements
Recommended system requirements for running a non-validator node on the Saigon testnet:
* 4 CPU cores
* 8 GB RAM
* 100 GB SSD
* x86-64 architecture

These hardware requirements are rough guidelines, and each node operator
should monitor their node to ensure good performance for the intended task.
The size of your node will also grow over time.

## Install the node
1. Set up directories:

  Create a node directory:

  ```
  mkdir ~/ronin
  ```

  Go to the newly created directory:

  ```
  cd ~/ronin
  ```

  Create a chain data directory:

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
        - ~/ronin/chaindata:/ronin
      environment:
        - SYNC_MODE=full
        - PASSWORD=${PASSWORD}
        - BOOTNODES=${BOOTNODES}
        - NETWORK_ID=${NETWORK_ID}
        - RONIN_PARAMS=${RONIN_PARAMS}
        - VERBOSITY=${VERBOSITY}
        - MINE=${MINE}
        - GASPRICE=${GASPRICE}
        - GENESIS_PATH=${GENESIS_PATH}
        - ETHSTATS_ENDPOINT=${INSTANCE_NAME}:${CHAIN_STATS_WS_SECRET}@${CHAIN_STATS_WS_SERVER}:443
  ```

  This compose file defines the `node` service, which pulls a Ronin node image from the GitHub Container Registry.

4. Create an `.env` file to store configuration parameters for the service:

  ```
  vim .env
  ```

5. Paste the following into `.env`: 

  ```
  INSTANCE_NAME=insert-instance-name
  NODE_IMAGE=insert-latest-node-image
  PASSWORD=insert-password

  MINE=false

  BOOTNODES=enode://77e9cfce2d4c01c61115591984ca4012923c29846a7b66c775fed0cc8fe5f41b304a71e3e9433e067ea7ef86701c13992fefacf9e223786c62c530a7110e8142@35.224.85.190:30303
  
  NETWORK_ID=40925
  GASPRICE=20000000000
  VERBOSITY=3

  CHAIN_STATS_WS_SECRET=xQj2MZPaN6
  CHAIN_STATS_WS_SERVER=saigon-stats.roninchain.com

  CONFIG_PATH=config.testnet.json
  GENESIS_PATH=testnet.json
  DEPLOYMENT=test
  
  RONIN_PARAMS=--http.api eth,net,web3 --txpool.pricelimit 20000000000 --txpool.nolocals
  ```

  Replace the following values in the `.env` file with your information:
  * `INSTANCE_NAME`: The name of your node that you want to be displayed on the [stats page](https://saigon-stats.roninchain.com/).
  * `NODE_IMAGE`: The version of your node's image, which can be found under [Ronin node](./../latest.md#ronin-node).
  * `PASSWORD`: The password to encrypt the node's keyfile.

6. (Optional) Download the snapshot:

  ```
  cd ~/.skymavis/chaindata/data/ronin/
  curl https://storage.googleapis.com/testnet-chaindata/chaindata-22-3-2023.tar -o chaindata.tar && tar -xvf chaindata.tar
  mv chaindata-22-3-2023 chaindata
  ```

7. Start the node:

  ```
  cd ~/ronin && docker-compose up -d
  ```

  This command pulls a Ronin node image and starts the service you defined.

8. Review the log:

  ```
  docker logs node -f --tail 100
  ```

9. After a few minutes, go to the [stats page](https://saigon-stats.roninchain.com/) to check the status of your node. If it's green, the node is connected and up to date with the network.
