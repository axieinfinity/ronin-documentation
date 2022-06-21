# Ronin Bridge V2

## Validator Governance

The governance process will be conducted via a decentralized voting mechanism. Apart from validators, there is a group of “governors”: each validator has a corresponding governor account. The governors will be empowered to vote for changes such as: adding/removing validators, upgrade contracts, change thresholds, etc. 

The governance voting method is serial by design: only one governance vote can be held at a time, and that vote must be completed before moving to a new vote. One way to conceptualize the governor is as a cold wallet while the validator can be thought of as a hot wallet.

![Governace flow](<./governance.png>)

The governor credentials are ideally stored inside a hardware wallet and should only be used on the occasions when a vote is needed. It will significantly reduce the risk of attackers getting access to the validator nodes, and will reduce overall risk of network exploitation. 

## Withrawal Limits

Following this network upgrade, the withdrawal process will be segregated into new tiered methods corresponding to the overall value of the transaction.  Here is our proposed list of tiers for this iteration:

| Tier   | Withdrawal value | Threshold                                                                                   |
|--------|------------------|---------------------------------------------------------------------------------------------|
| Tier 1 | -                | The normal withdrawal / deposit threshold                                                   |
| Tier 2 | >$1,000,000             | 90% signatures from validators are required                                                 |
| Tier 3 | >$10,000,000            |  90% signatures from validators are required <br/>Up to 5 days of human review to unlock the fund |

For Tier 3 review, it will cost a fee (~$100) mainly to cover the fund for unlocking transaction.

### Daily Withdrawal Limits

We have also updated the software so that a total maximum withdrawal volume per day can be set. The initial value cap of $50M. Since a Tier 3 withdrawal already requires human review, it will not be counted in this daily withdrawal limit.

