---
description: >-
  Transfer Gateways and Ronin Bridge represent the gate between Ethereum and
  Ronin.
sidebar_position: 2
---

# Transfer Gateways and Ronin Bridge

Transfer Gateway is the gate for token transfer onto the sidechain and the subsequent transfer back to Ethereum. At the moment we support our users depositing on ETH, ERC20, and ERC721.

Transfer Gateway contracts include:

* `MainchainGateway` contract deployed on the Ethereum chain.
* `SidechainGateway` contract deployed on the Ronin chain.

Whenever users deposit or withdraw their assets these contracts will emit corresponding events.

## Ronin Bridge

Ronin Bridge is actually a service to track events from the MainchainGateway and SidechainGateway contracts. Each validator has to run the Bridge so that this service can be acknowledged for the validator.
