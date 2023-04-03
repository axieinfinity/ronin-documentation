---
title: Bridge
description: Transfer tokens between Ethereum and Ronin.
---

# Ronin Bridge
## Overview
Ronin Bridge is an app used to transfer tokens between the Ethereum and Ronin chains. This is is a multi-signature (multi-sig) bridge, which means that it requires approval from multiple bridge operators before a transaction can be executed. Multi-sig improves the security and trustworthiness of cross-chain transactions, and makes it harder for any single party to act maliciously or make unauthorized changes to the transaction.

Link: [https://bridge.roninchain.com](https://bridge.roninchain.com)

## Withdrawal limits
The withdrawal process on Ronin Bridge is segregated into tiered methods corresponding to the overall value of the transaction. 

The following table provides the initial setting for tier limits.

| #      | AXS       | WETH   | SLP            | USDC        | % of approval |
|--------|-----------|--------|----------------|-------------|---------------|
| Tier 1 | < 71,429  | < 918  | < 273,972,602  | < 1,000,000 | 70%           |
| Tier 2 | 71,429    | 918    | 273,972,602    | 1,000,000   | 90%           |
| Tier 3 | 714,290   | 9,180  | 2,739,726,020  | 10,000,000  | 90%           |
| Daily  | 3,571,450 | 45,900 | 13,698,630,100 | 50,000,000  |               |

Requirements:

* Tier 1: Requires automated approval from 70% of validators.
* Tier 2: Requires automated approval from 90% of validators.
* Tier 3: Requires automated approval from 90% validators and also manual approval by the auditors.

For Tier 3 review, a fee (~0,001%) is charged for unlocking a transaction.

### Daily withdrawal limit
We also limit the total withdrawal volume of Tier 1 and Tier 2 withdrawals. The initial daily withdrawal limit is set as $50M. 

:::note
Because Tier 3 withdrawals go through a review by real humans, they're not counted toward the daily withdrawal limit.
:::
