---
description: Daily withdrawal limits per token on Ronin Bridge.
slug: /apps/ronin-bridge/withdrawal-limits
title: Withdrawal limits
---

Withdrawing funds through Ronin Bridge involves a *tiered system* based on the transaction value. The following table outlines the default daily limit per token for each tier:

|        | AXS       | WETH    | SLP           | USDC        | AGG |
| ------ | --------- | ------- | ------------- | ----------- | --- |
| Daily limit per token | Capped at 500,000 | Capped at 4,500 | Capped at 2,000,000,000 | Capped at 2,500,000 | Capped at 500,000,000 |
| Tier 1 | < 100,000 | < 1,000 | < 300,000,000 | < 1,000,000 | < 200,000,000 |
| Tier 2 | ≥ 100,000 | ≥ 1,000 | ≥ 300,000,000 | ≥ 1,000,000 | ≥ 200,000,000 |
| Tier 3\* | ≥ 400,000 | ≥ 4,000 | ≥ 1,500,000,000 | ≥ 2,000,000 | ≥ 800,000,000 |

\*Tier 3 transactions aren't counted toward the daily limit per token, because they require human review.

For Tier 1 transactions, 70% of validators need to approve automatically. Tier 2 requires 90% automated approval. Tier 3 requires both 90% automated approval and a manual review with a fee of around 0.001% of the transaction value.
