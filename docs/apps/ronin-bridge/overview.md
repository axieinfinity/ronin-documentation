---
description: A dApp for transferring tokens and NFTs between Ethereum and Ronin.
slug: /apps/ronin-bridge
title: Ronin Bridge
---

## Overview

Ronin Bridge ([https://app.roninchain.com/bridge](https://app.roninchain.com/bridge)) is an app for transferring ERC20 tokens and NFTs (non-fungible tokens) between Ethereum and the Ronin chain.

![bridge-home](./assets/bridge-home.png)

This is a multi-signature bridge, which means that when you make a transaction, multiple bridge operators have to approve it before it's finalized. This approach makes the bridge a secure choice for cross-chain transactions, preventing any single party from acting maliciously or making unauthorized changes.

## Wallets you can use

Ronin Bridge supports the following wallets:

* Ronin Wallet
* Metamask Wallet
* Trust Wallet

For example, you can deposit an NFT from your Metamask wallet to your Ronin Wallet, or withdraw an amount of AXS from Ronin Wallet to Trust Wallet.

## Assets you can transfer

### ERC20 tokens

With Ronin Bridge, you can deposit and withdraw the following ERC20 tokens:

* Deposit: ETH, AXS, SLP, USDC, AEC, AGG, BANANA
* Withdrawal: WETH, AXS, SLP, USDC, AGG, BANANA

Withdrawal limits apply. For more information, see [Withdrawal limits](./reference/withdrawal-limits.md).

### NFTs

As for NFTs, the bridge supports deposit and withdrawal for the following collections:

* Pixels Land Farm
* Cyberkongz VX
* Cyberkongz Genkai

## RNS support

When transferring assets to Ronin addresses, your can use both standard `0x...` Ronin addresses or an RNS (Ronin Name Service) domain names, such as `axieinfinity.ron`. Note that the RNS name must be an exact match for the underlying address to be detected.

## User guides

* [Deposit NFTs](./guides/nft-deposit.md)
* [Withdraw NFTs](./guides/nft-withdraw.md)
* [Deposit ERC20 tokens](./guides/token-deposit.md)
* [Withdraw ERC20 tokens](./guides/token-withdraw.md)
