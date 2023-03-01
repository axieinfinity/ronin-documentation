---
description: Ronin Bridge governance
---

# Validator governance

The governance process is conducted via a decentralized voting mechanism. Apart from validators, there is a group of “governors”: each validator has a corresponding governor account. The governors are empowered to vote for changes such as: adding/removing validators, upgrade contracts, change thresholds, etc. 

The governance voting method is serial by design: only one governance vote can be held at a time, and that vote must be completed before moving to a new vote. One way to conceptualize the governor is as a cold wallet while the validator can be thought of as a hot wallet.

![Governance flow](<./assets/governance.png>)

The governor credentials are ideally stored inside a hardware wallet and should only be used on the occasions when a vote is needed. It will significantly reduce the risk of attackers getting access to the validator nodes, and will reduce overall risk of network exploitation. 