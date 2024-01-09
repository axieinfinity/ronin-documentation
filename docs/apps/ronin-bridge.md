---
title: Ronin Bridge
description: A dApp for transferring tokens between Ethereum and Ronin.
---

## Overview

Ronin Bridge is an app for transferring tokens between the Ethereum chain and Ronin. It's a multi-signature bridge, which means that multiple bridge operators must approve a transaction before it can be executed. Multi-sig improves the security and trustworthiness of cross-chain transactions, and prevents any single party from acting maliciously or making unauthorized changes to the transaction.

Link: [https://bridge.roninchain.com](https://bridge.roninchain.com).

## Withdrawal tier limits

Withdrawing funds from Ronin Bridge involves a tiered system based on the transaction value. The following table outlines the default daily limit per token for each tier:

|        | AXS       | WETH    | SLP           | USDC        | AGG |
| ------ | --------- | ------- | ------------- | ----------- | --- |
| Daily limit per token | Capped at 500,000 | Capped at 4,500 | Capped at 2,000,000,000 | Capped at 2,500,000 | Capped at 500,000,000 |
| Tier 1 | $<$ 100,000 | $<$ 1,000 | $<$ 300,000,000 | $<$ 1,000,000 | $<$ 200,000,000 |
| Tier 2 | $\geq$ 100,000 | $\geq$ 1,000 | $\geq$ 300,000,000 | $\geq$ 1,000,000 | $\geq$ 200,000,000 |
| Tier 3\* | $\geq$ 400,000 | $\geq$ 4,000 | $\geq$ 1,500,000,000 | $\geq$ 2,000,000 | $\geq$ 800,000,000 |

\*Tier 3 transactions aren't counted toward the daily limit per token, because they require human review.

For Tier 1 transactions, 70% of validators need to approve automatically. Tier 2 requires 90% automated approval. Tier 3 requires both 90% automated approval and a manual review with a fee of around 0.001% of the transaction value.
