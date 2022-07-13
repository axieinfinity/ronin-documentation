# CL2 - Bridge Upgrade 

**Date: 13rd July 2022**

## Change logs

**1. Ronin bridge 2.0.1-8e3d254:**
- Improve retry mechanism when sending validator transactions
- Prevent duplicates while processing tasks
- Handle graceful shutdown

**2. Update ronin block gas limit**
- The flag `--miner.gastarget` is deprecated
- Use the `--miner.gaslimit` flag instead

## Step by step

**1. Update the `.env` file**

Add the following envs

```bash
RONIN_TASK_INTERVAL=3
RONIN_TRANSACTION_CHECK_PERIOD=50
RONIN_MAX_PROCESSING_TASKS=200
ETHEREUM_GET_LOGS_BATCH_SIZE=100
```

Set miner.gaslimit into the RONIN_PARAMS env. E.g

```bash
RONIN_PARAMS=--miner.gaslimit 100000000
```

Replace the image:

```bash
BRIDGE_IMAGE=axieinfinity/bridge:v2.0.1-8e3d254
```

**2. Update the docker-compose.yaml**
    
  1. Increase the `max_connections` of db to 1000 (docker case)
  
  Add this line into
  
  ```bash
  bridge-db:
    image: postgres:14.3
    …
    command: postgres -c 'max_connections=1000'
    …
  ```
  
  2. Add those envs into the current bridge
  
  ```bash
  bridge:
    image: ${BRIDGE_IMAGE}
    …
    environment:
      …
      - RONIN_TASK_INTERVAL=${RONIN_TASK_INTERVAL}
      - RONIN_TRANSACTION_CHECK_PERIOD=${RONIN_TRANSACTION_CHECK_PERIOD}
      - RONIN_MAX_PROCESSING_TASKS=${RONIN_MAX_PROCESSING_TASKS}
      - ETHEREUM_GET_LOGS_BATCH_SIZE=${ETHEREUM_GET_LOGS_BATCH_SIZE}
      …
  ```
    
**3. Stop the current bridge**

```bash
$ docker stop bridge -t 300
```

**4. Stop the current node**

```bash
$ docker stop node -t 300
```

**5. Start the node, bridge and recreating the bridge db again**

```bash
$ ./ronin-manager pull
$ ./ronin-manager start
```

After some minutes, verify your node is connected and up to date with the network at [https://stats.roninchain.com](https://stats.roninchain.com/).