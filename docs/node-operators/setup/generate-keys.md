---
description: Securely generate private keys.
title: Generate keys
---

import extension from './assets/extension.png';
import mobile from './assets/mobile.png';


## Generate BLS keys


## Generate private keys for nodes

This guide demonstrates how to generate private keys for your nodes.

### Generate locally

#### Prerequisites

Go (version 1.17 or later). Follow the
[installation instructions](https://go.dev/doc/install)
on the official website.

#### Steps

1. Compile the `ethkey` tool from the Ronin source code by running the
following commands:

    ```
    git clone https://github.com/axieinfinity/ronin
    cd ronin
    go get ./...
    go build ./cmd/ethkey/
    ls -l ethkey 
    -rwxr-xr-x 1 user staff 16306850 Mar 23 18:13 ethkey
    ```

2. Generate the key and set a password:

    ```
    ./ethkey generate your-key-name
    ```

3. Reveal the key and enter the password:

    ```
    ./ethkey inspect --private your-key-name
    ```

### Generate using Ronin Wallet

You can generate private keys using Ronin Wallet—both the browser extension and the mobile app, which can be downloaded on the [Ronin Wallet](https://wallet.roninchain.com/) page. 

Follow the steps in the flow guides to generate your keys using Ronin Wallet.

#### Browser extension

<img src={extension} width={1440} />

#### Mobile app

<img src={mobile} width={1440} />
