---
description: Withdrawal limits in Ronin Bridge
---

# Withrawal limits
The withdrawal process is segregated into tiered methods corresponding to the overall value of the transaction. 

Here's the initial setting for tier limits:

| #      | AXS       | WETH   | SLP            | USDC        | % of approval |
|--------|-----------|--------|----------------|-------------|---------------|
| Tier 1 | < 71,429  | < 918  | < 273,972,602  | < 1,000,000 | 70%           |
| Tier 2 | 71,429    | 918    | 273,972,602    | 1,000,000   | 80%           |
| Tier 3 | 714,290   | 9,180  | 2,739,726,020  | 10,000,000  | 90%           |
| Daily  | 3,571,450 | 45,900 | 13,698,630,100 | 50,000,000  |               |

Requirements:

* Tier 1: Requires automated approval from 70% of validators.
* Tier 2: Requires automated approval from 90% of validators.
* Tier 3: Requires automated approval from 90% validators and also manual approval by the auditors.

For Tier 3 review, a fee (~0,001%) is charged for unlocking a transaction.

## Daily withdrawal limit
We also limit the total withdrawal volume of Tier 1 and Tier 2 withdrawals. The initial daily withdrawal limit is set as $50M. 

:::note
Because Tier 3 withdrawals go through human review, they're not counted toward the daily withdrawal limit.
:::
