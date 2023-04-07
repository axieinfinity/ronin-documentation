---
description: Rewards earned by validators and delegators.
---

# Rewards
On Ronin, token holders stake their RON to participate in validator selection and, in exchange for their service, earn rewards.

The rewards are divided into the *staking reward* and the *bridge reward*. Ronin allocates 180,000,000 RON for the staking reward and 1,000,000 RON for the bridge reward. This is to ensure that the network is seeded well enough until transaction fees gain traction. These rewards are primarily meant to jump-start the network, while the protocol is intended to sustain itself on transaction fees.

|         Year        	| Staking reward 	| Bridge reward 	|
|:-------------------:	|:--------------:	|:-------------:	|
|          1          	|   30,000,000   	|   1,000,000   	|
|          2          	|   30,000,000   	|               	|
|          3          	|   30,000,000   	|               	|
|          4          	|   28,000,000   	|               	|
|          5          	|   24,000,000   	|               	|
|          6          	|   18,000,000   	|               	|
|          7          	|   14,000,000   	|               	|
|          8          	|    6,000,000   	|               	|
| Total allocated RON 	| 180,000,000    	| 8,000,000     	|

## Staking reward
Validators receive a staking reward and a transaction fee for their block generation efforts. Validators share the staking reward and the transaction fee with their delegators—token holders who delegated their stakes to the validator. Each validator can set a commission rate that indicates the percentage of the self-allocated reward. The remaining reward is allocated to the delegators based on the amount that they have staked.

### Validator's commission
Validators receive some commission for running validator nodes to generate new blocks. The validators' commission is independent of the staked amount.

Following is a sensitivity analysis of the expected annual commission for the first 8 years, given the commission rate ranging from 5% to 20%.

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

### Delegation's reward
Delegators share the reward based on the staked amount and the commission rate.

Following is a sensitivity analysis of the annual percentage rate (APR) for the first 8 years, considering commission rate ranging from 5% to 20%, and the staked supply of 50%.

| Commission rate 	|   5%   	|   10%   	|   15%   	|   20%   	|
|-----------------	|:------:	|:-------:	|:-------:	|:-------:	|
| Year 1          	| 19.19%    | 18.18%    | 17.17%    | 16.16%    |
| Year 2          	| 12.17%    | 11.53%    | 10.89%    | 10.25%    |
| Year 3          	| 9.20%     | 8.72%     | 8.23%     | 7.75%     |
| Year 4          	| 7.57%     | 7.17%     | 6.77%     | 6.37%     |
| Year 5          	| 6.26%     | 5.93%     | 5.60%     | 5.27%     |
| Year 6          	| 4.92%     | 4.66%     | 4.40%     | 4.14%     |
| Year 7          	| 2.76%     | 2.62%     | 2.47%     | 2.33%     |
| Year 8          	| 1.16%     | 1.10%     | 1.04%     | 0.98%     |

Following is a sensitivity analysis of the annual percentage rate (APR) for the first 8 years, considering the staked supply ranging from 40% to 60%, and  the commission rate of 5%.

| % of circulating supply staked 	|   40%  	|   50%  	|   60%  	|
|:------------------------------:	|:------:	|:------:	|:------:	|
| Year 1                           	| 23.99% 	| 19.19% 	| 15.99% 	| 
| Year 2                           	| 15.21% 	| 12.17% 	| 10.14% 	| 
| Year 3                           	| 11.50% 	| 9.20%  	| 7.67%  	| 
| Year 4                           	| 12.61% 	| 9.46%  	| 7.57%  	|
| Year 5                          	| 7.82%  	| 6.26%  	| 5.22%  	| 
| Year 6                           	| 6.15%  	| 4.92%  	| 4.10%  	|
| Year 7                           	| 3.45%  	| 2.76%  	| 2.30%  	| 
| Year 8                           	| 1.45%  	| 1.16%  	| 0.97%  	| 

## Bridge reward
Ronin allocates 1,000,000 RON to fund the reward for the first year. This reward is divided among bridge operator nodes. After the first year, we plan to separate the bridge from the consensus, that is, validators are not required to run bridge operator nodes.
