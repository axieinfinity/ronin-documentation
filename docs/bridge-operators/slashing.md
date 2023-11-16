---
title: Slashing for bridge operators
sidebar_label: Slashing rules
description: List of slashing rules applicable to bridge operators. 
---

import bridSlashTierOne from './assets/bridge-tier-1.png';
import bridSlashTierTwo from './assets/bridge-tier-2.png';

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
the operator doesn't earn the bridge reward on that day.
The operator's status is set to **Punished**.

<img src={bridSlashTierOne} width={1224} />

### Tier 2 operator slashing

If a bridge operator misses more than 30% votes in a day, the operator doesn't
earn any rewards for the next 5 days.
The operator's status is set to **Punished**.

<img src={bridSlashTierTwo} width={1224} />

## See also

* [Slashing for validators](./../validators/slashing.mdx)
