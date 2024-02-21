---
description: A dApp for transferring tokens and NFTs between Ethereum and Ronin.
slug: /apps/ronin-bridge
title: Ronin Bridge
---

## Overview

Ronin Bridge ([app.roninchain.com/bridge](https://app.roninchain.com/bridge)) is an app for transferring ERC20 tokens and NFTs (non-fungible tokens) between Ethereum and the Ronin chain.

![bridge-home](./assets/bridge-home.png)

This is a multi-signature bridge, which means that when you make a transaction, multiple bridge operators have to approve it before it's finalized. This approach makes the bridge a secure choice for cross-chain transactions, preventing any single party from acting maliciously or making unauthorized changes.

## Supported wallets

Ronin Bridge supports the following wallets:

* [Ronin Wallet](https://wallet.roninchain.com/)
* [Metamask Wallet](https://metamask.io/)
* [Trust Wallet](https://trustwallet.com/)

## Supported assets

### ERC20 tokens

With Ronin Bridge, you can transfer the following ERC20 tokens:

* Deposit: ETH, AXS, SLP, USDC, AGG, PIXEL, AEC
* Withdrawal: WETH, AXS, SLP, USDC, AGG, PIXEL

Withdrawal limits apply. For more information, see [Withdrawal limits](./reference/withdrawal-limits.md).

### NFTs

With Ronin Bridge, you can transfer NFTs (non-fungible tokens) from the following collections:

* Pixels Land Farm
* Cyberkongz VX
* Cyberkongz Genkai

## RNS compatibility

When sending a token to an address on Ronin, you can either enter the standard wallet address, such as "0x...", or its RNS (Ronin Name Service) representation, such as "comingsoon.ron".

**Note:** Make sure to enter the entire RNS name, including the ".ron" part.

![bridge-rns](./assets/bridge-rns.png)

For more information about RNS, see [Register an RNS name](../rns/guides/register/regular.md).

## User guides

* [Deposit an NFT](./guides/nft-deposit.md)
* [Withdraw an NFT](./guides/nft-withdraw.md)
* [Deposit an ERC20 token](./guides/token-deposit.md)
* [Withdraw an ERC20 token](./guides/token-withdraw.md)
