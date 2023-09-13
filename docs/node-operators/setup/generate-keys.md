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

2. Add the binary path to the `$PATH` environment variable:

    ```
    > cp ./build/bin/ronin /usr/local/bin
    ```

3. Generate the BLS key pair:

    ```
    > mkdir bls_keystore
    > echo "input_your_password" > bls_password
    > ronin account generatebls --secret

    Successfully generated BLS key
    Public key: {your_public_key}
    Secret key: {your_secret_key}
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
BLS secret key #0: {Secret key: {your_secret_key}
}
```

### Use BLS key in docker images

1. In the `.env` file, make the following changes:
   - Leave `BLS_PRIVATE_KEY` empty but input the `BLS_PASSWORD`.
   - Set `BLS_AUTO_GENERATE=true`, run `docker-compose up -d`.
   - Run `docker-compose logs node`, you see `Using BLS account redacted-public-key`.

- If you want to view the BLS private key
    + Set `BLS_SHOW_PRIVATE_KEY=true`, run `docker-compose up -d`
    + Run `docker-compose logs node`, you see `BLS secret key #0: {redacted}`
    + WARNING: this just shows the private key without running the node
    + Set `BLS_SHOW_PRIVATE_KEY=false`, run `docker-compose up -d` to rerun the node

## Non-validator node
- Add these variables to `.env` file
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

    git clone https://github.com/axieinfinity/ronin
    cd ronin
    go get ./...
    go build ./cmd/ethkey/
    ls -l ethkey 
    -rwxr-xr-x 1 user staff 16306850 Mar 23 18:13 ethkey    

2. Generate the key pair and set a password:

    ```
    ./ethkey generate your-key-name
    ```

3. Reveal the key pair:

    ```
    ./ethkey inspect --private your-key-name
    ```

### Generate using Ronin Wallet

You can generate the ECDSA keys using Ronin Wallet—both the browser extension and the mobile app, which can be downloaded on the [Ronin Wallet](https://wallet.roninchain.com/) page. 

#### Browser extension

<img src={extension} width={1440} />

#### Mobile app

<img src={mobile} width={1440} />
