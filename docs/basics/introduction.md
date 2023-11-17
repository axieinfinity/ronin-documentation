---
label: Introduction
description: What is Ronin?
---
# Introduction

## What is Ronin?

Ronin is an EVM blockchain specifically forged for gaming. Launched by Sky Mavis, the creator of Web3’s breakout title Axie Infinity which has generated over &#36;1.3 B in revenue, Ronin is the only blockchain proven to scale a single game to accommodate millions of daily active users and has processed over &#36;4 B in NFT volumes. Ronin optimizes for near-instant transactions and negligible fees that enable millions of in-game transactions to occur seamlessly, making it the leading choice for Web3 games.

## What makes Ronin unique as a blockchain?

### Ronin is battle-tested and scalable

In 2021, Ronin processed 15% of all NFT trading volume and is the home of all Axie Infinity assets—Axies, Land, SLP and AXS. Ronin is second only to Ethereum when it comes to [NFT sales by volume](http://cryptoslam.io/). While there are many other chains available, Ronin is the only platform proven to scale a single game to accommodate millions of daily users.

### Ronin is hyper optimized for gaming

Ronin cuts out the bloat found in other permissionless blockchains. We put in effort to curate high quality apps and ensure there is minimal spam and high uptime for games.

### Ronin is backed by Sky Mavis

Sky Mavis are the creators of the leading NFT project by adoption and all-time volume—Axie Infinity. Our experience building and scaling Axie Infinity has given us unique insights into product development, community building, and go-to-market which can be leveraged by partners deploying on the network. We offer advisory support and grants to help reduce risk and improve odds of success for games looking to launch.

### Ronin is secure

Thanks to Ronin’s massive traction and being pioneers in the space, Sky Mavis has been one of the first companies to face scaling roadblocks and security threats ahead of the rest of the market. In March 2022, Sky Mavis experienced The Ronin Validator Breach, where 173,600 ETH and 25.5M USDC were drained from the Ronin Bridge. This breach was not due to a technical flaw, but a socially engineered attack by an elite group of hackers. This incident led Sky Mavis to become a fully antifragile, zero-trust organization. Sky Mavis has implemented rigorous internal security measures to prevent future attacks. All code has been fully reviewed and optimized, with security experts [auditing](./audits.md) the entire architecture.

## What is Ronin's consensus?

### Proof of Authority (PoA)

Ronin originally used Proof of Authority (PoA) consensus, where selected validators maintain the network and verify transactions. These validators are trusted entities, chosen by Sky Mavis and the community for their expertise and reputation. Validators are responsible for creating new blocks and adding them to the blockchain. Over time, validators could be added or removed if most current validators approved the decision. This incentivized validators to act honestly to avoid losing authority and reputation.

A benefit of PoA is that it requires less energy than other consensus mechanisms, like Proof of Work (PoW), because it does not need complex calculations to verify transactions. It also enables faster transaction speeds and lower transaction fees since blocks can be validated quicker.

The PoA consensus, however, is also criticized for being less decentralized than other consensus mechanisms. It relies on a group of trusted validators to maintain the network, requiring a high degree of trust in the validators. This can be a potential point of failure if they act maliciously.

## DPoS

To increase Ronin's decentralization, we launched an update integrating Delegated Proof of Stake (DPoS) into validator selection. Anyone holding enough RON can become a validator. It opens validator access and greatly improves Ronin's decentralization. Yet, we retain the benefits of PoA, like faster transaction speeds and lower transaction fees.

DPoS is a consensus mechanism where token holders delegate their stake to select validators. These validators verify transactions, produce new blocks, and receive rewards for their work. Token holders can vote for themselves or delegate stake to a representative. The more tokens a validator receives, the higher their chance of selection. Rewards for producing blocks are shared between validators and delegators (who delegate stake to validators).

Furthermore, as RON staking is required for validators, we implement [slashing](./../validators/slashing.mdx) rules to penalize validators who act maliciously. Slashing deters improper behavior by penalizing validators who do not produce new blocks or attempt to cheat the system.
