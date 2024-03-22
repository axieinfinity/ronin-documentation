---
description: Bridge NFTs from Ethereum to Ronin using Ronin Bridge.
slug: /apps/ronin-bridge/deposit-nft
title: Deposit an NFT
toc_max_heading_level: 2
---

## Overview

This guide describes how to use Ronin Bridge to send an NFT (non-fungible token) from your Ethereum address to your Ronin Wallet.

## Prerequisites

If you access Ronin Bridge on mobile, remember to import your Ethereum address to your mobile Ronin Wallet. To learn how to do that, see [Importing Your MetaMask Wallet to Ronin Wallet](https://support.roninchain.com/hc/en-us/articles/14862812718107-Importing-Your-MetaMask-Wallet-to-Ronin-Wallet).

## Step 1. Add the sender and recipient addresses

1. Go to [https://app.roninchain.com/bridge](https://app.roninchain.com/bridge), then select the **NFTs** tab.
   ![nft-deposit-0](../assets/nft-deposit-0.png)
2. In the **From** field, connect the Ethereum wallet that you want to bridge the NFT from.
   ![nft-deposit-1](../assets/nft-deposit-1.png)
3. In the **To** field, enter the Ronin address that you want to deposit the NFT into. You can also enter the RNS (Ronin Name Service) domain name linked to the address, such as "example.ron". Make sure to specify the *full RNS name* including the ".ron" part, so that the system can recognize the linked address.
   ![nft-deposit-2](../assets/nft-deposit-2.png)
   :::note[RNS integration]
   If the recipient address has an RNS name linked to it, the **To** field will automatically show the RNS name instead of the address.
   ![nft-deposit-rns](../assets/nft-deposit-rns.png)
   :::

## Step 2. Select the NFT to deposit

1. Choose the collection containing the NFTs you want to deposit.
   ![nft-deposit-3](../assets/nft-deposit-3.png)
2. In the collection, select the specific NFT.
   ![nft-deposit-4](../assets/nft-deposit-4.png)

## Step 3. Approve the NFT

To deposit an NFT, you need to grant Ronin Bridge permission to bridge it, which is also referred to as *approval*. You have two ways to do it: approve a single token or approve all tokens.

### Approve a single token

Approving a single token means that every time you bridge an NFT, you will need to approve each token individually. So when you bridge another token in the future, you will need to approve it again.

1. With the NFT selected, click **Approve NFT**.
   ![nft-deposit-5](../assets/nft-deposit-5.png)
2. Select **Single token**.
   ![nft-deposit-6](../assets/nft-deposit-6.png)
3. When prompted, sign the transaction in your connected wallet.

### Approve all tokens

Approving all tokens means that you only need to grant approval once, and your future NFT bridges will not require any approval.

1. Select the NFT you want to bridge, and then click **Approve NFT**.
   ![nft-deposit-5](../assets/nft-deposit-5.png)
2. Select **All tokens**.
   ![nft-deposit-7](../assets/nft-deposit-7.png)
3. When prompted, sign the transaction in your connected wallet.

You can revoke token approval by using the [Token Revoke](https://ronin.axiedao.org/revoke/) tool.

## Step 4. Confirm your deposit

1. Review the transaction details, including the gas fees associated with the deposit. Make sure you have enough ETH in your Ethereum wallet to pay gas. If everything looks correct, select **Deposit**.
   ![nft-deposit-8](../assets/nft-deposit-8.png)
2. When prompted, sign the transaction in your connected wallet.
3. Wait for the transaction to be confirmed by the network. Be patient, however, as transactions can take some time to complete, depending on network congestion and gas fees.
   ![nft-deposit-9](../assets/nft-deposit-9.png)

## Step 5. Receive the NFT in your Ronin Wallet

When the deposit is complete, you'll see a "Deposit completed" window.
![nft-deposit-10](../assets/nft-deposit-10.png)
You should be able to see the NFT in your Ronin Wallet, on the **NFTs** tab.
