# Ronin Bridge V2

## Validator Governance

The governance process will be conducted via a decentralized voting mechanism. Apart from validators, there is a group of “governors”: each validator has a corresponding governor account. The governors will be empowered to vote for changes such as: adding/removing validators, upgrade contracts, change thresholds, etc. 

The governance voting method is serial by design: only one governance vote can be held at a time, and that vote must be completed before moving to a new vote. One way to conceptualize the governor is as a cold wallet while the validator can be thought of as a hot wallet.

![Governace flow](<./governance.png>)

The governor credentials are ideally stored inside a hardware wallet and should only be used on the occasions when a vote is needed. It will significantly reduce the risk of attackers getting access to the validator nodes, and will reduce overall risk of network exploitation. 

## Withrawal Limits

Following this network upgrade, the withdrawal process will be segregated into new tiered methods corresponding to the overall value of the transaction. Below is the initial setting for Tier limits:

| #      | AXS       | WETH   | SLP            | USDC        |
|--------|-----------|--------|----------------|-------------|
| Tier 1 | < 71,429  | < 918  | < 273,972,602  | < 1,000,000 |
| Tier 2 | 71,429    | 918    | 273,972,602    | 1,000,000   |
| Tier 3 | 714,290   | 9,180  | 2,739,726,020  | 10,000,000  |
| Daily  | 3,571,450 | 45,900 | 13,698,630,100 | 50,000,000  |

**Requirements**

- Tier 1: Requires automated approval from 70% of validators.

- Tier 2: Requires automated approval from 90% of validators.

- Tier 3: Requires automated approval from 90% validators and also manual approval by the auditors.
 For Tier 3 review, it will cost a fee (~0,001%) mainly to cover the fund for unlocking transaction.

### Daily Withdrawal Limits

We have also updated the software so that a total maximum withdrawal volume per day can be set. The initial value cap of $50M. Since a Tier 3 withdrawal already requires human review, it will not be counted in this daily withdrawal limit.

## Security Audits

[Verichains Bridge Audit v1.1](https://cdn.axieinfinity.com/ronin-doc/verichains-audit-bridge-v1.1.pdf)
[Certik Audit](https://cdn.axieinfinity.com/ronin-doc/REP-final-20220621T172752Z.pdf)
