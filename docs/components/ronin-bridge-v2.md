# Ronin Bridge V2

## Validator Governance

The governance process will be conducted via a decentralized voting mechanism. Apart from validators, there is a group of “governors”: each validator has a corresponding governor account. The governors will be empowered to vote for changes such as: adding/removing validators, upgrade contracts, change thresholds, etc. 

The governance voting method is serial by design: only one governance vote can be held at a time, and that vote must be completed before moving to a new vote. One way to conceptualize the governor is as a cold wallet while the validator can be thought of as a hot wallet.

![Governace flow](<./governance.png>)

The governor credentials are ideally stored inside a hardware wallet and should only be used on the occasions when a vote is needed. It will significantly reduce the risk of attackers getting access to the validator nodes, and will reduce overall risk of network exploitation. 

## Withrawal Limits

Following this network upgrade, the withdrawal process will be segregated into new tiered methods corresponding to the overall value of the transaction. Below is the initial setting for Tier limits:

| #    | Tier 1        | Tier 2      | Tier 3        | Daily Limit    |
|------|---------------|-------------|---------------|----------------|
| AXS  | < 71,429      |      71,429 |       714,290 |      3,571,450 |
| WETH | < 918         |         918 |         9,180 |         45,900 |
| SLP  | < 273,972,602 | 273,972,602 | 2,739,726,020 | 13,698,630,100 |
| USDC | < 1,000,000   |   1,000,000 |    10,000,000 |     50,000,000 |

For Tier 3 review, it will cost a fee (~$100) mainly to cover the fund for unlocking transaction.

### Daily Withdrawal Limits

We have also updated the software so that a total maximum withdrawal volume per day can be set. The initial value cap of $50M. Since a Tier 3 withdrawal already requires human review, it will not be counted in this daily withdrawal limit.

## Security Audits

Ronin Bridge smart contracts has been security audit by Verichains. 

[Verichains Bridge Audit v1.1](https://cdn.axieinfinity.com/ronin-doc/Verichains%20Public%20Audit%20Report%20-%20Ronin%20Bridge%20-%20v1.1.pdf)
