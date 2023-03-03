---
description: Ronin Network white paper
---

# White paper


## Motivation

Decentralization is a hallmark of blockchain technology and one of the most prominent forces of innovation going forward. Our goal is to gradually increase the decentralization of Sky Mavis's products.

Currently, Ronin uses [Proof-of-Authority (PoA)](https://en.wikipedia.org/wiki/Proof_of_authority) as the consensus protocol. In PoA systems, transactions and blocks are validated by approved accounts, known as validators. The PoA protocol is most criticized for being not as decentralized as Proof-of-stake (PoS) and Proof-of-work (PoW), as the validators have all the authority and are prone to corruption and security attacks.      

## Consensus

To increase the decentralization of Ronin, we follow a similar strategy as [BNB smart chain (BSC)](https://github.com/bnb-chain/whitepaper/blob/master/WHITEPAPER.md) and use Proof of Staked Authority (PoSA) instead of PoA. 

### Proof-of-Staked-Authority

Proof of Staked Authority is a combination between [Delegated Proof of Stake (DPoS)](https://en.bitcoinwiki.org/wiki/DPoS) and PoA as follows.

- Token holders use their stake to vote and elect the validator set.
- Validators take turns to produce blocks in a PoA manner, similar to [Ethereum’s Clique](https://eips.ethereum.org/EIPS/eip-225) consensus design.

### Security and Finality

The [Clone attack paper](https://arxiv.org/abs/1902.10244) has shown that the PoA-based systems can tolerate less than N/3 Byzantine validators. To confirm a transaction, the users are encouraged to wait until receiving at least 2N/3+1 sealed blocks. With N=21 validators and the block time is 3 seconds, the users should wait for 45 seconds to confirm transactions in a block.

To perform the Clone attack, the Byzantine validators must create two blocks on the same block height (double sign). This behavior is detectable by other validators in the system. Thus, we use a slashing logic to penalize Byzantine validators (which will be covered in the “Slashing” section later). This slashing logic will expose the malicious validators in a very short time and make the Clone attack non-beneficial.

To perform non-detectable attacks, i.e., the Byzantine validators can only seal at most one block on each block height, the attacker must control at least N/2+1 validators.

### Validators Selection

All token holders are allowed to register as validators candidates. They can also play the role of delegators by staking their tokens to the validator candidates. The staking of validators and delegators is updated at the beginning of each day. Afterward, we select the set of 21 validators (including 11 trusted organizations and 10 most staked token holders). However, during the day, some validators may be (temporarily) removed from the validator set (they can either be in jail or in maintenance mode). Those changes will be updated in every epoch (which consists of 200 blocks ~ 10 minutes).

#### Staking

Token holders can put their tokens “bonded” into the stake. Token holders can register to become validator candidates or delegate their tokens to any validator or validator candidate. The core logic for staking is summarized below.

- The staking token is RON.
- Token holders (including trusted organizations) must stake at least 500,000 RON to become validator candidates.
- The staking will take effect at the beginning of the next day.
- The validator set includes the top 10 validator candidates with the highest staked amount.
- The validators can renounce, unstake, and withdraw the tokens after waiting for a period of 7 days.
- The delegators can instantly unstake and withdraw the tokens. However, they need to stake for at least 3 days, i.e., they can unstake after 3 days since the last staking operation.

#### Trusted organizations

While increasing the decentralization of the system, the validator selection process via staking also enables a new vector of attacks. An attacker that controls more than 51% of the tokens can take over the blockchain.

To prevent such attacks, we rely on a group of 11 trusted organizations, that are chosen by the community and Sky Mavis. As the trusted organizations take 11/21 slots in the validators set, the attackers cannot control the majority of the validators and take over the blockchains. 

## Bridge operator

The bridge operators take the responsibility of acknowledging deposit and withdrawal events to facilitate asset transfers between Ronin and other EVM-based chains. The bridge operators have their own reward and slash system (see the “Rewarding” and “Slashing” sections).

Each validator has the responsibility to maintain a bridge operator. The validator who does not run the bridge operator cannot claim its block rewards.

## Rewarding

We allocate 25% of its total supply of 1 billion tokens to fund the staking rewards. The staking rewards are allocated for 294 months (see [unlocking schedule](https://litepaper.roninchain.com/ronin-token-usdron/issuance)).

### Rewarding for validators

The validators have two sources of rewards: transaction fees and 90% of staking rewards. When the validator generates a block, (s)he will receive the transaction fees in that block and some fixed amount of staking rewards.

- The rewards will not be sent to validators right away, instead, they will be distributed and accumulated on a smart contract.
- At the end of each day, the smart contract allocates the reward to the validators and their delegators.
- At the end of each day, if a validator does not get slashed, (s)he and her/his delegators can claim their allocated rewards.

Each validator can set a commission rate that indicates the percentage of self-allocated rewards. The remaining rewards will be allocated based on the staked amount. For example, consider a validator A with a commission rate of 10%. The validator A self-delegates 1000 Ronin tokens. There are 3 delegators, named B,C,D, who delegate their tokens to validator A with the amounts of 500, 250,250, respectively. Here, the total amount of staked tokens to validator A is 1000+500+250+250=2000.  If 10 tokens are rewarded to validator A and her/his delegators, we allocate the rewards as follows:

- Validator A receives 10x10%+10x90%x1000/2000=5.5 tokens
- Delegator B receives 10x90%x500/2000=2.25 tokens
- Delegator C receives 10x90%x250/2000=1.125 tokens
- Delegator D receives 10x90%x250/2000=1.125 tokens

### Rewarding for bridge operators

The bridge operators will get 10% of staking rewards. The rewards will be distributed to the bridge operators (the delegators will not be received these rewards) at the end of each day based on the number of votes from the bridge operators on that day. 

## Slashing

We use slashing logic to ensure that malicious or negative behaviors are punished. We have two slashable cases for validators and one slashable case for bridge operators. 

### Double sign validators

It is quite a serious error when a validator signs more than one block with the same height. As we mentioned in the “Security and Finality” section, the validators, who do double sign, are launching a Clone attack to break the security of the blockchain. Our protocol implementation already has logic to prevent this. Thus, only the malicious code can trigger this behavior.

Anyone can submit a slash request with the double sign evidence, which should contain the 2 block headers with the same height, sealed by the same validator. Upon verifying the evidence, the offending validator will be slashed as follows.

- (S)he cannot claim the reward on that day.
- (S)he will be slashed 500,000 self-delegated RON
- (S)he will be put in jail for 2<sup>63</sup>-1 blocks, i.e., (s)he is not allowed to be a validator in the future.

### Unavailability validators

The performance of Ronin relies on everyone in the validator set can produce blocks timely when it is their turn. If the validators miss their turn to create blocks, it will hurt the performance of the system. Thus, we introduce a slashing logic for unavailability to penalize the validators that missed too many blocks.

We use a smart contract to record the number of missed blocks of each validator. If the number of missed blocks is above some predefined threshold, the validator will be slashed accordingly.

#### Tier 1 validator slashing

If a validator missed more than 50 blocks in a day, (s)he cannot claim the reward on that day.

#### Tier 2 validator slashing

If a validator missed more than 150 blocks in a day, the offending validator will be slashed as follows.

- (S)he cannot claim the reward on that day.
- (S)he will be slashed 10,000 amount of self-delegated RON
- (S)he will be put in jail for 2 days (57,600 blocks). During jail time, he is not allowed to participate in the set of validators.

#### Credit score and bail out for tier 2 validator slashing

While we encourage the validators to be online and produce blocks in turn, technical issues can happen sometimes. As we describe in the “Tier 2 validator slashing” paragraph, if a validator is unavailable (e.g., the validator's machine crashed), the validator may get slashed and be put in jail. If the validators are trusted organizations, we may not able to guarantee that 51% of the validators are honest (trusted).   

We introduce a credit score system to allow the well-performance validators to bail out of jail. We award the well-performance validators (i.e., the validators who always produce blocks on turn) with some credits. When a validator gets slashed and put in jail, she/he can use the credit score to bail out of jail.

- Every day, each validator (who is not in jail) will be given 50 credits. The validator loses 1 credit for every missed block. The maximum number of credits for a validator is 600.
- A jailed validator can use 5 credits for each epoch to bail out of jail.
- After getting bailed out, she/he can claim half of the reward for the remaining of the day.

#### Tier 3 validator slashing

After being put in jail and getting bailed out, if the validator missed 50 more blocks within that day, (s)he will be slashed as follows.

- The reward after bailing out will be removed.
- (S)he will be slashed 10,000 amount of self-delegated RON
- (S)he will be put in jail for 2 days (57,600 blocks). This time, the validator cannot use the credit score to bail out of jail.

#### Temporary maintenance mode for validators

Similar to the design of BSC, validators will be slashed in their absence (even when it is due to scheduled maintenance). Inspired by [BNB Evolution Proposal (BEP) 127](https://github.com/bnb-chain/BEPs/blob/master/BEP127.md), we allow the validators scheduling to enter a maintenance mode.

### Unavailability bridge operators

We will slash the bridge operators who do not provide enough signatures. We use a smart contract to record the number of votes of the bridge operators.

#### Tier 1 operators slashing

If the bridge operators missed more than 10% votes, (s)he cannot claim the bridge reward on that day.

#### Tier 2 operators slashing

If the bridge operators missed more than 20% votes, the offending governor will be slashed as follows.

- (S)he cannot claim the bridge reward on that day.
- The corresponding validator cannot claim the reward on that day.
- The corresponding validator will be put in jail for at most 2 days (57,600 blocks).

Note that, after the corresponding validator is put in jail, (s)he cannot use the credit score to bail out. 

## Governance

Trusted organizations also take the role of governance. The governance is responsible for the following tasks:

- Update the system parameters, e.g., slash thresholds. Add/remove trusted organizations.
- Sync the set of bridge operators to the Ethereum chain every day.

We require 9/11 trusted organizations’ votes to perform the above tasks. The trusted organization that does not sync the set of bridge operators to the Ethereum chain for 3 consecutive days will get slashed 10,000 RON.


**Disclaimer:**  This whitepaper is a work in progress and can be updated in the future.
