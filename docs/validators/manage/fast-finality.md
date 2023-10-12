---
description: Add a fast finality vote key to your profile. 
title: Add finality vote key
---

import profile from './assets/profile.png';
import stepOne from './assets/finality-key-1.png';
import stepTwo from './assets/finality-key-2.png';
import stepThree from './assets/finality-key-3.png';

This guide demonstrates how to add a *finality vote key* to your profile. The finality vote key is used to vote for blocks in the [fast finality mechanism](https://github.com/axieinfinity/REPs/blob/main/REP-0003.md#rewards). If you're an active Ronin validator, you need to have this key added in order to have the Fast Finality Reward transferred to your Admin address by the end of the day.

## Before you start

To obtain your finality vote key, you need to [generate a BLS key pair](./../../node-operators/setup/generate-keys.md#generate-a-bls-key). The public BLS key is your finality vote key.

## Add the key to your profile

1. Go to [Validator Dashboard](https://validator.roninchain.com) >
your account > **My profile**.
   <img src={profile} width={280} />

2. Find **Finality Vote Key** and then click **Add key**.
   <img src={stepOne} width={440} />

3. Enter your *BLS public key* in the **Finality Vote Key** field.
   <img src={stepTwo} width={416} />

4. Ensure that the key is saved.
   <img src={stepThree} width={440} />
