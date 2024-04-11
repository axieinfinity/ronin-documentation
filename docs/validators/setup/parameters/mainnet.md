---
description: Specifications of the Ronin mainnet.
title: Ronin mainnet
---

## Parameters

* Chain ID (network ID): `2020`
* RPC endpoint: [https://api.roninchain.com/rpc](https://api.roninchain.com/rpc)
* Consensus: DPoS (Consortium)
* Network status: [ronin-stats.roninchain.com](https://ronin-stats.roninchain.com/)
* Explorer: [app.roninchain.com](https://app.roninchain.com)
* Genesis file: [mainnet.json](https://github.com/axieinfinity/ronin/blob/master/genesis/mainnet.json)
* Block time: minimum 3 seconds
* Number of confirmations to approve a transaction: 15 confirmations (approximately 45 seconds)
* Gas price: 20 gwei

## Validator set

* Total validators: 22
* Governing Validators: 12
* Standard Validators: 10

For today's validator set, visit [RON Staking](https://app.roninchain.com/staking?tab=validator).

## Genesis contracts

Whitelist:

```bash
0x0000000000000000000000000000000000000033
```

Denylist:

```bash
0x313b24994c93FA0471CB4D7aB796b07467041806
```

Validators:

```bash
0x0000000000000000000000000000000000000011
```
