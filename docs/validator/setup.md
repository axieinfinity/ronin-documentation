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

##### Checksum Snapshot Using Md5sum:  f7b467cdc879e3ab2ade41a7d4a40653

### Bridge Operator

```
https://github.com/axieinfinity/bridge-v2/releases/tag/0.2.0

axieinfinity/bridge:v0.2.0-1d64d68
```

# Steps ( Using root user default)
* Install docker-compose Dependencies
```
apt install -y docker-compose
```

* Make subdirs
```
mkdir -p  /axie/ronin-manager
mkdir -p  ~/bridgedata-v2
mkdir -p ~/.skymavis/chaindata/data/ronin/
```

* Create docker-compose configuration

```
cd /axie/ronin-manager  && vim docker-compose.yml
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
      - RONIN_BRIDGE_VOTER_KEY=${BRIDGE_VOTER_PRIVATE_KEY}
      - RONIN_VALIDATOR_KEY=${BRIDGE_OPERATOR_PRIVATE_KEY}
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
      - node
```

* Create .env (Replace xxx with your credentials )

```
vim .env
```

```
# BOOTNODES address of the bootnode to connect to the network, will be auto-filled
BOOTNODES=enode://77e9cfce2d4c01c61115591984ca4012923c29846a7b66c775fed0cc8fe5f41b304a71e3e9433e067ea7ef86701c13992fefacf9e223786c62c530a7110e8142@35.224.85.190:30303,enode://7b9d7d6d8193ac8ac888e9b373dc6cfcab826fd400d9cf92cc661ba4e00d9628b24bb44132bff536416b7ef1d0092d356f2843c8c88457ce528083f42cd2323b@34.170.224.188:30303
# NETWORK_ID network id
NETWORK_ID=40925
# Setting for oracle services, staging = rinkey + testnet, production = ethereum + mainnnet
DEPLOYMENT=test
# Setting nodekey
GASPRICE=20000000000

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

RONIN_PARAMS=--http.api eth,net,web3,consortium --miner.gaslimit 100000000

# Key for acknowledging deposit and withdrawal events to facilitate asset transfers between Ronin and other EVM-based chains
BRIDGE_OPERATOR_PRIVATE_KEY=xxx

# Only Trusted Org need to set it otherwise leave it empty
BRIDGE_VOTER_PRIVATE_KEY=
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
After a few minutes, you can verify your node is connecting and up to date with the network at https://saigon-stats.roninchain.com/
