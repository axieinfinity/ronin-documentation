# Running `ronin`

Going through all the possible command line flags is out of scope here (please consult our
[CLI Wiki page](https://geth.ethereum.org/docs/interface/command-line-options)),
but we've enumerated a few common parameter combos to get you up to speed quickly
on how you can run your own `geth` instance.

### Requirements
The minimum recommended hardware specification for nodes connected to Mainnet is:
- CPU: Equivalent of 8 AWS vCPU
- RAM: 16GiB
- Storage: 1 TiB
- OS: Ubuntu 20.04 or macOS >= 12
- Network: Reliable IPv4 or IPv6 network connection, with an open public port

### Building the source
Building `ronin` requires both a Go (version 1.17 or later) and a C compiler. You can install
them using your favourite package manager. Once the dependencies are installed, run

```shell
make ronin
```

or, to build the full suite of utilities:

```shell
make all
```

### Full node on the main Ronin network

```shell
$ ronin --http.api eth,net,web3,consortium --networkid 2020 --bootnodes enode://a166ab6437cf370bc604097529a0fb6a8a4836bb85833fbf588b130cb73fe0517940d10c5d89c0e3e1c2800a774ac1ae2108d62cb4608556e41bc1fc4482241a@35.193.159.26:30303 --datadir /opt/ronin --port 30303 --http --http.corsdomain '*' --http.addr 0.0.0.0 --http.port 8545 --http.vhosts '*' --ws --ws.addr 0.0.0.0 --ws.port 8546 --ws.origins '*' 
```

This command will:
 * Start `ronin` in snap sync mode (default, can be changed with the `--syncmode` flag),
   causing it to download more data in exchange for avoiding processing the entire history
   of the Ronin network, which is very CPU intensive.

### Configuration

As an alternative to passing the numerous flags to the `ronin` binary, you can also pass a
configuration file via:

```shell
$ ronin --config /path/to/your_config.toml
```

To get an idea how the file should look like you can use the `dumpconfig` subcommand to
export your existing configuration:

```shell
$ ronin --your-favourite-flags dumpconfig
```
