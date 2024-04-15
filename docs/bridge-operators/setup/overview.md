---
description: Hardware recommendations and methods of installation for bridge nodes.
title: Bridge node
---

## Overview

A *bridge node* ([GitHub](https://github.com/axieinfinity/bridge-v2)) is a type of node used for acknowledging deposit and withdrawal events on Ronin Bridge—the blockchain bridge that facilitates asset transfers between Ronin and Ethereum.

## Who can run a bridge node

Bridge nodes are run by a fixed set of bridge operators selected by Sky Mavis and community. To run a bridge node, you need to go through a governance process that requires approval of at least 70% of the current bridge operators.

## Node installlation

We offer two different methods of installing the bridge:

* Using Docker: if you're familiar with Docker, install and run the bridge as a Docker instance. For instructions, see [Run a bridge node](run-bridge.md).
* Manually: if you're more comfortable using the command line, compile your own bridge binary from the [source code on GitHub](https://github.com/axieinfinity/bridge-v2?tab=readme-ov-file#manually).

## Node upgrade

Keep the node's software up-to-date by upgarding to the latest version as described in [Upgrade bridge software](upgrade-bridge.md).
