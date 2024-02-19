---
description: Deposit ERC20 tokens from a compatible Ethereum wallet into Ronin Wallet using Ronin Bridge.
title: Deposit ERC20 tokens
---

## Overview

This guide describes how to deposit an ERC20 token from your Ethereum wallet into your address on the Ronin chain. The supported tokens include ETH, AXS, SLP, USDC, AGG, and АЕС.

## Prerequisites

If you access Ronin Bridge through the Ronin Wallet mobile app, then you can only connect Ethereum wallets that were imported into Ronin Wallet beforehand. For more information, see [Importing Your MetaMask Wallet to Ronin Wallet](https://support.roninchain.com/hc/en-us/articles/14862812718107-Importing-Your-MetaMask-Wallet-to-Ronin-Wallet).

## Step 1. Fill in the details

1. Open the [Ronin Bridge](https://app.roninchain.com/bridge) app and select the **Deposit** tab.
2. In the **From** field, connect the Ethereum wallet that you want to transfer the token from. In the mobile Ronin Wallet app, select your imported Ethereum wallet.

   <details>
      <summary>
        How to connect your imported Ethereum wallet in the Ronin Wallet mobile app
      </summary>
      <ol>
      <li>On the **Deposit** tab, select **From**.</li>
      <li>Select the multichain Ronin Mobile 2.0.</li>
      <li>Confirm the network switch to Ethereum.</li>
      <li>Open the network switch menu.</li>
      <li>Select the correct Ethereum address that you want to deposit from. In this example, it's an imported Metamask wallet.</li>
      <li>The address appears in the **From** field.</li>
      </ol>
      <div>![ronin-wallet-mobile-deposit](../assets/ronin-wallet-mobile-deposit.png)</div>
   </details>

   ![token-deposit-1](../assets/token-deposit-1.png)

3. In the **To** field, enter the Ronin address or RNS name that you want to deposit the token into. Note that for RNS names, you need to enter the complete name, such as "example.ron."

   ![token-deposit-2](../assets/token-deposit-2.png)

## Step 2. Choose the token and amount

Choose the ERC20 token that you want to deposit, then enter the amount manually or select **Max** to transfer the entire balance of this token available in your connected wallet.

![token-deposit-3](../assets/token-deposit-3.png)

## Step 3. Confirm the deposit

1. Review the transaction details, including the gas fees associated with the deposit. Make sure you have enough ETH in your Ethereum wallet to cover the fees. If everything looks correct, select **Deposit**.
   ![token-deposit-4](../assets/token-deposit-4.png)

2. When prompted, sign the transaction in your connected wallet.
3. Wait for the transaction to be confirmed by the network. Be patient, however, as transactions can take some time to complete, depending on network congestion and gas fees.

   ![token-deposit-5](../assets/token-deposit-5.png)

## Step 4. Receive your tokens in Ronin Wallet

When the deposit is complete, you'll see a "Deposit completed" window.

![token-deposit-6](../assets/token-deposit-6.png)

You should be able to see the deposited amount in your Ronin Wallet, on the **Funds** tab in the browser extension, or the **Tokens** tab in the mobile app.
