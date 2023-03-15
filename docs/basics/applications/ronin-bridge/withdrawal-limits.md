---
description: Withdrawal limits in Ronin Bridge
---

# Withrawal limits

Following this network upgrade, the withdrawal process will be segregated into new tiered methods corresponding to the overall value of the transaction. Below is the initial setting for Tier limits:

| #      | AXS       | WETH   | SLP            | USDC        |
|--------|-----------|--------|----------------|-------------|
| Tier 1 | < 71,429  | < 918  | < 273,972,602  | < 1,000,000 |
| Tier 2 | 71,429    | 918    | 273,972,602    | 1,000,000   |
| Tier 3 | 714,290   | 9,180  | 2,739,726,020  | 10,000,000  |
| Daily  | 3,571,450 | 45,900 | 13,698,630,100 | 50,000,000  |

**Requirements**

* Tier 1: Requires automated approval from 70% of validators.
* Tier 2: Requires automated approval from 90% of validators.
* Tier 3: Requires automated approval from 90% validators and also manual approval by the auditors.

For Tier 3 review, it will cost a fee (~0,001%) mainly to cover the fund for unlocking transaction.

## Daily withdrawal limits

We have also updated the software so that a total maximum withdrawal volume per day can be set. The initial value cap of $50M. Since a Tier 3 withdrawal already requires human review, it will not be counted in this daily withdrawal limit.