---
description: (POA MAINNET) Run a validator node
---
# Run a validator node (mainnet)

* Download the latest version of Ronin manager and uncompress:

```
$ curl -O -L -k https://stats.roninchain.com/downloads/ronin-manager-linux-latest.tar.gz

$ tar xf ronin-manager-linux-latest.tar.gz
```

* Move to Ronin manager directory and initialize the environment:

```
$ cd pkg-ronin-manager-0.9.x

$ cp config/main.env .env

$ vi .env
```

* Initialize the environment by filling in your instance name, the private key, the Ethereum endpoint, and by replacing the node image with the current version in the .env file.

```
# INSTANCE_NAME the name of your instance that you want to display on the stats website
INSTANCE_NAME=
# Private key of validator address, without 0x
VALIDATOR_PRIVATE_KEY=
# Http(s) endpoint to connect to Ethereum Ropsten mainnet, e.g Infura or Alchemy key
ETHEREUM_ENDPOINT=

# Replace node and bridge image env keys with
NODE_IMAGE=axieinfinity/ronin-mainnet:v2.4.0-6034a62cf
BRIDGE_IMAGE=axieinfinity/bridge:v2.0.1-8e3d254
```

* Pull the latest image and run node:

```
$ ./ronin-manager install

$ ./ronin-manager pull

$ ./ronin-manager start
```

* After some minutes, verify your node is connecting and up to date with the network at [stats.roninchain.com](https://stats.roninchain.com)

Optionally you can [start node from a snapshot](./run-non-validator-node.md#start-node-from-a-snapshot).
