---
title: Slashing for bridge operators
sidebar_label: Slashing rules
description: List of slashing rules applicable to bridge operators. 
---

import bridgeSlashTierOne from './assets/bridge-tier-1.png';
import bridgeSlashTierTwo from './assets/bridge-tier-2.png';

## Overview

Slashing is a mechanism that governs the behavior of validators and bridge operators on
the Ronin blockchain. This page describes the slashing rules for bridge operators.

:::note
A "day" in the slashing rules refers to the period
from midnight to midnight UTC.
:::

## Unavailability bridge operator

The system slashes bridge operators for not providing enough signatures.
This is checked against a smart contract that records the
number of the bridge operators' votes.

### Tier 1 operator slashing

If a bridge operator misses more than 10% votes in a day,
the operator doesn't earn the bridge rewards on that day.
The operator's status is set to **Punished**.

<img src={bridgeSlashTierOne} width={1224} />

### Tier 2 operator slashing

If a bridge operator misses more than 30% votes in a day, the operator doesn't earn the bridge rewards for the next five days.
The operator's status is set to **Punished**.

<img src={bridgeSlashTierTwo} width={1224} />

### Penalty stacking

If a penalized operator is slashed again, their penalty is stacked. For example, if an operator gets tier-2 slashed on day 1, it will be penalized until day 5. Then, if the operator gets tier-1 slashed on day 2, it will be penalized until day 6. Finally, if the operator gets tier-2 slashed on day 4, it will be penalized until day 11.

If an operator gets penalized for 20 days (for example, at day 100, it's penalized until day 120), it will be removed from the operator set.

## See also

[Slashing for validators](./../validators/slashing.mdx)
