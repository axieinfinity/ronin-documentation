---
description: On-chain governance overview for bridge operators.
title: Overview
---

## Bridge operator governance

Ronin's governance process is conducted via a decentralized voting
mechanism. Each bridge operator has a corresponding bridge operator
address. 

Bridge operators can propose and vote on the following types of changes:

* Pause the bridge
* Add bridge operators
* Remove bridge operators

First, a bridge operator [creates](./create-proposal.md) a new proposal
for other operators to [vote](./overview.md) on. If at least 70% of the
operators approve the proposal, the change is applied.

The governance voting method is serial by design: only one governance
vote can be held at a time, and that vote must be completed before moving
to a new vote. 
