# Running Validating Node

* Download the latest version of Ronin manager and uncompress:

```
$ curl -O -L -k https://stats.roninchain.com/downloads/ronin-manager-linux-latest.tar.gz

$ tar xf ronin-manager-linux-latest.tar.gz
```

* Move to Ronin manager directory and init environment:

```
$ cd pkg-ronin-manager-0.8.x

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

# Old node image should be removed
NODE_IMAGE=axieinfinity/ronin-mainnet:v2.2.2-7bfba31d6
# New tag for node image
NODE_IMAGE=axieinfinity/ronin-mainnet:v2.3.0-f07cd8d1e
```

* Pull the latest image and run node:

```
$ ./ronin-manager install

$ ./ronin-manager pull

$ ./ronin-manager start
```

* After some minutes, verify your node is connecting and up to date with the network at [stats.roninchain.com](https://stats.roninchain.com)
