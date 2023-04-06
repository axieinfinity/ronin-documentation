---
description: Securely generate private keys.
---

import extension from './assets/extension.png';
import mobile from './assets/mobile.png';

# Generate keys
This guide demonstrates how to generate private keys for your nodes.

## Prerequisites
You need to have [Golang](https://go.dev/doc/install) installed.

## Generate private keys locally
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
    $ ./ethkey inspect --private your-key-name
    ```

## Generate private keys using Ronin Wallet
You can generate private keys using the Ronin Wallet—both the browser extension and the mobile app, which be downloaded on the [Ronin Wallet](https://wallet.roninchain.com/) page. Refer to the flow guides to learn how to generate your keys.

### Browser extension

<img src={extension} width={1440} />

### Mobile app (iOS)

<img src={mobile} width={1440} />