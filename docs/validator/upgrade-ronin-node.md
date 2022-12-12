# CL1 - Ronin Hardfork 

**Date: 28th June 2022**

# Upgrade the Ronin node

Update node image to the latest version.

1. Stop the current ronin-manager

```bash
# Change dir to your current ronin-manager version
$ cd pkg-ronin-manager-0.8.x
$ ./ronin-manager stop
```

2. Update NODE_IMAGE to latest

```bash
$ vi .env
```

```
NODE_IMAGE=axieinfinity/ronin-mainnet:v2.4.0-6034a62cf
```

3. Start the node again

```bash
$ ./ronin-manager start
```

4. Confirm your node is working

Call a `eth_getBlockByNumber` RPC request

```
$ curl 'localhost:8545' \
  -H 'accept: application/json' \
  -H 'accept-language: en-US,en;q=0.9,fr;q=0.8' \
  -H 'content-type: application/json' \
  --data-raw '{"id":1,"jsonrpc":"2.0","params":["latest",true],"method":"eth_getBlockByNumber"}' \
  --compressed
```
