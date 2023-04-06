---
description: Latest software for Ronin nodes and bridge operator.
---

# Latest versions
This page describes how to get the latest version of the node's software.

## Ronin node
Every Ronin node release is published on GitHub:
[https://github.com/axieinfinity/ronin/releases](https://github.com/axieinfinity/ronin/releases).
To find the Docker image for each release, visit the links in the sections that follow.

### Mainnet
* Docker Hub: [https://hub.docker.com/r/axieinfinity/ronin-mainnet/tags](https://hub.docker.com/r/axieinfinity/ronin-mainnet/tags)
* GitHub Container Registry: [https://github.com/axieinfinity/ronin/pkgs/container/ronin](https://github.com/axieinfinity/ronin/pkgs/container/ronin)

To download the latest image, follow these steps:
1. Stop your node.
2. Open the `.env` configuration file, and set `NODE_IMAGE` to *either* of the following:
    ```
    ghcr.io/axieinfinity/ronin:v2.5.2-9bf4895
    ```
    ```
    axieinfinity/ronin-mainnet:v2.5.2-9bf4895
    ```
3. Save the changes and start the node.

### Saigon testnet
To find the Docker image for each release, visit Docker Hub: [https://hub.docker.com/r/axieinfinity/ronin-testnet/tags](https://hub.docker.com/r/axieinfinity/ronin-testnet/tags).

To download the latest image, follow these steps:
1. Stop your node.
2. Open the `.env` configuration file, and set `NODE_IMAGE` to the following: 
    ```
    axieinfinity/ronin-testnet:v2.5.0-4abacb213
    ```
3. Save the changes and start the node.

## Bridge operator
Every bridge release is published on GitHub:
[https://github.com/axieinfinity/bridge-v2/releases](https://github.com/axieinfinity/bridge-v2/releases).
To find the Docker image for each release, visit Docker Hub:
[https://hub.docker.com/r/axieinfinity/bridge/tags](https://hub.docker.com/r/axieinfinity/bridge/tags).

To download the latest image, follow these steps:
1. Stop your bridge operator.
2. Open the `.env` configuration file, and set `BRIDGE_IMAGE` to the following:
    ```
    axieinfinity/bridge:v0.2.3-56f7328
    ```
3. Save the changes and start the node.
