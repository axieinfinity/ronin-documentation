---
description: Latest versions of the node's software.
---

# Latest version
This page describes how to get the latest version of the node's software.

## Ronin node
Every Ronin node upgrade is published on GitHub:
[https://github.com/axieinfinity/ronin/releases](https://github.com/axieinfinity/ronin/releases)

To find the Docker image for each release, visit the links in the sections that follow.

### Mainnet
* Docker Hub: [https://hub.docker.com/r/axieinfinity/ronin-mainnet/tags](https://hub.docker.com/r/axieinfinity/ronin-mainnet/tags)
* GitHub Container Registry: [https://github.com/axieinfinity/ronin/pkgs/container/ronin](https://github.com/axieinfinity/ronin/pkgs/container/ronin)

### Latest image
To download the latest image, update `NODE_IMAGE` in your `.env` file
to *either* of the following:

```
ghcr.io/axieinfinity/ronin:v2.5.2-9bf4895
```

```
axieinfinity/ronin-mainnet:v2.5.2-9bf4895
```

## Bridge node
Every bridge upgrade is published on GitHub:
[https://github.com/axieinfinity/bridge-v2/releases](https://github.com/axieinfinity/bridge-v2/releases)

To find the Docker image for each release, visit Docker Hub:
[https://hub.docker.com/r/axieinfinity/bridge/tags](https://hub.docker.com/r/axieinfinity/bridge/tags)

### Latest image
To download the latest image, update `BRIDGE_IMAGE` in your `.env` file
to the following:

```
axieinfinity/bridge:v0.2.3-56f7328
```
