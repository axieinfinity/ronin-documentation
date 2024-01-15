---
title: Ronin Bridge
description: A dApp for transferring tokens between Ethereum and Ronin.
---

## Overview

Ronin Bridge is an app for transferring tokens between the Ethereum chain and Ronin. When you initiate a transaction on Ronin Bridge, This is a multi-signature bridge, meaning that multiple bridge operators must approve a transaction before it's finalized. This multi-signature approach improves the security and trustworthiness of cross-chain transactions, and prevents any single party from acting maliciously or making unauthorized changes.

Link: [https://app.roninchain.com/bridge](https://app.roninchain.com/bridge)

## Supported wallets

Ronin Bridge supports the following wallets:

* Ronin Wallet
* Metamask Wallet
* Trust Wallet

For example, you can deposit an NFT from your Metamask wallet to your Ronin Wallet, or withdraw an amount of AXS from Ronin Wallet to Trust Wallet.

## Supported assets

This section lists the digital assets that you can deposit and withdraw with Ronin Bridge.

### ERC20 tokens

Ronin Bridge supports deposit and withdrawal of the following ERC20 tokens:

* Deposit: ETH, AXS, SLP, USDC, AEC, AGG, BANANA
* Withdrawal: WETH, AXS, SLP, USDC, AGG, BANANA

[Withdrawal limits](#withdrawal-limits) apply.

### NFTs

Ronin Bridge supports deposit and withdrawal of the following NFTs:

* Pixels Land Farm
* Cyberkongz VX
* Cyberkongz Genkai

## Withdrawal limits

Withdrawing funds through Ronin Bridge involves a *tiered system* based on the transaction value. The following table outlines the default daily limit per token for each tier:

|        | AXS       | WETH    | SLP           | USDC        | AGG |
| ------ | --------- | ------- | ------------- | ----------- | --- |
| Daily limit per token | Capped at 500,000 | Capped at 4,500 | Capped at 2,000,000,000 | Capped at 2,500,000 | Capped at 500,000,000 |
| Tier 1 | $<$ 100,000 | $<$ 1,000 | $<$ 300,000,000 | $<$ 1,000,000 | $<$ 200,000,000 |
| Tier 2 | $\geq$ 100,000 | $\geq$ 1,000 | $\geq$ 300,000,000 | $\geq$ 1,000,000 | $\geq$ 200,000,000 |
| Tier 3\* | $\geq$ 400,000 | $\geq$ 4,000 | $\geq$ 1,500,000,000 | $\geq$ 2,000,000 | $\geq$ 800,000,000 |

\*Tier 3 transactions aren't counted toward the daily limit per token, because they require human review.

For Tier 1 transactions, 70% of validators need to approve automatically. Tier 2 requires 90% automated approval. Tier 3 requires both 90% automated approval and a manual review with a fee of around 0.001% of the transaction value.
