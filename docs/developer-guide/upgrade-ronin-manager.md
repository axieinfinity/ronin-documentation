# Upgrade Ronin Manager


## Change log v0.9.0

Ronin hard fork to facilitate the reopening of Ronin Bridge.

## Upgrade ronin-manager to v0.9.0

1. Download new ronin-manager version

```bash
$ curl -O -L -k https://stats.roninchain.com/downloads/ronin-manager-linux-latest.tar.gz
$ tar xf ronin-manager-linux-latest.tar.gz
```

1. Stop the current ronin-manager, copy .env file over:

```bash
# Change dir to your current ronin-manager version
$ cd pkg-ronin-manager-0.8.0
$ ./ronin-manager stop
$ cp .env ../pkg-ronin-manager-0.9.0
```

3. Move to the new ronin-manager version and update the environment file:

```bash
$ cd pkg-ronin-manager–0.9.0
$ vi .env
```

Replace node and bridge images to the below value

```bash
NODE_IMAGE=axieinfinity/ronin-mainnet:v2.4.0-6034a62cf
BRIDGE_IMAGE=axieinfinity/bridge:v2.0.1-4d803fc
```

Make sure the below environment keys exist in your `.env` file

```bash
VALIDATOR_PRIVATE_KEY
ETHEREUM_ENDPOINT
POSTGRES_DB
POSTGRES_USER
POSTGRES_PASSWORD
```

4. Pull the latest images and start ronin-manager

```bash
$ ./ronin-manager pull
$ ./ronin-manager start
```

5. After some minutes, verify your node is connected and up to date with the network at https://stats.roninchain.com.

6. Optionally remove old pkg-ronin-manager-0.8.x
