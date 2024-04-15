---
description: List of frequently asked questions for validators.
title: Validator FAQ
---

import multisig from './assets/multisig.png';

## 1. How to increase the chance of getting selected as a Standard Validator? {#1}

The higher your total stake, the stronger your chance of becoming a Standard Validator because Ronin uses a Delegated Proof of Stake (DPoS) consensus mechanism. You can attract more delegators by promoting your validator and maintaining good performance.

## 2. If my self-stake exceeds the minimum staking amount, can I withdraw the extra amount? {#2}

Yes, you can withdraw as long as three days have passed since you last staked in. Make sure that the remaining amount after withdrawal is at least 250,000 RON.

## 3. What if my stake balance falls below the minimum staking amount? {#3}

You have *seven* days to deposit more RON to meet the minimum staking amount (250,000 RON), otherwise you will be renounced automatically.

## 4. What are the most important performance metrics for a validator? {#4}

Your uptime, total staking amount, and APR (annual percentage rate).

## 5. What are the rewards for a validator? {#5}

Validators receive fixed block rewards and transaction fees for producing blocks on Ronin.

## 6. How can I become a Governing Validator? {#6}

This is done by [submitting](./governance/proposals.mdx) a proposal. Any existing Governing Validator can propose to add another Governing Validator. If the proposal receives enough votes, the proposed validator becomes a Governing Validator.

## 7. How can I get support? {#7}

Join our [Discord](https://discord.gg/roninnetwork) after registering as a Validator Candidate, and look for "validator-" and "node-operators-" channels.

## 8. Should chain governor address be different from admin address? {#8}

We recommend using different governor and admin addresses to reduce the impact of leaks or losses to either account.

## 9. How to use a multisig wallet as a validator? {#9}

Using a multi-signature wallet can provide an additional layer of security when running your validator node.

The Validator Dashboard is supported in [Ronin Safe](https://multisig.roninchain.com)—
you can find it under the **Apps** tab.
After creating a safe, use your safe's address as an admin or governor address.
Each action with this safe's address requires multiple confirmations depending
on your safe's settings.

<img src={multisig} width={1280} />

## 10. Any recommendation for monitoring node's health? {#10}

Consider the following:

* Integrate with the [Ronin Network Status](https://stats.roninchain.com/) page
  for the overall status of the chain's node.
* For each node, the system publishes metrics on port `6060` for Prometheus
  collection. Integrate a Prometheus-Grafana stack for more granular monitoring
  of your node's health.

## 11. What ports (if any) have to be open to the outside world? {#11}

Keep public ports only for peering and discovery, otherwise keep it internal. Our `docker-compose` configuration already binds RPC port `8545` to `localhost`.

To implement additional security measures for your node, see
[Security hardening](./setup/security.md).
