# Rewarding

We allocate 25% of its total supply of 1 billion tokens to fund the staking rewards. The staking rewards are allocated for 294 months (see [unlocking schedule](https://litepaper.roninchain.com/ronin-token-usdron/issuance)).

The validators have two sources of rewards: transaction fees and 90% of staking rewards. When the validator generates a block, (s)he will receive the transaction fees in that block and some fixed amount of staking rewards.

- The rewards will not be sent to validators right away, instead, they will be distributed and accumulated on a smart contract.
- At the end of each day, the smart contract allocates the reward to the validators and their delegators.
- At the end of each day, if a validator does not get slashed, (s)he and her/his delegators can claim their allocated rewards.

Each validator can set a commission rate that indicates the percentage of self-allocated rewards. The remaining rewards will be allocated based on the staked amount. For example, consider a validator A with a commission rate of 10%. The validator A self-delegates 1000 Ronin tokens. There are 3 delegators, named B,C,D, who delegate their tokens to validator A with the amounts of 500, 250,250, respectively. Here, the total amount of staked tokens to validator A is 1000+500+250+250=2000.  If 10 tokens are rewarded to validator A and her/his delegators, we allocate the rewards as follows:

- Validator A receives 10*10%+10*90%*1000/2000=5.5 tokens
- Delegator B receives 10*90%*500/2000=2.25 tokens
- Delegator C receives 10*90%*250/2000=1.125 tokens
- Delegator D receives 10*90%*250/2000=1.125 tokens