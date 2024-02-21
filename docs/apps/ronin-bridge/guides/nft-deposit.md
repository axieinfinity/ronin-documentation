---
description: Deposit NFTs from a compatible Ethereum wallet into Ronin Wallet using Ronin Bridge.
title: Deposit an NFT
---

## Overview

This guide describes how to use Ronin Bridge to send an NFT (non-fungible token) from an Ethereum wallet to your Ronin Wallet. For information on supported Ethereum wallets and NFT collections, see [Ronin Bridge](../overview.md).

## Prerequisites

If you access Ronin Bridge through the Ronin Wallet mobile app, then you can only connect Ethereum wallets imported into your Ronin Wallet beforehand. For more information, see [Importing Your MetaMask Wallet to Ronin Wallet](https://support.roninchain.com/hc/en-us/articles/14862812718107-Importing-Your-MetaMask-Wallet-to-Ronin-Wallet).

## Step 1. Fill in the details

1. Open the [Ronin Bridge](https://app.roninchain.com/bridge) app select the **NFTs** tab.
2. In the **From** field, connect the Ethereum wallet that you want to transfer the NFT from. In the mobile Ronin Wallet app, select your imported Ethereum wallet.
   ![nft-deposit-1](../assets/nft-deposit-1.png)
3. In the **To** field, enter your Ronin address that you want to deposit the NFT into.
   ![nft-deposit-2](../assets/nft-deposit-2.png)

## Step 2. Select the NFT to deposit

1. Choose the collection containing the NFTs you want to deposit.
   ![nft-deposit-3](../assets/nft-deposit-3.png)
2. In the collection, select the specific NFT.
   ![nft-deposit-4](../assets/nft-deposit-4.png)

## Step 3. Authorize the bridge to transfer your NFT

To deposit an NFT, you need to grant Ronin Bridge permission to transfer it, which is also referred to as *approval*. You have two ways to do it: approve a single token or approve all tokens.

### Approve a single token

You can choose to grant permission to each individual NFT that you transfer:

1. With the NFT selected, click **Approve NFT**.
   ![nft-deposit-5](../assets/nft-deposit-5.png)
2. Select **Single token**.
   ![nft-deposit-6](../assets/nft-deposit-6.png)
3. When prompted, sign the transaction in your connected wallet.

When you make another transfer in the future, you will need to approve it again.

### Approve all tokens

Alternatively, grant access to all your tokens at once to bypass the single token approval step in the future:

1. Select the NFT you want to transfer, and then click **Approve NFT**.
   ![nft-deposit-5](../assets/nft-deposit-5.png)
2. Select **All tokens**.
   ![nft-deposit-7](../assets/nft-deposit-7.png)
3. When prompted, sign the transaction in your connected wallet.

This way, your future transfers will not require approvals.

## Step 4. Deposit your NFT

1. Review the transaction details, including the gas fees associated with the deposit. Make sure you have enough ETH in your Ethereum wallet to cover the fees. If everything looks correct, select **Deposit**.
   ![nft-deposit-8](../assets/nft-deposit-8.png)
2. When prompted, sign the transaction in your connected wallet.
3. Wait for the transaction to be confirmed by the network. Be patient, however, as transactions can take some time to complete, depending on network congestion and gas fees.
   ![nft-deposit-9](../assets/nft-deposit-9.png)

## Step 5. Receive the NFT in your Ronin Wallet

When the deposit is complete, you'll see a "Deposit completed" window.
![nft-deposit-10](../assets/nft-deposit-10.png)
You should be able to see the NFT in your Ronin Wallet, on the **NFTs** tab.
