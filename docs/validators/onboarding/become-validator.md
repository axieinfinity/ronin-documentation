---
description: Get started as a validator on Ronin
---

import becomeValidator from './assets/become-validator.png';
import stepOne from './assets/onboarding-step-1.png'
import stepTwo from './assets/onboarding-step-2.png'
import stepThree from './assets/onboarding-step-3.png'
import stepFour from './assets/onboarding-step-4.png'
import stepFive from './assets/onboarding-step-5.png'

# Become a validator

This page explains how to become a validator on the Ronin network.

## Validator roles

There are three validator roles:
* **Validator Candidate.** After following the steps in this guide, you'll become a Validator Candidate and have a chance to be selected as a Standard Validator on the next day.
* **Standard Validator.** Every day, at least 10 Validator Candidates with the highest amount staked are selected as Standard Validators. The system records your total staking amount at 00:00 UTC every day for the selection process. 
* **Governing Validator.** The validators chosen by the community and Sky Mavis to ensure network security. Governing Validators are validators by default, and they account for more than half of the total validator pool.

## Steps
To become a validator, follow these steps:

1. Go to the [staking dashboard](https://saigon-staking.roninchain.com/) and click **Become a validator**. 
<img src={becomeValidator} width={1280} />

1. Familiarize yourself with the requirements and slashing penalties applied to validators. It's also highly recommended that you read the [white paper](./../../basics/platform/white-paper.md).
<img src={stepOne} width={1280} />

1. Set up your validator and bridge operator nodes following [Run a validator node](./../../node-operators/validator-setup.md) and [Run a bridge operator node](./../../node-operators/bridge-setup.md), respectively.
<img src={stepTwo} width={1280} />

1. Fill in your [addresses](./../manage-profile/profile.mdx) and specify your commission rate.
<img src={stepThree} width={1280} />

1. Provide the initial stake of RON.
<img src={stepFour} width={1280} />

Done! Now that you're a Validator Candidate, you're eligible for becoming a Standard Validator on the next day.
<img src={stepFive} width={1280} />