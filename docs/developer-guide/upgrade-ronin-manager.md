# Upgrade to Ronin Manager v1.0.0

The following tutorial walks you through updating ronin-manager from v0.8.0 to v1.0.0

1. Download new version 

```
$ curl -O -L -k https://stats.roninchain.com/downloads/ronin-manager-linux-latest.tar.gz

$ tar xf ronin-manager-linux-latest.tar.gz
```

2. Stop the current services, copy .env file over:

```
# Change dir to your current ronin-manager version
$ cd pkg-ronin-manager-0.8.0

$ ./ronin-manager stop

$ cp .env ../pkg-ronin-manager-1.0.0
```

3. Move to the new ronin-manager version and update the environment file:

```
$ cd pkg-ronin-manager-1.0.0
$ vi .env 
```

Add those envs 

```
RONIN_VALIDATOR_KEY=Ronin__<PRIVATE_KEY>

ETHEREUM_RPC=<Replace with your ETHERUM RPC URL>
Example: Ethereum__https://eth.alchemyapi.io/v2/<your_api_key>

# Tunning Performances
DB_MAX_OPEN_CONNS=500
```

Replace/Add 2 lines to your env file 

```
NODE_IMAGE=axieinfinity/ronin-mainnet:<tag> # Update latter
BRIDGE_IMAGE=axieinfinity/bridge:v2.0.0-147d873
```

4. Pull the latest images and start service: 

```
./ronin-manager pull
./ronin-manager start
```

5. After some minutes, verify your node is connected and up to date with the network at stats.roninchain.com. 

6. Optionally remove old pkg-ronin-manager-0.8.x
