---
description: >-
  Validators are responsible for validating transactions and generating blocks,
  ensuring the network’s security and the consistency of the ledger.
sidebar_position: 1
---

# Validators

## Node Recognition

The Ronin nodes must have a validator list so they can specify which validator will generate the next block. There is a mechanism executed every 30 minutes to sync the validator list from a contract named `SidechainValidator`. When we want to add or remove a validator, this contract is modified.

## Validator Responsibilities

Validators are in charge of:

* Generating blocks during their turn.
* Helping other validators generate blocks when they miss their turn.
* Acknowledging deposit and withdrawal events to facilitate assets transfers.
* Updating validator events.
* Updating effective threshold events.

### Generating blocks

Whenever a block is generated, the next validator has to validate incoming transactions and generate a new block.

The block generated in the right turn has a larger `difficult` weight. In case the specified validator can not produce a block, the other validator will generate a new block, that block has a smaller `difficult` weight. These `difficult` weight help nodes have additional facilities to reorg in case the chain is forked.

### Acknowledging events

The validators have to acknowledge every event related to the transfer gateway and validator contract.

The validators acknowledge the deposit event and withdrawal event to facilitate assets transferring. In the `SidechainValidator` contract, there is a threshold setting indicating that an event needs to have at least that ratio of acknowledgment from validators, whether it is adding, removing validator; deposit, or withdraw assets, and also updating that threshold.

## To become a validator

Please contact us at hello@axieinfinity.com
