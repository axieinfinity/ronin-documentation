# Release Information


### Validator

##### Release Doc:

```
https://github.com/axieinfinity/ronin/releases/tag/v2.5.0

axieinfinity/ronin-testnet:v2.5.0-4abacb213
```

##### Snapshot:

```
https://storage.googleapis.com/testnet-chaindata/chaindata-4-1-2023.tar
```

### Bridge Operator

```
https://github.com/axieinfinity/bridge-v2/releases/tag/0.2.0

axieinfinity/bridge:v0.2.0-1d64d68
```

# Steps ( Using root user default)

* Make path
```
mkdir -p  /axie/ronin-manager
mkdir -p  ~/bridgedata-v2
mkdir -p ~/.skymavis/chaindata/data/ronin/
```

* Create docker-compose

```
cd /axie/ronin-manager 
```

```
vim docker-compose.yml
```

```
version: "3"
services:
  node:
    image: ${NODE_IMAGE}
    stop_grace_period: 5m
    hostname: node
    container_name: node
    ports:
      - 127.0.0.1:8545:8545
      - 127.0.0.1:8546:8546
      - 30303:30303
      - 30303:30303/udp
      - 6060:6060
    volumes:
      - ~/.skymavis/chaindata:/ronin
    environment:
      - SYNC_MODE=snap
      - PASSWORD=${PASSWORD}
      - PRIVATE_KEY=${VALIDATOR_PRIVATE_KEY}
      - BOOTNODES=${BOOTNODES}
      - NETWORK_ID=${NETWORK_ID}
      - RONIN_PARAMS=${RONIN_PARAMS}
      - VERBOSITY=${VERBOSITY}
      - MINE=${MINE}
      - GASPRICE=${GASPRICE}
      - GENESIS_PATH=${GENESIS_PATH}
      - ETHSTATS_ENDPOINT=${INSTANCE_NAME}:${CHAIN_STATS_WS_SECRET}@${CHAIN_STATS_WS_SERVER}:443
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
      - RONIN_RPC=http://node:8545
      - RONIN_VALIDATOR_KEY=${BRIDGE_OPERATOR_PRIVATE_KEY}
      - RONIN_BRIDGE_VOTER_KEY=${BRIDGE_VOTER_PRIVATE_KEY}
      - RONIN_RELAYER_KEY=${VALIDATOR_PRIVATE_KEY}
      - ETHEREUM_RPC=${ETHEREUM_ENDPOINT}
      - ETHEREUM_VALIDATOR_KEY=${ETHEREUM_VALIDATOR_KEY}
      - ETHEREUM_RELAYER_KEY=${ETHEREUM_RELAYER_KEY}
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
      - node
```

* Create .env (Replacing credential env)

```
# INSTANCE_NAME the name of your instance that you want to display in stats website
INSTANCE_NAME=xxxx

# User for postgres account
DB_USERNAME=postgres
# Password for postgres account
DB_PASSWORD=example
DB_NAME=bridge
# Database to store oracle
POSTGRES_DB=bridge
# Password to protect your private key
PASSWORD=123456

# Private key of validator address, without 0x
VALIDATOR_PRIVATE_KEY=xxxx
ETHEREUM_ENDPOINT=https://eth-goerli.g.alchemy.com/v2/xxxxx
MINE=true

CONFIG_PATH=config.testnet.json
NODE_IMAGE=axieinfinity/ronin-testnet:v2.5.0-4abacb213
BRIDGE_IMAGE=axieinfinity/bridge:v0.2.0-1d64d68
VERBOSITY=3

RONIN_TASK_INTERVAL=3
RONIN_TRANSACTION_CHECK_PERIOD=50
RONIN_MAX_PROCESSING_TASKS=200
ETHEREUM_GET_LOGS_BATCH_SIZE=100
CHAIN_STATS_WS_SECRET=xQj2MZPaN6
CHAIN_STATS_WS_SERVER=saigon-stats.roninchain.com
GENESIS_PATH=testnet.json

BRIDGE_OPERATOR_PRIVATE_KEY=xxx
BRIDGE_VOTER_PRIVATE_KEY=xxx
RONIN_PARAMS=--http.api eth,net,web3,consortium --miner.gaslimit 100000000
```

* Restore snapshot (We can’t sync from the scratch) 

```
cd ~/.skymavis/chaindata/data/ronin/
curl https://storage.googleapis.com/testnet-chaindata/chaindata-4-1-2023.tar -o chaindata.tar && tar -xvf chaindata.tar
mv chaindata-4-1-2023 chaindata
```

* Start node
```
cd  /axie/ronin-manager && docker-compose up -d 
```
After some minutes, verify your node is connecting and up to date with the network at https://saigon-stats.roninchain.com/
