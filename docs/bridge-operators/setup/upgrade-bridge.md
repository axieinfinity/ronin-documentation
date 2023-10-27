---
title: Upgrade bridge version
description: Get the latest version of the bridge's software.
---

## Overview

This page describes how to get the latest version of the node's software.

## Bridge operator

Every bridge release is published on
[GitHub](https://github.com/axieinfinity/bridge-v2/releases). To find the Docker
image for each release, visit
[Docker Hub](https://hub.docker.com/r/axieinfinity/bridge/tags).

To download the latest image, follow these steps:

1. In the `.env` file, set `BRIDGE_IMAGE` to the following:
    ```
    ghcr.io/axieinfinity/bridge:v0.2.6-1daa149
    ```
2. Save the changes.
3. Run `docker-compose up -d`.

## See also

* [Upgrade validator version]