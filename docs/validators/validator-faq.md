---
description: List of frequently asked questions for validators.
title: Validator FAQ
tags:
- decoupling
---

import multisig from './assets/multisig.png';

## 1. What should I do after registering as a Validator Candidate? {#1}

After [becoming](onboarding/become-validator.mdx) a Validator Candidate, there’s a chance that you get selected as a Standard Validator the next day. To avoid slashing, you need to make sure that your nodes are online and up to date, and the balance in your bridge operator node must be a minimum of 100 RON.

## 2. How to increase the chance of getting selected as a Standard Validator? {#2}

The higher your total stake, the stronger your chance of becoming a Standard Validator because Ronin uses a Delegated Proof of Stake (DPoS) consensus mechanism. You can attract more delegators by promoting your validator and maintaining good performance.

## 3. If my self-stake exceeds the minimum staking amount, can I withdraw the extra amount? {#3}

Yes, you can withdraw as long as three days have passed since you last staked in. Make sure that the remaining amount after withdrawal is at least 250,000 RON.

## 4. What if my stake balance falls below the minimum staking amount? {#4}

You have *seven* days to deposit more RON to meet the minimum staking amount (250,000 RON), otherwise you will be renounced automatically.

## 5. What are the most important performance metrics for a validator? {#5}

Your uptime, total staking amount, and APR (annual percentage rate).

## 6. What are the rewards for a validator? {#6}

Validators receive fixed block reward and transaction fees for producing blocks on Ronin. During the first year, validators also earn bridge rewards.

## 7. How can I become a Governing Validator? {#7}

This is done by [submitting](./governance/create-proposal.mdx) a proposal. Any existing Governing Validator can propose to add another Governing Validator. If the proposal receives enough votes, the proposed validator becomes a Governing Validator.

## 8. How can I get support? {#8}

Join our [Discord](https://discord.gg/roninnetwork) after registering as a Validator Candidate, and look for "validator-" and "node-operators-" channels.

## 9. Should chain governor address be different from admin address? {#9}

We recommend using different governor and admin addresses to reduce the impact of leaks or losses to either account.

## 10. How to use a multisig wallet as a validator? {#10}

Using a multi-signature wallet can provide an additional layer of security when running your validator node.

The Validator Dashboard is supported in [Ronin Safe](https://multisig.roninchain.com)—
you can find it under the **Apps** tab.
After creating a safe, use your safe's address as an admin or governor address.
Each action with this safe's address requires multiple confirmations depending
on your safe's settings.

<img src={multisig} width={1280} />

## 11. Any recommendation for monitoring node's health? {#11}

Consider the following:

* Integrate with the [Ronin Network Status](https://stats.roninchain.com/) page
  for the overall status of the chain's node.
* For each node, the system publishes metrics on port `6060` for Prometheus
  collection. Integrate a Prometheus-Grafana stack for more granular monitoring
  of your node's health.

## 12. What ports (if any) have to be open to the outside world? {#12}

Keep public ports only for peering and discovery, otherwise keep it internal. Our `docker-compose` configuration already binds RPC port `8545` to `localhost`.

To implement additional security measures for your node, see
[Security hardening](./setup/security.md).
