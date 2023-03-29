# Specification
Details of the Ronin mainnet specification.

## Configuration
* Chain ID (network ID): `2020`
* RPC endpoint: [https://api.roninchain.com/rpc](https://api.roninchain.com/rpc)
* Consensus: DPoS (Consortium)
* Stats: [https://stats.roninchain.com](https://stats.roninchain.com)
* Explorer: [https://app.roninchain.com](https://app.roninchain.com)
* Genesis file: [mainnet.json](https://github.com/axieinfinity/ronin/blob/master/genesis/mainnet.json)
* Block time: minimum 3 seconds
* Gas price: 20 gwei

## Validator set
* Total validators: 22
* Governing Validators: 12
* Standard Validators: 10

For today's validator set, see [https://app.roninchain.com/staking](https://app.roninchain.com/staking?tab=validator).

## Genesis contracts
Whitelist: 
```
0x0000000000000000000000000000000000000033
```

Blacklist:

```
0x313b24994c93FA0471CB4D7aB796b07467041806
```

Validators:

```
0x0000000000000000000000000000000000000011
```

## Boot nodes

```
enode://cfa5f00c55eba79f359c9d95f5c0b2bb8e173867ffbb6e212c6799a52918502519e56650970e34caf1cd17418d4da46c3243588578886c3b4f8c42d1934bf108@104.198.242.88:30303
enode://f500391c41906a1dae249df084a3d1659fe602db671730b2778316114a5f7df44a0c6864a8dfffdc380fc81c6965dd911338e0e2591eb78a506857015d166250@34.135.18.26:30303
enode://fc7b8ceafe16e6f79ab2da3e73d0a3163d0c28efe0778863102f8f27758986fe28c1540a9a0bbdff29ab93ad1c5803462efe6c98165bbb404d9d099a55f1d2c9@130.211.208.201:30303
```
