---
description: Withdraw NFTs from Ronin Wallet to an Ethereum address using Ronin Bridge.
title: Withdraw NFTs
---

## Overview

This guide describes how to withdraw an NFT (non-fungible token) from your Ronin Wallet to an address on Ethereum. The supported NFT collections include Pixels FarmLand, Cyberkongz VX, and Cyberkongz Genkai.

## Prerequisites

If you access Ronin Bridge through the Ronin Wallet mobile app, then you can only connect Ethereum wallets that were imported into Ronin Wallet beforehand. For more information, see [Importing Your MetaMask Wallet to Ronin Wallet](https://support.roninchain.com/hc/en-us/articles/14862812718107-Importing-Your-MetaMask-Wallet-to-Ronin-Wallet).

## Step 1. Fill in the details

1. Open the [Ronin Bridge](https://app.roninchain.com/bridge) app on the **Deposit NFTs** tab.
2. Switch to the **Withdraw NFTs** tab by selecting the button between the **From** and **To** fields.

   ![nft-withdrawal-1](../assets/nft-withdrawal-1.png)

3. In the **From** field, connect your Ronin Wallet using the browser extension or mobile app for your device.

   ![nft-withdrawal-2](../assets/nft-withdrawal-2.png)

4. In the **To** field, enter the Ethereum address that you want to transfer the NFT to. **Note:** In the mobile Ronin Wallet app, you can enter any Ethereum address, but only your imported wallet will cover the gas fees for the transaction.

   ![nft-withdrawal-3](../assets/nft-withdrawal-3.png)

Double-check the recipient address to avoid sending your NFT to the wrong destination.

## Step 2. Select the NFT to withdraw

1. Choose the collection containing the NFTs you want to withdraw.

   ![nft-withdrawal-4](../assets/nft-withdrawal-4.png)

2. In the collection, select the specific NFT.

   ![nft-withdrawal-5](../assets/nft-withdrawal-5.png)

## Step 3. Authorize the bridge to transfer your NFT

To withdraw an NFT, you need to grant Ronin Bridge permission to transfer it, which is also referred to as *approval*. You have two ways to do it: approve a single token or approve all tokens.

### Approve a single token

You can choose to grant permission to each individual NFT that you transfer:

1. With the NFT selected, click **Approve NFT**.

   ![nft-withdrawal-6](../assets/nft-withdrawal-6.png)

2. Select **Single token**.

   ![nft-withdrawal-7](../assets/nft-withdrawal-7.png)

When you make another transfer in the future, you will need to approve it again.

### Approve all tokens

Alternatively, grant access to all your tokens at once to bypass the single token approval step in the future:

1. Select the NFT you want to transfer, then click **Approve NFT**.

   ![nft-withdrawal-6](../assets/nft-withdrawal-6.png)

2. Select **All tokens**.

   ![nft-withdrawal-8](../assets/nft-withdrawal-8.png)

This way, your future transfers will not require approvals.

## Step 4. Withdraw your NFT

1. Review the transaction details, including the gas fees associated with the withdrawal. Make sure you have enough ETH in your Ethereum wallet to cover the fees. If everything looks correct, select **Submit withdrawal**.

   ![nft-withdrawal-10](../assets/nft-withdrawal-10.png)

2. When prompted, sign the transaction in your Ronin Wallet.
3. Select **Connect Wallet** and connect your Ethereum wallet.

   <details>
      <summary>
        How to withdraw to your Ethereum wallet in the Ronin Wallet mobile app
      </summary>
      You have two options of paying the gas fees. One option is to pay directly using your imported wallet. The other option is to copy the transaction hash, open it in your browser, and connect any other Ethereum account to pay the fees.

      To pay using another wallet, follow these steps:
      <ol>
      <li>Select the icon to copy the transaction hash.</li>
      <li>Paste the link in your browser, select **Withdraw**, and then connect your other Ethereum wallet to pay the fees.</li>
      </ol>
      <div>![ronin-wallet-mobile-withdrawal-external](../assets/ronin-wallet-mobile-withdrawal-external.png)</div>

      To pay using your imported wallet, follow these steps:
      <ol>
      <li>Select ***Connect Wallet***.</li>
      <li>Select the multichain Ronin Mobile 2.0.</li>
      <li>Confirm the network switch to Ethereum.</li>
      <li>Select **Withdraw**.</li>
      </ol>
      <div>![ronin-wallet-mobile-withdrawal](../assets/ronin-wallet-mobile-withdrawal.png)</div>
   </details>

4. Wait for the transaction to be confirmed by the network. Be patient, however, as transactions can take some time to complete, depending on network congestion and gas fees.

   ![nft-withdrawal-11](../assets/nft-withdrawal-11.png)

5. When the NFT is ready to be withdrawn, select **Withdraw** to transfer it to your Ethereum address.

   ![nft-withdrawal-12](../assets/nft-withdrawal-12.png)

6. When prompted, sign the transaction in your connected Ethereum wallet to receive the transfer.

## Step 5. Receive your NFT on Ethereum

When the withdrawal is complete, you'll see a "Withdrawal completed" window.

![nft-withdrawal-13](../assets/nft-withdrawal-13.png)

You can check your connected wallet to verify that the NFT has arrived successfully.
