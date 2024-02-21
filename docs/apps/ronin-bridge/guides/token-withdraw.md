---
description: Withdraw ERC20 tokens from Ronin Wallet to an Ethereum address using Ronin Bridge.
title: Withdraw an ERC20 token
---

## Overview

This guide describes how to use Ronin Bridge to send an ERC20 token from your Ronin Wallet to an Ethereum wallet. For information on supported Ethereum wallets and ERC20 tokens, see [Ronin Bridge](../overview.md).

## Prerequisites

If you access Ronin Bridge through the Ronin Wallet mobile app, then you can only connect Ethereum wallets imported into your Ronin Wallet beforehand. For more information, see [Importing Your MetaMask Wallet to Ronin Wallet](https://support.roninchain.com/hc/en-us/articles/14862812718107-Importing-Your-MetaMask-Wallet-to-Ronin-Wallet).

## Step 1. Fill in the details

1. Open the [Ronin Bridge](https://app.roninchain.com/bridge) app on the **Deposit** tab.
2. Switch to the **Withdraw** tab by selecting the button between the **From** and **To** fields.
   ![token-withdrawal-1](../assets/token-withdrawal-1.png)
3. In the **From** field, connect your Ronin Wallet using the browser extension or mobile app for your device.
   ![token-withdrawal-2](../assets/token-withdrawal-2.png)
4. In the **To** field, enter the Ethereum address that you want to transfer the token to. **Ronin Wallet mobile users:** You can enter any Ethereum address, but only your imported wallet will cover the gas fees for the transaction.
   ![token-withdrawal-3](../assets/token-withdrawal-3.png)

Double-check the recipient address to avoid sending your tokens to the wrong destination.

## Step 2. Choose the token and amount

:::note[Set your spending cap]
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
3. Select **Connect Wallet** and connect your Ethereum wallet.
   ![token-withdrawal-7](../assets/token-withdrawal-7.png)
4. Wait for the transaction to be confirmed by the network. Be patient, however, as transactions can take some time to complete, depending on network congestion and gas fees.
   ![token-withdrawal-8](../assets/token-withdrawal-8.png)
5. When the amount is ready to be withdrawn, select **Withdraw** to transfer the tokens to your Ethereum address.
   ![token-withdrawal-9](../assets/token-withdrawal-9.png)
6. When prompted, sign the transaction in your connected Ethereum wallet to receive the transfer.

## Step 4. Receive the token in your Ethereum wallet

When the withdrawal is complete, you'll see a "Withdrawal completed" window.
![token-withdrawal-10](../assets/token-withdrawal-10.png)
You can check your connected wallet to verify that the tokens have arrived successfully.
