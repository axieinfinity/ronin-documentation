---
label: Ronin Bridge
description: Ronin Bridge overview
---

# Ronin Bridge
A service tracking gateway events from Ethereum and Ronin chains.

URL: https://bridge.roninchain.com

## Transfer Gateway and Ronin Bridge

### Transfer Gateway

Transfer Gateway is the gate for token transfer onto the sidechain and the subsequent transfer back to Ethereum. At the moment we support our users depositing on ETH, ERC20, and ERC721.

Transfer Gateway contracts include:

* `MainchainGateway` contract deployed on the Ethereum chain.
* `SidechainGateway` contract deployed on the Ronin chain.

Whenever users deposit or withdraw their assets these contracts will emit corresponding events.

### Ronin Bridge

Ronin Bridge tracks events from the MainchainGateway and SidechainGateway contracts. Each validator has to run a bridge operator node so that this service can be acknowledged for the validator.

## Security audits

* [Verichains Bridge Audit v1.1](https://cdn.axieinfinity.com/ronin-doc/verichains-audit-bridge-v1.1.pdf)
* [Certik Audit](https://cdn.axieinfinity.com/ronin-doc/REP-final-20220621T172752Z.pdf)
