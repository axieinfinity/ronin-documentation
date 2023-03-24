---
label: Introduction
description: What is Ronin?
---
# Introduction
Ronin is a blockchain tailored for blockchain games, built by Sky Mavis, the developer of Axie Infinity—the leading blockchain game so far. Ronin supports EVM-compatible smart contracts and protocols, enabling developers to build high-performance, feature-rich blockchain projects optimized for accessibility and growth. Ronin facilitates mainstream adoption and provides global access to blockchain gaming. These attributes make Ronin ideal for collectibles, art, and gaming.
Developers can leverage Ronin’s EVM compatibility and performance to build engaging Web3 experiences. Ronin enables the blockchain gaming revolution by optimizing for accessibility and growth.

## Consensus
### Proof of Authority
Ronin originally used Proof of Authority (PoA) consensus, where selected validators maintain the network and verify transactions. These validators are trusted entities, chosen by Sky Mavis and the community for their expertise and reputation. Validators are responsible for creating new blocks and adding them to the blockchain. Over time, validators could be added or removed if most current validators approved the decision. This incentivized validators to act honestly to avoid losing authority and reputation. 

A benefit of PoA is that it requires less energy than other consensus mechanisms, like Proof of Work (PoW), because it does not need complex calculations to verify transactions. It also enables faster transaction speeds and lower transaction fees since blocks can be validated quicker.

However, the PoA consensus is also criticized for being less decentralized than other consensus mechanisms. It relies on a group of trusted validators to maintain the network, requiring a high degree of trust in the validators. This can be a potential point of failure if they act maliciously.

### Delegated Proof of Stake
To increase decentralization for Ronin, we launched an update integrating Delegated Proof of Stake (DPoS) into validator selection. Anyone holding enough RON can become a validator. It opens validator access and greatly improves Ronin's decentralization. Yet, we retain the benefits of PoA, like faster transaction speeds and lower transaction fees.

DPoS is a consensus mechanism where token holders delegate their stake to select validators. These validators verify transactions, produce new blocks, and receive rewards for their work. Token holders can vote for themselves or delegate stake to a representative. The more tokens a validator receives, the higher their chance of selection. Rewards for producing blocks are shared between validators and delegators (who delegate stake to validators).

Furthermore, as RON staking is required for validators, we implement slashing rules to penalize validators who act maliciously. Slashing deters improper behavior by penalizing validators who do not produce new blocks or attempt to cheat the system.

## Decentralization
Decentralization refers to the distribution of power and authority away from a central authority or entity. A core feature of blockchain technology, decentralization provides numerous benefits, such as increased security, transparency, privacy, and the ability to create decentralized applications.

Moving toward decentralization is one of Ronin's primary goals. Launched in January 2021, Ronin initially used a PoA consensus with Sky Mavis validators. Over time, more validators were added to maintain Ronin's blockchain. By March 2023, 18 validators were maintaining Ronin, 14 of which were outside of Sky Mavis. In April 2023, we launch a DPoS update on Ronin. The number of validators increased to 22, and anyone holding enough RON can become a validator.

## Scalability
Scalability refers to the ability of a blockchain system to handle a large number of transactions without compromising its performance. Scalability is one of the key challenges for blockchain systems because every validator on the network has to process and validate each transaction. 

Today, Ronin can support thousands of transactions per second. We're researching zero-knowledge rollups (ZK-rollups), a layer-2 scaling solution, to further enhance Ronin’s performance and scalability.

## Security
Security is a crucial aspect of blockchain technology as it deals with the storage and transfer of sensitive information and valuable assets. Blockchain technology offers several security features that make it a more secure system compared to traditional centralized systems.

In Ronin, a carefully selected group of Governing Validators is chosen to ensure that the vast majority of validators on the network are honest and have the network's best interests in mind. The existence of this honest majority of validators is crucial for guaranteeing the security and integrity of the Ronin blockchain.

See the list of Ronin's [security audit reports](./audits.md).
