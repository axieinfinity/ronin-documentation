---
description: Latest software for Ronin nodes.
title: Upgrade validator version
---

## Overview

This page describes how to get the latest version of the Ronin node's software.

Upgrades are usually backwards-compatible and can contain performance
improvements, bug fixes or new features. It's recommended that every node is
upgraded as soon as possible.

An upgrade, however, can also be a hardfork, which is usually not
backwards-compatible. If your node fails to upgrade before a hardfork block
occurs, the data on your node can differ from that on the network. Therefore,
it's critical to upgrade your node before a hardfork occurs. All Ronin-planned
hardforks are announced seven days in advance on our
[Discord](https://discord.gg/roninnetwork) server and the
[Ronin Newsletter](https://blog.roninchain.com).

## Ronin node

Every Ronin node release is published on
[GitHub](https://github.com/axieinfinity/ronin/releases).

### Mainnet

To find the Docker image for each mainnet release, visit the following:

* [GitHub Container Registry](https://github.com/axieinfinity/ronin/pkgs/container/ronin)

To download the latest image for your node, follow these steps:

1. In the `.env` file, set `NODE_IMAGE` to the following:

    ```bash
    ghcr.io/axieinfinity/ronin:v2.7.1-c64ddd3
    ```

2. Save the changes.
3. Run `docker-compose up -d`.

### Saigon testnet

To find the Docker image for each testnet release, visit
[Docker Hub](https://hub.docker.com/r/axieinfinity/ronin-testnet/tags).

To download the latest image for your node, follow these steps:

1. In the `.env` file, set `NODE_IMAGE` to the following:

    ```bash
    ghcr.io/axieinfinity/ronin:v2.6.0-83c8375
    ```

2. Save the changes.
3. Run `docker-compose up -d`.

## See also

[Upgrade bridge version](./../../bridge-operators/setup/upgrade-bridge.md)
