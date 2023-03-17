---
description: How to create a proposal as a Governing Validator
---

import stepOne from './assets/governing-label.png';
import stepTwo from './assets/add-proposal.png';
import stepThree from './assets/select-proposal-type.png';
import stepFour from './assets/fill-in-details.png';

# Create a proposal
This guide explains how to create a proposal. 

There are two ways to create proposals on Ronin: by using the governance dashboard or by running a script. 

Following are the proposals that can be created via governance dashboard:
* Add a new Governing Validator
* Remove a Governing Validator
* Update the Chain Governor address
* Update the Bridge Voter address
* TBU

The example used here is a proposal for adding a new Governing Validator created using the governance dashboard.

## Prerequisites
Make sure that the prospective Governing Validator already registered as a Validator Candidate.

## Create and submit a proposal

1. Log in to the [validator portal](https://saigon-staking.roninchain.com) using your Chain Governor address—the identifier of a Governing Validator. If you see your role at the top right corner, then you used the correct address.

<img src={stepOne} width={1280} />

2. Select **Proposals > Add a proposal**.

<img src={stepTwo} width={1280} />

:::info

There can be only one ongoing (active) proposal at a time. If you see another ongoing proposal, you need to wait until that proposal is closed.
If a proposal doesn't get enough votes within 14 days, it's closed automatically.

:::

3. Select the type of proposal you want to create. In this example, it's **Add new governing validator(s)**.

<img src={stepThree} width={550} />

4. Provide the three addresses of the validator.

<img src={stepFour} width={497} />

5. Sign the transaction to submit the proposal.

Your proposal is now displayed on the **Ongoing** tab, and will remain active for the next 14 days or until voted on by [enough](vote.md) Governing Validators.
