---
title: Bridge
description: Transfer tokens between Ethereum and Ronin.
---

## Overview

Ronin Bridge is an app used to transfer tokens between the Ethereum and Ronin chains. This is a multi-signature (multi-sig) bridge, which means that it requires approval from multiple bridge operators before a transaction can be executed. Multi-sig improves the security and trustworthiness of cross-chain transactions, and makes it harder for any single party to act maliciously or make unauthorized changes to the transaction.

Link: [https://bridge.roninchain.com](https://bridge.roninchain.com).

## Withdrawal limits

The withdrawal process on Ronin Bridge is segregated into tiered methods corresponding to the overall value of the transaction.

The following table provides the initial setting for tier limits.

|        | AXS       | WETH    | SLP           | USDC        |
| ------ | --------- | ------- | ------------- | ----------- |
| Tier 1 | < 100,000 | < 1,000 | < 300,000,000 | < 1,000,000 |
| Tier 2 | 100,000   | 1,000   | 300,000,000   | 1,000,000   |
| Tier 3 | 400,000   | 4,000   | 1,500,000,000 | 2,000,000   |
| Daily  | 500,000   | 4,500   | 2,000,000,000 | 2,500,000   |

Requirements:

* Tier 1: Requires automated approval from 70% of validators.
* Tier 2: Requires automated approval from 90% of validators.
* Tier 3: Requires automated approval from 90% validators and also manual approval by the reviewers.

For Tier 3 review, a fee ($\approx$ 0,001%) is charged for unlocking a transaction.

### Daily withdrawal limit

We also limit the total withdrawal volume of Tier 1 and Tier 2 withdrawals. The initial daily withdrawal limit is set as $50M. 

:::note
Because Tier 3 withdrawals go through a review by real humans, they're not counted toward the daily withdrawal limit.
:::
