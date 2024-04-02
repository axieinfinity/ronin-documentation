---
description: Install the Ronin CLI and compile a node binary from source.
title: Build your node using Ronin CLI
tags:
  - cli
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

This guide demonstrates how to compile a Ronin node binary on your own using the Ronin CLI, instead of running a packed binary from Docker. With the CLI, you configure and run a full (non-validator) node, validator node, or archive node.

## Prerequisites

* Golang 1.20 or later (follow the instructions at [https://go.dev/doc/install](https://go.dev/doc/install))
* C compiler

## Step 1. Build locally

1. Build the binary from the source code:
  
    ```bash
    git clone git@github.com:axieinfinity/ronin.git
    cd ronin
    make ronin
    ```

    The last command creates a `ronin` binary inside the `.build/bin` directory.

1. To run the binary without specifying the binary location in each command, make sure to add the Ronin binary path in the `$PATH` environment variable.

    ```bash
    export PATH=$PATH:/path/to/ronin
    ```

    If run from the `ronin` directory, then the command is as follows:

    ```bash
    export PATH=$PATH:./build/bin/ronin
    ```

## Step 2. Initialize the genesis block

Initialize the genesis block to set up the origin state of the chain. The genesis files are located in the repository's `genesis` directory, and include the path where you store the node's data—for example, `/ronin/data`.

```bash
ronin init genesis/mainnet.json --datadir /ronin/data
```

:::caution
Whenever you build or upgrade a node that includes a new hardfork, you must initialize the genesis block by running this command.
:::

## Step 3. Start the node

To start a full (non-validator) Ronin node, run the following command:

<Tabs groupId="networks">
  <TabItem value="mainnet" label="Mainnet" default>

  ```bash
  ronin --http.api eth,net,web3,consortium --networkid 2020 --discovery.dns enrtree://AIGOFYDZH6BGVVALVJLRPHSOYJ434MPFVVQFXJDXHW5ZYORPTGKUI@nodes.roninchain.com --datadir /ronin/data --port 30303 --http --http.corsdomain '*' --http.addr 0.0.0.0 --http.port 8545 --http.vhosts '*' --ws --ws.addr 0.0.0.0 --ws.port 8546 --ws.origins '*' 
  ```

  </TabItem>
  <TabItem value="testnet" label="Testnet" default>

  ```bash
  ronin --http.api eth,net,web3,consortium --networkid 2021 --discovery.dns enrtree://AJCNIAXQIPO55NW3QE2NUBBDMPYZDOQUCAEUS65NHQFMUUFES5KOW@saigon.nodes.roninchain.com --datadir /ronin/data --port 30303 --http --http.corsdomain '*' --http.addr 0.0.0.0 --http.port 8545 --http.vhosts '*' --ws --ws.addr 0.0.0.0 --ws.port 8546 --ws.origins '*' 
  ```

  </TabItem>
</Tabs>

This command starts `ronin` in full sync mode, causing it to download more data in exchange for avoiding processing the entire history of the Ronin network.

### Configuration

Instead of passing numerous flags to the `ronin` binary, you can pass a configuration file as follows:

```bash
ronin --config /path/to/your_config.toml
```

To get an idea of how the file should look like, use the `dumpconfig` subcommand to export your existing configuration:

```bash
ronin --your-favourite-flags dumpconfig
```

## Command reference

### Synopsis

```bash
ronin [options] [command] [command options] [arguments...]
```

Use `ronin [command] help` for information on a specific command.

### Available commands

```plaintext
account                            Manage accounts
attach                             Start an interactive JavaScript environment (connect to node)
console                            Start an interactive JavaScript environment
db                                 Low level database operations
dump                               Dump a specific block from storage
dumpconfig                         Show configuration values
dumpgenesis                        Dumps genesis block JSON configuration to stdout
export                             Export blockchain into file
export-preimages                   Export the preimage database into an RLP stream
import                             Import a blockchain file
import-preimages                   Import the preimage database from an RLP stream
init                               Bootstrap and initialize a new genesis block
js                                 Execute the specified JavaScript files
license                            Display license information
makecache                          Generate ethash verification cache (for testing)
makedag                            Generate ethash mining DAG (for testing)
removedb                           Remove blockchain and state databases
show-deprecated-flags              Show flags that have been deprecated
snapshot                           A set of commands based on the snapshot
version                            Print version numbers
version-check                      Checks (online) whether the current version suffers from any known security vulnerabilities
wallet                             Manage Ethereum presale wallets
help, h                            Shows a list of commands or help for one command
```

### Ethereum options

```plaintext
--config value                      TOML configuration file
--datadir value                     Data directory for the databases and store (default: "~/Library/Ethereum")
--datadir.ancient value             Data directory for ancient chain segments (default = inside chaindata)
--datadir.minfreedisk value         Minimum free disk space in MB, once reached triggers auto shut down (default = --cache.gc converted to MB, 0 = disabled)
--keystore value                    Directory for the keystore (default = inside the datadir)
--usb                               Enable monitoring and management of USB hardware wallets
--pcscdpath value                   Path to the smartcard daemon (pcscd) socket file
--networkid value                   Explicitly set network id (integer)(For testnets: use --ropsten, --rinkeby, --goerli instead) (default: 1)
--mainnet                           Ethereum mainnet
--goerli                            Görli network: pre-configured proof-of-authority test network
--rinkeby                           Rinkeby network: pre-configured proof-of-authority test network
--ropsten                           Ropsten network: pre-configured proof-of-work test network
--sepolia                           Sepolia network: pre-configured proof-of-work test network
--exitwhensynced                    Exits after block synchronisation completes
--gcmode value                      Blockchain garbage collection mode ("full", "archive") (default: "full")
--txlookuplimit value               Number of recent blocks to maintain transactions index for (default = about one year, 0 = entire chain) (default: 2350000)
--ethstats value                    Reporting URL of a ethstats service (nodename:secret@host:port)
--identity value                    Custom node name
--lightkdf                          Reduce -derivation RAM & CPU usage at some expense of KDF strength
--whitelist value                   Comma-separated block number-to-hash mappings to enforce (<number>=<hash>)
--overrideChainConfig               force override chainconfig
--monitor.doublesign                Enable double sign monitoring
--internaltxs                       Enable storing internal transactions to db
--ronin.disable                     Disable ronin p2p protocol
```
  
### Light client options

```plaintext
--light.serve value                 Maximum percentage of time allowed for serving LES requests (multi-threaded processing allows values over 100) (default: 0)
--light.ingress value               Incoming bandwidth limit for serving light clients (kilobytes/sec, 0 = unlimited) (default: 0)
--light.egress value                Outgoing bandwidth limit for serving light clients (kilobytes/sec, 0 = unlimited) (default: 0)
--light.maxpeers value              Maximum number of light clients to serve, or light servers to attach to (default: 100)
--ulc.servers value                 List of trusted ultra-light servers
--ulc.fraction value                Minimum % of trusted ultra-light servers required to announce a new head (default: 75)
--ulc.onlyannounce                  Ultra light server sends announcements only
--light.nopruning                   Disable ancient light chain data pruning
--light.nosyncserve                 Enables serving light clients before syncing
```

### Developer chain options

```plaintext
--dev                               Ephemeral proof-of-authority network with a pre-funded developer account, mining enabled
--dev.period value                  Block period to use in developer mode (0 = mine only if transaction pending) (default: 0)
--dev.gaslimit value                Initial block gas limit (default: 11500000)
```

### Ethash options

```plaintext
--ethash.cachedir value             Directory to store the ethash verification caches (default = inside the datadir)
--ethash.cachesinmem value          Number of recent ethash caches to keep in memory (16MB each) (default: 2)
--ethash.cachesondisk value         Number of recent ethash caches to keep on disk (16MB each) (default: 3)
--ethash.cacheslockmmap             Lock memory maps of recent ethash caches
--ethash.dagdir value               Directory to store the ethash mining DAGs (default: "/Users/mac/Library/Ethash")
--ethash.dagsinmem value            Number of recent ethash mining DAGs to keep in memory (1+GB each) (default: 1)
--ethash.dagsondisk value           Number of recent ethash mining DAGs to keep on disk (1+GB each) (default: 2)
--ethash.dagslockmmap               Lock memory maps for recent ethash mining DAGs
```

### Transaction pool options

```plaintext
--txpool.locals value               Comma-separated accounts to treat as locals (no flush, priority inclusion)
--txpool.nolocals                   Disables price exemptions for locally submitted transactions
--txpool.journal value              Disk journal for local transaction to survive node restarts (default: "transactions.rlp")
--txpool.rejournal value            Time interval to regenerate the local transaction journal (default: 1h0m0s)
--txpool.pricelimit value           Minimum gas price limit to enforce for acceptance into the pool (default: 1)
--txpool.pricebump value            Price bump percentage to replace an already existing transaction (default: 10)
--txpool.accountslots value         Minimum number of executable transaction slots guaranteed per account (default: 16)
--txpool.globalslots value          Maximum number of executable transaction slots for all accounts (default: 5120)
--txpool.accountqueue value         Maximum number of non-executable transaction slots permitted per account (default: 64)
--txpool.globalqueue value          Maximum number of non-executable transaction slots for all accounts (default: 1024)
--txpool.lifetime value             Maximum amount of time non-executable transaction are queued (default: 3h0m0s)
```

### Performance tuning options

```plaintext
--cache value                       Megabytes of memory allocated to internal caching (default = 4096 mainnet full node, 128 light mode) (default: 1024)
--cache.database value              Percentage of cache memory allowance to use for database io (default: 50)
--cache.trie value                  Percentage of cache memory allowance to use for trie caching (default = 15% full mode, 30% archive mode) (default: 15)
--cache.trie.journal value          Disk journal directory for trie cache to survive node restarts (default: "triecache")
--cache.trie.rejournal value        Time interval to regenerate the trie cache journal (default: 1h0m0s)
--cache.gc value                    Percentage of cache memory allowance to use for trie pruning (default = 25% full mode, 0% archive mode) (default: 25)
--cache.snapshot value              Percentage of cache memory allowance to use for snapshot caching (default = 10% full mode, 20% archive mode) (default: 10)
--cache.noprefetch                  Disable heuristic state prefetch during block import (less CPU and disk IO, more time waiting for data)
--cache.preimages                   Enable recording the SHA3/keccak preimages of trie s
```
  
### Account options

```plaintext
--unlock value                      Comma-separated list of accounts to unlock
--password value                    Password file to use for non-interactive password input
--signer value                      External signer (url or path to ipc file)
--allow-insecure-unlock             Allow insecure account unlocking when account-related RPCs are exposed by http
--enable-signing-methods            Enable RPC signing methods
```

### API and console options

```plaintext
--ipcdisable                        Disable the IPC-RPC server
--ipcpath value                     Filename for IPC socket/pipe within the datadir (explicit paths escape it)
--http                              Enable the HTTP-RPC server
--http.addr value                   HTTP-RPC server listening interface (default: "localhost")
--http.port value                   HTTP-RPC server listening port (default: 8545)
--http.api value                    API's offered over the HTTP-RPC interface
--http.rpcprefix value              HTTP path path prefix on which JSON-RPC is served. Use '/' to serve on all paths.
--http.corsdomain value             Comma separated list of domains from which to accept cross origin requests (browser enforced)
--http.vhosts value                 Comma separated list of virtual hostnames from which to accept requests (server enforced). Accepts '*' wildcard. (default: "localhost")
--ws                                Enable the WS-RPC server
--ws.addr value                     WS-RPC server listening interface (default: "localhost")
--ws.port value                     WS-RPC server listening port (default: 8546)
--ws.api value                      API's offered over the WS-RPC interface
--ws.rpcprefix value                HTTP path prefix on which JSON-RPC is served. Use '/' to serve on all paths.
--ws.origins value                  Origins from which to accept websockets requests
--ws.readbuffer value               ReadBuffer for Websocket Server default 1024 bytes (default: 1024)
--ws.writebuffer value              WriteBuffer for Websocket Server default 1024 bytes (default: 1024)
--graphql                           Enable GraphQL on the HTTP-RPC server. Note that GraphQL can only be started if an HTTP server is started as well.
--graphql.corsdomain value          Comma separated list of domains from which to accept cross origin requests (browser enforced)
--graphql.vhosts value              Comma separated list of virtual hostnames from which to accept requests (server enforced). Accepts '*' wildcard. (default: "localhost")
--rpc.gascap value                  Sets a cap on gas that can be used in eth_call/estimateGas (0=infinite) (default: 50000000)
--rpc.evmtimeout value              Sets a timeout used for eth_call (0=infinite) (default: 5s)
--rpc.txfeecap value                Sets a cap on transaction fee (in ether) that can be sent via the RPC APIs (0 = no cap) (default: 1)
--rpc.allow-unprotected-txs         Allow for unprotected (non EIP155 signed) transactions to be submitted via RPC
--jspath loadScript                 JavaScript root path for loadScript (default: ".")
--exec value                        Execute JavaScript statement
--preload value                     Comma separated list of JavaScript files to preload into the console
```

### Networking options

```plaintext
--bootnodes value                   Comma-separated enode URLs for P2P discovery bootstrap
--discovery.dns value               Sets DNS discovery entry points (use "" to disable DNS)
--port value                        Network listening port (default: 30303)
--maxpeers value                    Maximum number of network peers (network disabled if set to 0) (default: 50)
--maxpendpeers value                Maximum number of pending connection attempts (defaults used if set to 0) (default: 0)
--nat value                         NAT port mapping mechanism (any|none|upnp|pmp|extip:<IP>) (default: "any")
--nodiscover                        Disables the peer discovery mechanism (manual peer addition)
--v5disc                            Enables the experimental RLPx V5 (Topic Discovery) mechanism
--netrestrict value                 Restricts network communication to the given IP networks (CIDR masks)
--nodekey value                     P2P node key file
--nodehex value                     P2P node as hex (for testing)
```

### Miner options

```plaintext
--mine                              Enable mining
--miner.threads value               Number of CPU threads to use for mining (default: 0)
--miner.notify value                Comma-separated HTTP URL list to notify of new work packages
--miner.notify.full                 Notify with pending block headers instead of work packages
--miner.gasprice value              Minimum gas price for mining a transaction (default: 1000000000)
--miner.gaslimit value              Target gas ceiling for mined blocks (default: 8000000)
--miner.etherbase value             Public address for block mining rewards (default = first account) (default: "0")
--miner.extradata value             Block extra data set by the miner (default = client version)
--miner.recommit value              Time interval to recreate the block being mined (default: 3s)
--miner.noverify                    Disable remote sealing verification
--miner.leftover value              The interval block with transactions needs committing before empty block is produced (default: 200ms)
--miner.blocksizereserve value      Reserved block size when committing transactions to block (default: 500000)
```

### Gas price oracle options

```plaintext
--gpo.blocks value                  Number of recent blocks to check for gas prices (default: 20)
--gpo.percentile value              Suggested gas price is the given percentile of a set of recent transaction gas prices (default: 60)
--gpo.maxprice value                Maximum transaction priority fee (or gasprice before London fork) to be recommended by gpo (default: 500000000000)
--gpo.ignoreprice value             Gas price below which gpo will ignore transactions (default: 2)
```
  
### Virtual machine options

```plaintext
--vmdebug                           Record information useful for VM and contract debugging
```

### Logging and debugging options

```plaintext
--fakepow                           Disables proof-of-work verification
--nocompaction                      Disables db compaction after import
--verbosity value                   Logging verbosity: 0=silent, 1=error, 2=warn, 3=info, 4=debug, 5=detail (default: 3)
--vmodule value                     Per-module verbosity: comma-separated list of <pattern>=<level> (e.g. eth/*=5,p2p=4)
--log.json                          Format logs with JSON
--log.backtrace value               Request a stack trace at a specific logging statement (e.g. "block.go:271")
--log.debug                         Prepends log messages with call-site location (file and line number)
--pprof                             Enable the pprof HTTP server
--pprof.addr value                  pprof HTTP server listening interface (default: "127.0.0.1")
--pprof.port value                  pprof HTTP server listening port (default: 6060)
--pprof.memprofilerate value        Turn on memory profiling with the given rate (default: 524288)
--pprof.blockprofilerate value      Turn on block profiling with the given rate (default: 0)
--pprof.cpuprofile value            Write CPU profile to the given file
--trace value                       Write execution trace to the given file
```

### Metrics and stats options

```plaintext
--metrics                              Enable metrics collection and reporting
--metrics.expensive                    Enable expensive metrics collection and reporting
--metrics.addr value                   Enable stand-alone metrics HTTP server listening interface (default: "127.0.0.1")
--metrics.port value                   Metrics HTTP server listening port (default: 6060)
--metrics.influxdb                     Enable metrics export/push to an external InfluxDB database
--metrics.influxdb.endpoint value      InfluxDB API endpoint to report metrics to (default: "http://localhost:8086")
--metrics.influxdb.database value      InfluxDB database name to push reported metrics to (default: "geth")
--metrics.influxdb.username value      Username to authorize access to the database (default: "test")
--metrics.influxdb.password value      Password to authorize access to the database (default: "test")
--metrics.influxdb.tags value          Comma-separated InfluxDB tags (/values) attached to all measurements (default: "host=localhost")
--metrics.influxdbv2                   Enable metrics export/push to an external InfluxDB v2 database
--metrics.influxdb.token value         Token to authorize access to the database (v2 only) (default: "test")
--metrics.influxdb.bucket value        InfluxDB bucket name to push reported metrics to (v2 only) (default: "geth")
--metrics.influxdb.organization value  InfluxDB organization name (v2 only) (default: "geth")
```

### Profiling options

```plaintext
--pyroscope.enabled                     Enable pyroscope - profiling tool
--pyroscope.app.name value              Set application that is displayed in pyroscope UI
--pyroscope.server value                Pyroscope server address (default: "http://localhost:4040")
--pyroscope.blockprofilerate value      Get the fraction of goroutine blocking events (default: 5)
--pyroscope.mutexprofilefraction value  Get the fraction of mutex contention events (default: 5)
```

### Fast finality options

```plaintext
--votepool.maxcurvoteperblock value  The maximum finality vote per current block (default: 22)
  --finality.enable                    Enable fast finality vote
  --finality.enablesign                Enable fast finality vote signing
  --finality.blspasswordpath value     The path to bls wallet password file (default: "bls_password")
  --finality.blswalletpath value       The path to bls wallet secret key (default: "bls_keystore")
  --override.arrowglacier value        Manually specify Arrow Glacier fork-block, overriding the bundled setting (default: 0)
  --readiness                          Enable Readiness on the HTTP-RPC server. Note that Readiness can only be started if an HTTP server is started as well.
  --readiness.prometheus value         Prometheus address for collecting metric (default: "localhost:9090")
  --readiness.block.lag value          The block lag for deciding the readiness is success or fail (default: 5)
```

### Other options

```plaintext
--snapshot                          Enables snapshot-database mode (default = enable)
--bloomfilter.size value            Megabytes of memory allocated to bloom-filter for pruning (default: 2048)
--help, -h                          show help
--catalyst                          Catalyst mode (eth2 integration testing)
```
