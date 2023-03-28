---
description: Rewards earned by validators and delegators.
---

# Rewards
On Ronin, token holders stake their RON to participate in validator selection and, in exchange for their service, earn rewards.

The rewards are divided into *staking rewards* and *bridge rewards*. Ronin allocates 180,000,000 RON for the staking rewards and 1,000,000 RON for the bridge rewards. This is to ensure that the network is seeded well enough until transaction fees gain traction. These rewards are primarily meant to jump-start the network, while the protocol is intended to sustain itself on transaction fees.

| Year 	| Staking reward 	| Bridge reward 	| Target stake (50% of unlocked supply) 	|
|:----:	|:--------------:	|:-------------:	|:-------------------------------------:	|
| 1    	| 30,000,000     	| 1,000,000     	| 148,487,368                           	|
| 2    	| 30,000,000     	|               	| 234,214,058                           	|
| 3    	| 30,000,000     	|               	| 309,695,578                           	|
| 4    	| 30,000,000     	|               	| 376,593,602                           	|
| 5    	| 28,000,000     	|               	| 424,997,654                           	|
| 6    	| 24,000,000     	|               	| 463,362,523                           	|
| 7    	| 14,000,000     	|               	| 481,596,525                           	|
| 8    	| 6,000,000      	|               	| 491,876,192                           	|

## Staking reward
Validators receive a staking reward and a transaction fee for their block generation efforts. Validators share the staking reward and the transaction fee with their delegators—token holders who delegated their stakes to the validator. Each validator can set a commission rate that indicates the percentage of the self-allocated reward. The remaining reward is allocated to the delegators based on the amount that they have staked.

### Validator's commission
Validators receive some commission for running validator nodes to generate new blocks. The validators' commission is independent of the staked amount.

Following is a sample snapshot of the expected annual commission for the first 8 years, given the commission rate ranging from 5% to 20%.

| Commission rate 	|   5%   	|   10%   	|   15%   	|   20%   	|
|-----------------	|:------:	|:-------:	|:-------:	|:-------:	|
| Year 1          	| 68,182 	| 136,364 	| 204,545 	| 272,727 	|
| Year 2          	| 68,182 	| 136,364 	| 204,545 	| 272,727 	|
| Year 3          	| 68,182 	| 136,364 	| 204,545 	| 272,727 	|
| Year 4          	| 68,182 	| 136,364 	| 204,545 	| 272,727 	|
| Year 5          	| 63,636 	| 127,273 	| 190,909 	| 254,545 	|
| Year 6          	| 54,545 	| 109,091 	| 163,636 	| 218,182 	|
| Year 7          	| 31,818 	| 63,636  	| 95,455  	| 127,273 	|
| Year 8          	| 13,636 	| 27,273  	| 40,909  	| 54,545  	|

### Delegator's reward
Delegators share the reward based on the staked amount.

Following is a sample snapshot of the annual percentage rate (APR) for the first 8 years, considering the staked supply ranging from 10% to 70%, and given the commission rate of 5%.

| % of circulating supply staked 	|   10%  	|   20%  	|   30%  	|   40%  	|   50%  	|   60%  	|   70%  	|
|:------------------------------:	|:------:	|:------:	|:------:	|:------:	|:------:	|:------:	|:------:	|
| 1                              	| 95.97% 	| 47.98% 	| 31.99% 	| 23.99% 	| 19.19% 	| 15.99% 	| 13.71% 	|
| 2                              	| 60.84% 	| 30.42% 	| 20.28% 	| 15.21% 	| 12.17% 	| 10.14% 	| 8.69%  	|
| 3                              	| 46.01% 	| 23.01% 	| 15.34% 	| 11.50% 	| 9.20%  	| 7.67%  	| 6.57%  	|
| 4                              	| 37.84% 	| 18.92% 	| 12.61% 	| 9.46%  	| 7.57%  	| 6.31%  	| 5.41%  	|
| 5                              	| 31.29% 	| 15.65% 	| 10.43% 	| 7.82%  	| 6.26%  	| 5.22%  	| 4.47%  	|
| 6                              	| 24.60% 	| 12.30% 	| 8.20%  	| 6.15%  	| 4.92%  	| 4.10%  	| 3.51%  	|
| 7                              	| 13.81% 	| 6.90%  	| 4.60%  	| 3.45%  	| 2.76%  	| 2.30%  	| 1.97%  	|
| 8                              	| 5.79%  	| 2.90%  	| 1.93%  	| 1.45%  	| 1.16%  	| 0.97%  	| 0.83%  	|

## Bridge reward
Ronin allocates 1,000,000 RON to fund rewards for the first year. This reward is divided among bridge operator nodes. After the first year, we plan to separate the bridge from the consensus, that us, validators are not required to run bridge operator nodes.
