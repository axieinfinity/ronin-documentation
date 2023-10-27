---
description: List of frequently asked questions.
title: Validator FAQ
tags:
- decoupling
---

import multisig from './assets/multisig.png';

## Overview

Here's a list of frequently asked questions.

### 1. What should I do after registering as a Validator Candidate? {#1}
After [becoming](onboarding/become-validator.mdx) a Validator Candidate, there’s a chance that you get selected as a Standard Validator the next day. To avoid slashing, you need to make sure that your nodes are online and up to date, and the balance in your bridge operator node must be a minimum of 100 RON.

### 2. How to increase the chance of getting selected as a Standard Validator? {#2}
The higher your total stake, the stronger your chance of becoming a Standard Validator because Ronin uses a Delegated Proof of Stake (DPoS) consensus mechanism. You can attract more delegators by promoting your validator and maintaining good performance.

### 3. If my self-stake exceeds the minimum staking amount, can I withdraw the extra amount? {#3}
Yes, you can withdraw as long as three days have passed since you last staked in. Make sure that the remaining amount after withdrawal is at least 250,000 RON.

### 4. What if my stake balance falls below the minimum staking amount? {#4}
You have *seven* days to deposit more RON to meet the minimum staking amount (250,000 RON), otherwise you will be renounced automatically.

### 5. What are the most important performance metrics for a validator? {#5}
Your uptime, total staking amount, and APR (annual percentage rate).

### 6. What are the rewards for a validator? {#6}
Validators receive fixed block reward and transaction fees for producing blocks on Ronin. During the first year, validators also earn bridge rewards.

### 7. How can I become a Governing Validator? {#7}
This is done by [submitting](governance/create.mdx) a proposal. Any existing Governing Validator can propose to add another Governing Validator. If the proposal receives enough votes, the proposed validator becomes a Governing Validator.

### 8. How can I get support? {#8}
Join our [Discord](https://discord.gg/roninnetwork) after registering as a Validator Candidate, and look for "validator-" and "node-operators-" channels.

### 9. How do I know if my validator node is working? {#9}

After starting the validator node, run the following command:

```
docker-compose logs node | head -n 20
```

Verify that the account address in the response matches your registered consensus address.

```
node       | Using account acf8bf98d1632e602d0b1761771049af21dd6597
```

Also, check the node's availability on
[Ronin Network Status](https://stats.roninchain.com/).

### 10. How do I know if my bridge operator node is working? {#10}

After starting the bridge, run the following command:

```
docker-compose logs bridge | head -n 20
```

Verify that the operator account address in the response matches your registered
bridge operator address. If you're a Governing Validator, also check that the
voter account address matches the registered bridge voter address.

```
bridge     | INFO [03-22|07:59:10.368] [RoninListener] Operator account         address=0x2e82D2b56f858f79DeeF11B160bFC4631873da2B
bridge     | INFO [03-22|07:59:10.368] [RoninListener] Voter account            address=0x2295EdAA6BD5c07fB3227628c62Af12248106667
```

Also, check the node's availability on
[Ronin Network Status](https://stats.roninchain.com/).

### 11. How do I generate the required private keys? {#11}

See [Generate keys](./setup/generate-keys.md).

### 12. Should chain governor address be different from admin address? {#12}

We recommend using different governor and admin addresses to reduce the impact of leaks or losses to either account.

### 13. How to use a multisig wallet as a validator? {#13}

Using a multi-signature wallet can provide an additional layer of security when running your validator node.

The Validator Dashboard is supported in [Ronin Safe](https://multisig.roninchain.com)—
you can find it under the **Apps** tab.
After creating a safe, use your safe's address as an admin or governor address.
Each action with this safe's address requires multiple confirmations depending
on your safe's settings.

<img src={multisig} width={1280} />

### 14. Any recommendation for monitoring node's health? {#14}

Consider the following:

* Integrate with the [Ronin Network Status](https://stats.roninchain.com/) page
  for the overall status of the chain's node.
* For each node, the system publishes metrics on port `6060` for Prometheus
  collection. Integrate a Prometheus-Grafana stack for more granular monitoring
  of your node's health.

### 15. What ports (if any) have to be open to the outside world? {#15}

Keep public ports only for peering and discovery, otherwise keep it internal. Our `docker-compose` configuration already binds RPC port `8545` to `localhost`.

To implement additional security measures for your node, see
[Security hardening](./setup/security.md).

### 16. If there is a node or bridge upgrade, how do I get this information? {#16}

Latest version of Ronin and its changelog are always available on
[GitHub](https://github.com/axieinfinity/ronin/releases). A good way to keep
track of upgrades is to join our [Discord](https://discord.gg/roninnetwork).

To upgrade your node, see [Upgrade validator version](./setup/upgrade-validator.md) and [Upgrade bridge operator version](./../bridge-operators/setup/upgrade-bridge.md).

### 17. How much time do I have to upgrade my nodes? {#17}

Upgrades are usually backwards-compatible. It can contain performance
improvements, bug fixes or new features. It's recommended that every node is
upgraded as soon as possible.

An upgrade, however, can also be a hardfork, which is usually not
backwards-compatible. If your node fails to upgrade before a hardfork block
occurs, the data on your node can differ from that on the network. Therefore,
it's critical to upgrade your node before a hardfork occurs. All Ronin-planned
hardforks are announced seven days in advance on our
[Discord](https://discord.gg/roninnetwork) and
[Ronin Newsletter](https://roninblockchain.substack.com/).
