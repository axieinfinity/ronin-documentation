---
description: Types of nodes on Ronin.
title: Introduction to nodes
---

# Introduction to nodes
There are two types of nodes on Ronin:
* Ronin node:
  * Non-validator node
  * Validator node
  * Archive node
* Bridge operator node

The following section describes each type in detail.

## What is a Ronin node?
The Ronin node ([GitHub](https://github.com/axieinfinity/ronin)) is the building block of the Ronin network infrastructure. Nodes connect together to conduct consensus on transactions, maintain the ledger, and provide other useful functions. 

The Ronin node can be configured in three different ways depending on the purpose:
* A *non-validator node* doesn’t conduct consensus, but simply connects to the network, synchronizes ledger state, and observes the status of the network. For example, a non-validator node can serve as a gateway for decentralized applications to query the Ronin blockchain for information, send transactions, and execute smart contracts. A non-validator Ronin 
* A *validator node* is what most people think of as a node. These nodes are responsible for verifying and approving transactions
submitted by users and blockchain clients. Upon the close of a transaction block, validator nodes are randomly chosen to validate block data, thus generating the
subsequent block, and earning RON tokens as a reward. These are the nodes that are listed on the [RON Staking](https://app.roninchain.com/staking) app.
* An *archive node* retains all historical data right back to genesis and is suited for making fast queries about historical states. This data represents units of terabytes, which makes archive nodes less attractive for average users but can be handy for services like block explorers, wallet vendors, and chain analytics.

Validator and non-validator are considered *full* nodes—they store full blockchain data, which is periodically pruned so the node does not store all state data back to genesis. The archive node, on the other hand, stores all of the information that a full node does but also builds an archive of historical states all the way back to genesis.

A validator node starts life as a full node, but has also “registered” itself to the network as a validator, which means that it may now accept RON token stake and potentially be included in the validator set that conduct network consensus.

## What is a bridge operator node?
A *bridge operator node* ([GitHub](https://github.com/axieinfinity/bridge-v2)), also referred to as the bridge operator, is a type of node used for acknowledging deposit and withdrawal events on Ronin Bridge—the blockchain bridge that facilitates asset transfers between Ronin and other EVM-based chains.

:::caution
On Ronin, each validator is required to run a validator node and a bridge operator node. The latter is required to facilitate asset transfers on Ronin Bridge. A validator who doesn't run a bridge operator is not eligible for the block reward.
:::

## Run a node
See [Before you start](./setup/introduction.md) for information on how to set up or configure a node, and check out the [Resources](./resources/) section for further information.

To learn about the rewards available to validators, see [Rewards](./../basics/rewards.md).
