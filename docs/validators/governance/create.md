---
description: How to create a proposal on Ronin
---

import stepOne from './assets/proposal-step-1.png';
import stepTwo from './assets/proposal-step-2.png';
import stepThree from './assets/proposal-step-3.png';
import stepFour from './assets/proposal-step-4.png';

# Create a proposal
This guide explains how to create a proposal. On Ronin, some proposals can be created via the validator portal, while others require that you run a script. 

The validator portal enables you to create the following proposals:
* Add a new Governing Validator.
* Remove a Governing Validator.
* Update the Chain Governor address.
* Update the Bridge Voter address.
* Change the bridge limit for tier 1.
* Change the bridge limit for tier 2.
* Change the bridge limit for tier 3.

For demonstration, this guide uses the example of a proposal for adding a new Governing Validator.

## Prerequisites

Make sure that the Governing Validator you're adding already registered as a Validator Candidate.

## Create and submit a proposal

1. Log in to the [validator portal](https://saigon-staking.roninchain.com) using your Chain Governor address—the specific identifier of a Governing Validator. You can then see your role at the top right corner.

<img src={stepOne} width={1280} />

2. Select **Proposals > Add a proposal** .

<img src={stepTwo} width={1280} />

:::info

There can be only one ongoing (active) proposal at a time. If you see another ongoing proposal, you need to wait until that proposal is closed.
If a proposal doesn't get enough votes within 14 days, it's closed automatically.

:::

3. Select the type of proposal you want to create. In this example, it's **Add new governing validator(s)**.

<img src={stepThree} width={550} />

1. Provide the three addresses of the validator.

<img src={stepFour} width={497} />

5. Sign the transaction to submit the proposal.

Your proposal is now active, and will remain as such for the next 14 days or until voted on by enough Governing Validators.
