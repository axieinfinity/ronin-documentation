---
description: List of most common questions
---

# Delegator FAQ
Here's a list of frequently asked questions.

### 1. What happens if my delegated validator is jailed or punished?
Your validator gets [slashed](./../validators/slashing/slashing.mdx), but your stake is not impacted in any way.

### 2. Do RON rewards automatically re-stake to my delegated validator?
No, you would need to [claim](./rewards/claim.mdx) RON rewards with your Ronin Wallet.

### 3. Can I unstake whenever I want without penalties and risk of losing my stake?
Yes, you can [unstake](./stake/withdraw.mdx) from a validator at any time without penalties as long as three days have passed since you last staked in to this validator.

### 4. If I delegate to a validator today, would I receive the reward by the end of day?
Each day's validator is finalized at 00:00 UTC. If you delegate today, your stake will take effect at 00:00 UTC the next day. This is the time you start earning rewards.

### 5 If I withdraw RON from one validator and delegate to another, when will I start earning rewards again?
In this case, we recommend moving your stake from one validator to another. This ensures your rewards are re-calculated from 00:00 UTC the next day. Otherwise, it takes about two days if you decide to withdraw then re-stake separately.

### 6. How do I know if my validator is renouncing?
You will receive a notification seven days before the validator's renunciation date.

### 7. How can I know if a validator is well-performing?
Look at the validator's uptime, APR, and total stake. An active node has high uptime, while an appealing interest rate means greater rewards. A large total stake also helps increase the chance this validator will be selected in the next days.
