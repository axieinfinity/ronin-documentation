---
description: List of frequently asked questions.
---

# Delegator FAQ
Here's a list of frequently asked questions.

### 1. What if my delegated validator is jailed or punished? {#1}
You do not receive the rewards while your validator is [slashed](./../validators/slashing/slashing.mdx), but your stake is not impacted in any way.

### 2. Do RON rewards automatically re-stake to my validator? {#2}
No, you would need to [claim](./rewards/claim.mdx) RON rewards with your Ronin Wallet.

### 3. Can I unstake whenever I want without any penalties and risk? {#3}
Yes, you can [unstake](./stake/withdraw.mdx) from a validator at any time without penalties as long as three days have passed since you last staked in to this validator.

### 4. If I delegate to a validator today, would I receive the reward by the end of day? {#4}
Each day's validator is finalized at 00:00 UTC. If you delegate today, your stake will take effect at 00:00 UTC the next day. This is the time you start earning rewards.

### 5. If I move RON from one validator to another, when will I start earning rewards again? {#5}
The stake delegated for the new validator will start emitting rewards from 00:00 UTC the next day, while the stake for the current validator is removed, so there would be no rewards today.

### 6. How do I know if my validator is renouncing? {#6}
You will receive a notification seven days before the validator's renunciation date. For more ways to keep track of your validators, see [Track validators](./manage/track.mdx).

### 7. How can I know if a validator is well-performing? {#7}
Look at the validator's uptime, APR, and total stake. An active node has high uptime, while an appealing interest rate means greater rewards. A large total stake also helps increase the chance this validator will be selected in the next days.
