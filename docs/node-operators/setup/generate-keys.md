---
description: Securely generate private keys for your validator node.
title: Generate private keys
---

import extension from './assets/extension.png';
import mobile from './assets/mobile.png';

Each validator node requires private keys for signing blocks and consensus messages sent to the other validators in the network.

The required private keys include one ECDSA key and one BLS key. The keys are named after digital signature schemes: Elliptic Curve Digital Signature Algorithm (ECDSA) and Boneh–Lynn–Shacham (BLS), respectively. 

- The ECDSA key is used for signing blocks.
- The BLS key is used for producing finality votes. Validators who produce finality vote receive a reward. If a validator fails to produce a finality vote, no slashing penalty applies.

## Generate BLS keys

1. Build Ronin from the source code:

    ```
    > git clone https://github.com/axieinfinity/ronin
    > cd ronin
    > make ronin
    ```

2. Add the Ronin binary path to the `$PATH` environment variable:

    ```
    > cp ./build/bin/ronin /usr/local/bin
    ```

3. Generate a BLS key pair:

    ```
    > mkdir bls_keystore
    > echo "input_your_password" > bls_password
    > ronin account generatebls --secret

    Successfully generated BLS key
    Public key: {your_public_key}
    Secret key: {your_private_key}
    ```

    An `all-accounts.keystore.json` file containing the encrypted BLS key is created inside the `bls_keystore` directory.

    To reveal the public key, run this command:

    ```
    > ronin account listbls

    BLS public key #0: {your_public_key}
    ```

    To reveal both the public key and private key, run this command:

    ```
    > ronin account listbls --secret

    BLS public key #0: {your_public_key}
    BLS secret key #0: {Secret key: {your_private_key}
    }
    ```

### Configure Docker image

In the `.env` file of your node's Docker image, configure the following:

1. Leave `BLS_PRIVATE_KEY` empty but enter the password in `BLS_PASSWORD`.
2. Set `BLS_AUTO_GENERATE` to `true`, and then run `docker-compose up -d`.
3. Run `docker-compose logs node`, which returns `Using BLS account your-public-key`.

If you want to view the BLS private key, do the following:

1. Set `BLS_SHOW_PRIVATE_KEY=true`, run `docker-compose up -d`
2. Run `docker-compose logs node`, which returns `BLS secret key #0: {your_private_key}`. **Note:** This command just shows the private key without running the node.
3. Set `BLS_SHOW_PRIVATE_KEY` to `false`, and then run `docker-compose up -d` to start the node.

For a non-validator node, add the following variables to the `.env` file:

```
ENABLE_FAST_FINALITY=true
ENABLE_FAST_FINALITY_SIGN=false
```

## Generate ECDSA keys

### Generate locally

#### Prerequisites

Go (version 1.17 or later). Follow the
[installation instructions](https://go.dev/doc/install)
on the official website.

#### Steps

1. Compile the `ethkey` tool from the Ronin source code by running the
following commands:

    > git clone https://github.com/axieinfinity/ronin
    > cd ronin
    > go get ./...
    > go build ./cmd/ethkey/
    > ls -l ethkey 
    -rwxr-xr-x 1 user staff 16306850 Mar 23 18:13 ethkey    

2. Generate the key pair and set a password:

    ```
    > ./ethkey generate your-key-name
    ```

3. Reveal the key pair:

    ```
    > ./ethkey inspect --private your-key-name
    ```

### Generate using Ronin Wallet

You can generate the ECDSA keys using Ronin Wallet—both the browser extension and the mobile app, which can be downloaded on the [Ronin Wallet](https://wallet.roninchain.com/) page. 

#### Browser extension

<img src={extension} width={1440} />

#### Mobile app

<img src={mobile} width={1440} />
