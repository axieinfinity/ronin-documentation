# Running Non-validating Node

* Download the latest version of Ronin manager and uncompress:

```
$ curl -O -L -k https://stats.roninchain.com/downloads/ronin-manager-linux-latest.tar.gz

$ tar xf ronin-manager-linux-latest.tar.gz
```

* Initialize the environment by filling your params and instance name (you can check it on stats.roninchain.com later) and replacing the node image with the current version in the `.env` file:

```
$ cd pkg-ronin-manager-0.8.x

$ cp config/main.env .env

$ vi .env


# INSTANCE_NAME the name of your instance that you want to display on the website
INSTANCE_NAME=

# Additional Params
RONIN_PARAMS=--http.api eth,web3,personal

# Old node image should be removed
NODE_IMAGE=axieinfinity/ronin-mainnet:v2.2.2-7bfba31d6
# New tag for node image
NODE_IMAGE=axieinfinity/ronin-mainnet:v2.3.0-f07cd8d1e
```

* Remove the `docker-compose.yml` file and create a new one. The default configuration is for Ronin validators, running non-validating should use the new one:

```
$ rm -rf docker-compose.yml

$ vi docker-compose.yml
```

Your new docker-compose file should be like this:

```
version: "3"
services:
  node:
    image: ${NODE_IMAGE}
    stop_grace_period: 5m
    restart: always
    hostname: node
    container_name: node
    ports:
      - 127.0.0.1:8545:8545
      - 127.0.0.1:8546:8546
      - 30303:30303
      - 30303:30303/udp
      - 6060:6060
    volumes:
      - $HOME/chaindata:/ronin
    environment:
      - SYNC_MODE=snap
      - PASSWORD=${PASSWORD}
      - PRIVATE_KEY=${VALIDATOR_PRIVATE_KEY}
      - BOOTNODES=${BOOTNODES}
      - NETWORK_ID=${NETWORK_ID}
      - ETHSTATS_ENDPOINT=${INSTANCE_NAME}:${CHAIN_STATS_WS_SECRET}@${CHAIN_STATS_WS_SERVER}:443
      - RONIN_PARAMS=${RONIN_PARAMS}

```

* Pull the latest image and run node:

```
$ ./ronin-manager install

$ ./ronin-manager pull

$ ./ronin-manager start
```

* After some minutes, verify your node is connecting and up to date with the network at [stats.roninchain.com](https://stats.roninchain.com)

## Start node from a snapshot

A snapshot is a complete view of the Ronin Network state at a given block. 
You can use a snapshot to setup your Ronin node and get it up-to-dated faster. 

1. Stop your node

```
$ ./ronin-manager stop
```

2. Download chaindata and checksum

```
$ curl -O -L -k https://storage.googleapis.com/chaindata/chaindata-0xe14eea.tar
$ curl -O -L -k https://storage.googleapis.com/chaindata/checksum-0xe14eea.md5
$ md5sum -c checksum-0xe14eea.md5
```

3. Uncompress downloaded files

```
$ tar -xvf chaindata-0xe14eea.tar
```

4. Remove the current chaindata folder

Consider backing up this folder before removing

```
$ rm -rf $HOME/chaindata/data/ronin/chaindata
```

5. Move snapshot data to your chaindata folder

```
$ mv chaindata $HOME/chaindata/data/ronin/
```

6. Start your Ronin node
```
$ ./ronin-manager start
```
