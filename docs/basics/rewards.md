---
description: Rewards earned by validators, delegators, and bridge operators.
title: Rewards
---

## Overview

On Ronin, token holders stake their RON to participate in validator selection and in exchange, earn rewards for their service.

The rewards are divided into *staking rewards* and *bridge rewards*. Ronin allocates 180,000,000 RON for the staking rewards and 1,000,000 RON for the bridge rewards. This is to ensure that the network is seeded well enough until transaction fees gain traction. These rewards are primarily meant to jump-start the network, while the protocol is intended to sustain itself on transaction fees.

<details>
<summary>Expand to see the reward allocation table</summary>

|         Year        	| Staking rewards (RON)	| Bridge rewards (RON)	|
|:-------------------:	|:--------------:	|:-------------:	|
|          1          	|   30,000,000   	|   1,000,000   	|
|          2          	|   30,000,000   	|               	|
|          3          	|   30,000,000   	|               	|
|          4          	|   28,000,000   	|               	|
|          5          	|   24,000,000   	|               	|
|          6          	|   18,000,000   	|               	|
|          7          	|   14,000,000   	|               	|
|          8          	|    6,000,000   	|               	|
| Total allocated RON 	|   180,000,000  	|               	|

</details>

## Rewards for validators

For their block confirmation efforts, validators receive block rewards, which are divided into *staking rewards* and *transaction fees*. A validator shares the staking reward and the transaction fees with their delegators—token holders who staked their RON with this validator.

### Commission from staking rewards

Each validator can set a commission rate, which is a percentage of the staking rewards that they get to keep. The rest is shared with the delegators based on the amount of RON each delegator staked to this validator. The higher the stake, the bigger the reward for the delegator.

<details>
<summary>Expand to see the expected annual commission amount</summary>

The following table is a sensitivity analysis of the expected annual commission for the first 8 years, considering the commission rate ranging from 5% to 20%.

| Commission rate | 5%     | 10%     | 15%     | 20%     |
| --------------- | ------ | ------- | ------- | ------- |
| Year 1          | 68,182 | 136,364 | 204,545 | 272,727 |
| Year 2          | 68,182 | 136,364 | 204,545 | 272,727 |
| Year 3          | 68,182 | 136,364 | 204,545 | 272,727 |
| Year 4          | 63,636 | 127,273 | 190,909 | 254,545 |
| Year 5          | 54,545 | 109,091 | 163,636 | 218,182 |
| Year 6          | 40,909 | 81,818  | 122,727 | 163,636 |
| Year 7          | 31,818 | 63,636  | 95,455  | 127,273 |
| Year 8          | 13,636 | 27,273  | 40,909  | 54,545  |

</details>

### Transaction fees for block generation

When the validator generates a block, they earn transaction fees for all the transactions in the block.

### Fast finality rewards

At most 0.5% of the block rewards is distributed to the validators who vote to finalize blocks. These rewards are not distributed to the delegators.

These rewards are distributed in every period to the validators based on their votes.

For more information on fast finality reward distribution, see [REP-0003](https://github.com/axieinfinity/REPs/blob/main/REP-0003/REP-0003.md).

## Rewards for delegators

For staking RON to a validator, a delegator earns the staking reward that is correspondent to the amount that was staked and the commission rate of the validator.

The rewards for a delegator are calculated based on their lowest balance per day. This means that if it's the delegator's first day to delegate, they will not receive any rewards for that period as their lowest balance for that day is zero.

The delegator will only get rewards if the validators they chose to delegate to get selected for block confirmation for that day. Governing Validators (marked with a green checkmark) are guaranteed to always be chosen as validators, along with 10 validators with the highest staked amount. The delegator should factor in the status of the validator or the amount of RON staked to them in consideration when choosing a validator.

The delegator may get less or no rewards if their chosen validator is punished due to being unavailable (validator nodes are expected to be always online and up to date) or due to malicious activities. The delegator should look at the stats such as the uptime percentage in the validator list to choose a reliable validator to maximize their RON rewards.

<details>
<summary>Expand to see a breakdown of the annual percentage rate</summary>

The following table is a sensitivity analysis of the annual percentage rate (APR) for the first 8 years, considering the commission rate ranging from 5% to 20%, and the staked supply of 50%.

| Commission rate, % | 5%     | 10%   | 15%   | 20%   |
| --------------- | ------ | ----- | ----- | ----- |
| Year 1          | 19.19% | 18.18% | 17.17% | 16.16% |
| Year 2          | 12.17% | 11.53% | 10.89% | 10.25% |
| Year 3          | 9.20%  | 8.72%  | 8.23%  | 7.75% |
| Year 4          | 7.06%  | 6.69%  | 6.32%  | 5.95%  |
| Year 5          | 5.36%  | 5.08%  | 4.80%  | 4.52%  |
| Year 6          | 3.69%  | 3.50%  | 3.30%  | 3.11%  |
| Year 7          | 2.76%  | 2.62%  | 2.47%  | 2.33%  |
| Year 8          | 1.16%  | 1.10%  | 1.04%  | 0.98%  |

The following table is a sensitivity analysis of the annual percentage rate (APR) for the first 8 years, considering the staked supply ranging from 40% to 70%, and the commission rate of 5%.

| Circulating supply staked, % | 40%   | 50%   | 60%   | 70%   |
| ------------------------------ | ----- | ----- | ----- | ----- |
| Year 1                         | 23.99% | 19.19% | 15.99% | 16.16% |
| Year 2                         | 15.21% | 12.17% | 10.14% | 10.25% |
| Year 3                         | 11.50% | 9.20%  | 7.67%  | 7.75%  |
| Year 4                         | 8.83%  | 7.06%  | 5.89%  | 5.95%  |
| Year 5                         | 6.71%  | 5.36%  | 4.47%  | 4.52%  |
| Year 6                         | 4.61%  | 3.69%  | 3.08%  | 3.11%  |
| Year 7                         | 3.45%  | 2.76%  | 2.30%  | 2.33%  |
| Year 8                         | 1.45%  | 1.16%  | 0.97%  | 0.98%  |

</details>

## Rewards for bridge operators

The rewards for bridge operators are funded by RON allocation rewards:

* We allocated 1,000,000 RON for bridge operator reward in the first year.
The rewards are automatically given to the bridge operators at the end of each period.
* In each period, each bridge operator will be given a reward that is proportional to the number of votes in the period. After this period, we will need to find other sources of rewards for the bridge operators. We are planning to introduce other types of rewards with the goal that the operators are profitable without receiving the fund from RON allocation rewards.
