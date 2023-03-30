---
description: Run a non-validator node on the Ronin mainnet
---

# Run a non-validator (RPC) node
This guide demonstrates how to run a non-validator node on the Ronin mainnet. 

This node is also known as an RPC (remote procedure call) node, because it's used for serving RPC requests.

## Prerequisites
### Install Docker
* [Docker Engine](https://docs.docker.com/engine/install/)
* [Docker Compose plugin](https://docs.docker.com/compose/install/)

### Review system requirements
Recommended system requirements for running a Ronin mainnet node:
* 6-core CPU
* 25 GB RAM
* 700 GB high-speed SSD
* AMD64 architecture

These requirements, however, are not future-proof because Ronin data size grows over time.

## Install Ronin node 
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

2. Create docker-compose.yml
   
Create `docker-compose.yml` 

```
vim docker-compose.yml
```
copy this content to the file


3. Copy this code block to the file:
   
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
      - MINE=false
      - GASPRICE=${GASPRICE}
      - ETHSTATS_ENDPOINT=${INSTANCE_NAME}:${CHAIN_STATS_WS_SECRET}@${CHAIN_STATS_WS_SERVER}:443
```

4. Create an `.env` file
   
Create `.env`
```
vim .env
```

5. Copy this code block to the file:
   
```
INSTANCE_NAME=insert-your-instance-name
NODE_IMAGE=insert-your-node-image
PASSWORD=insert-your-password

# BOOTNODES address of the bootnode to connect to the network, will be auto-filled
BOOTNODES=enode://cfa5f00c55eba79f359c9d95f5c0b2bb8e173867ffbb6e212c6799a52918502519e56650970e34caf1cd17418d4da46c3243588578886c3b4f8c42d1934bf108@104.198.242.88:30303,enode://f500391c41906a1dae249df084a3d1659fe602db671730b2778316114a5f7df44a0c6864a8dfffdc380fc81c6965dd911338e0e2591eb78a506857015d166250@34.135.18.26:30303,enode://fc7b8ceafe16e6f79ab2da3e73d0a3163d0c28efe0778863102f8f27758986fe28c1540a9a0bbdff29ab93ad1c5803462efe6c98165bbb404d9d099a55f1d2c9@130.211.208.201:30303
# NETWORK_ID network id
NETWORK_ID=2020
# Setting for oracle services, where staging = rinkey + testnet, and production = ethereum + mainnet.
# Setting nodekey
GASPRICE=20000000000

VERBOSITY=3

# CHAIN_STATS_WS_SERVER the endpoint to connect to stats website server
CHAIN_STATS_WS_SERVER=stats.roninchain.com
# CHAIN_STATS_WS_SECRET the secret to connect to the above server
CHAIN_STATS_WS_SECRET=xQj2MZPaN6

RONIN_PARAMS=--http.api eth,net,web3 --txpool.pricelimit 20000000000 --txpool.nolocals
```

Replace the following keys in the `.env` file with your node's information:
* `INSTANCE_NAME`: Your node's name, which can be seen on the [stats page](https://stats.roninchain.com/).
* `NODE_IMAGE`: The version of your node's image, which can be found under [Latest image](/docs/node-operators/upgrade#latest-image).
* `PASSWORD`: Your strong password, this is used to encrypt your private key

6. (Optional) Download the snapshot to save the time:

```
cd ~/ronin/chaindata/data/ronin/
curl <chaindata latest check here https://github.com/axieinfinity/ronin-snapshot> -o chaindata.tar && tar -xvf chaindata.tar
mv <uncompressed data> chaindata
```

7. Start the node:
   
```
cd ~/ronin && docker-compose up -d
```

8. Review the log:

```
docker logs node -f --tail 100
```

9. Confirm your node is working on Ronin stats

After a few minutes, go to the [stats page](https://stats.roninchain.com/) to
check the status of your node. If it's green, the node is connected and up to
date with the network.