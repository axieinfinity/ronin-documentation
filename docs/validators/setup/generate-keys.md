---
description: Securely generate private keys for your validator node.
title: Generate private keys
---

import extension from './assets/extension.png';
import mobile from './assets/mobile.png';

## Overview

Each validator node requires private keys for signing blocks and consensus messages sent to the other validators in the network.

The required private keys include a BLS key and an ECDSA key. The keys are named after digital signature schemes: Elliptic Curve Digital Signature Algorithm (ECDSA) and Boneh–Lynn–Shacham (BLS), respectively.

- The BLS key is used for producing finality votes. Validators who produce finality votes receive a reward.
- The ECDSA key is used for signing blocks.

## Generate a BLS key

You can generate a BLS key pair using the Ronin CLI or your node's Docker image.

### Generate using the CLI

1. Build Ronin from the source code:
   ```
   $ git clone https://github.com/axieinfinity/ronin
   $ cd ronin
   $ make ronin
   ```

2. Add `./build/bin/ronin` to the `$PATH` environment variable. You can do this by adding the following line to your `$HOME/.profile` or `/etc/profile` (for a system-wide installation):

   ```
   export PATH=$PATH:/path/to/ronin
   ```

   If run from the `ronin` directory, then the command is as follows:
    
   ```
   export PATH=$PATH:./build/bin/ronin
   ```

   **Note:** Make sure to close and reopen the terminal after adding the path.

3. Generate a BLS key pair:

   ```
   $ mkdir bls_keystore
   $ echo "input_your_password" > bls_password
   $ ronin account generatebls --secret
   ```

   The output is the following:

   ```
   Successfully generated BLS key
   Public key: {your_public_key}
   Secret key: {your_private_key}
   ```

   An `all-accounts.keystore.json` file containing the encrypted BLS key is created inside the `bls_keystore` directory.

   To reveal the public key, run this command:

   ```
   $ ronin account listbls
   ```

   The output is the following:

   ```
   BLS public key #0: {your_public_key}
   ```

   To reveal both the public key and private key, run this command:

   ```
   $ ronin account listbls --secret
   ```
    
   The output is the following:

   ```
   BLS public key #0: {your_public_key}
   BLS secret key #0: {your_private_key}
   ```

### Generate using Docker image

In the `.env` file of your node's Docker image, configure the following:

1. Leave `BLS_PRIVATE_KEY` empty but enter the password in `BLS_PASSWORD`.
2. Set `BLS_AUTO_GENERATE` to `true`, and then run `docker-compose up -d`.
3. Run `docker-compose logs node`, which returns `Using BLS account your-public-key`.

If you want to view the BLS private key, do the following:

1. Set `BLS_SHOW_PRIVATE_KEY=true`, run `docker-compose up -d`
2. Run `docker-compose logs node`, which returns `BLS secret key #0: {your_private_key}`. **Note:** This command just shows the private key without running the node.
3. Set `BLS_SHOW_PRIVATE_KEY` to `false`, and then run `docker-compose up -d` to start the node.

## Generate an ECDSA key

You can generate an ECDSA key pair using the Ronin CLI or the Ronin Wallet app or extension.

### Generate using the CLI

#### Prerequisites

Go (version 1.20 or later). Follow the
[installation instructions](https://go.dev/doc/install)
on the official website.

#### Steps

1. Compile the `ethkey` tool from the Ronin source code by running the following commands:
   
   ```
   $ git clone https://github.com/axieinfinity/ronin
   $ cd ronin
   $ go get ./...
   $ go build ./cmd/ethkey/
   $ ls -l ethkey
   ```

   The output is similar to the following:

   ```
   -rwxr-xr-x 1 user staff 16306850 Mar 23 18:13 ethkey
   ```

2. Generate the key pair and set a password:

   ```
   $ ./ethkey generate your_private_key_name
   ```

3. Reveal the key pair:

   ```
   $ ./ethkey inspect --private your_private_key_name
   ```

### Generate using Ronin Wallet

ECDSA keys can also be generated using [Ronin Wallet](https://wallet.roninchain.com/), both the browser extension and the mobile app. Follow the steps in the flow diagrams provided in the following sections.

#### Browser extension

<img src={extension} width={1440} />

#### Mobile app

<img src={mobile} width={1440} />

## See also

- [REP-0003: Optimistic Fast Finality](https://github.com/axieinfinity/REPs/blob/main/REP-0003.md#rewards)
- [Build a Ronin CLI](./cli.md)
