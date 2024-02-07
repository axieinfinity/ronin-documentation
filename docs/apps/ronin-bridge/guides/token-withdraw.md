---
description: Withdraw ERC20 tokens from Ronin Wallet to an Ethereum address using Ronin Bridge.
title: Withdraw ERC20 tokens
---

## Overview

This guide describes how to withdraw an ERC20 token from your Ronin Wallet to an address on Ethereum. The supported tokens include WETH, AXS, SLP, USDC, AGG, and АЕС.

## Prerequisites

* An address on Ronin and the [Ronin Wallet](https://wallet.roninchain.com) extension or mobile app.
* An address on Ethereum and a wallet linked to it, such as [Metamask](https://metamask.io/) or [Trust Wallet](https://trustwallet.com/).

## Step 1. Fill in the details

1. Open the [Ronin Bridge](https://app.roninchain.com/bridge) app on the **Deposit** tab.
2. Switch to the **Withdraw** tab by selecting the button between the **From** and **To** fields.

   ![token-withdrawal-1](../assets/token-withdrawal-1.png)

3. In the **From** field, connect your Ronin Wallet using the browser extension or mobile app for your device.

   ![token-withdrawal-2](../assets/token-withdrawal-2.png)

4. In the **To** field, enter the Ethereum address that you want to transfer the token to.

   :::info[Ronin Wallet mobile app]
   Ronin Wallet mobile app users: While you can specify any Ethereum address as the recipient, only your imported wallet will cover the gas fees for the transaction. For details on importing wallets, see [Importing Your MetaMask Wallet to Ronin Wallet](https://support.roninchain.com/hc/en-us/articles/14862812718107-Importing-Your-MetaMask-Wallet-to-Ronin-Wallet).
   :::

   ![token-withdrawal-3](../assets/token-withdrawal-3.png)

Double-check the recipient address to avoid sending your tokens to the wrong destination.

## Step 2. Choose the token and amount

:::info
First-time bridging ERC20 tokens requires setting a spending cap, initially set to zero. Enter your desired bridging amount, and approve the corresponding spending cap.

For future bridgings exceeding your current cap, re-approval is needed to update the limit.

Remember, the cap can't exceed your wallet's token balance.
:::

1. Choose the ERC20 token that you want to withdraw, then enter the withdrawal amount manually or select **Max** to withdraw the entire balance of this token available in your wallet.

   ![token-withdrawal-4](../assets/token-withdrawal-4.png)

2. When prompted, select **Approve** to approve the new spending cap for the selected token.

   ![token-withdrawal-5](../assets/token-withdrawal-5.png)

3. When prompted, sign the transaction in your Ronin Wallet.

## Step 3. Confirm the withdrawal

1. Review the transaction details, including the gas fees associated with the withdrawal. Make sure you have enough ETH in your Ethereum wallet to cover the fees. If everything looks correct, select **Submit withdrawal**.

   ![token-withdrawal-6](../assets/token-withdrawal-6.png)

2. When prompted, sign the transaction in your Ronin Wallet.
3. Select **Connect Wallet** and connect your wallet that's linked to the recipient address.

   ![token-withdrawal-7](../assets/token-withdrawal-7.png)

4. Wait for the transaction to be confirmed by the network. Be patient, however, as transactions can take some time to complete, depending on network congestion and gas fees.

   ![token-withdrawal-8](../assets/token-withdrawal-8.png)

5. When the amount is ready to be withdrawn, select **Withdraw** to transfer the tokens to your Ethereum address.

   ![token-withdrawal-9](../assets/token-withdrawal-9.png)

6. When prompted, sign the transaction in your connected Ethereum wallet to receive the transfer.

## Step 4. Receive your tokens on Ethereum

When the withdrawal is complete, you'll see a "Withdrawal completed" window.

![token-withdrawal-10](../assets/token-withdrawal-10.png)

You can check your connected wallet to verify that the tokens have arrived successfully.
