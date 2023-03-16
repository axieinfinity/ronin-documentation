---
description: Read about the Ronin's journey from the beginning to the present day
---

# History

This page used to be called "Comparison".

## Comparison criteria

### Consensus

The Ronin Network’s Proof of Authority (POA) consensus implementation is called Consortium, and when compared to other POA implementations, Consortium shows similarities but has a few key differences. 

For example, in Clique (the POA implementation proposed in EIP-225) the list of validators is stored in the header of the genesis block, whereas in Consortium, the list of validators is stored in a smart contract defined in the genesis block. Also, in Clique, there is a fixed minimum value of block time which can be set in the header of genesis block. Ronin’s current minimum block time network is 3 seconds. 

The basic idea can be described as follows: the set of validators (or authority nodes) are predefined in the genesis block when setting up the network. However, when the network needs to scale, a new validator can be added. Such a validator can be added successfully if and only if half of the current authority nodes approve it. The same mechanism holds true for successful removal of a validator from the network.

Moreover, to make sure a malicious signer cannot do too much harm to the network, any signer can sign at most (floor(VALIDATOR_COUNT / 2) + 1)consecutive blocks, where VALIDATOR_COUNT is the number of current approved validators. In other words, if there are 7 validators right now, each validator can only sign at most 4 consecutive blocks.

### Decentralization

Due to the design, POA is nearly perfect for private networks since all the validators are predefined, known, and hence reliable; however, it’s not appropriate for public networks. Currently, validators act as partners to the network encompassing business partnerships, growth, economic investment.

If the demand for complete decentralization is high, we may move to Proof of Stake protocol, but this decision is not finalized yet.

The current plan to achieve more complete decentralization is to move to Proof of Stake protocol.

### Security

The POA scheme design allows a bit of scale with the increase of the number of signers. We have a plan to integrate layer-2 rollup solution to our blockchain in the future ([https://ethereum.org/en/developers/docs/scaling/layer-2-rollups/](https://ethereum.org/en/developers/docs/scaling/layer-2-rollups/)).

We have strong security and infrastructure teams to protect the chain from attack types such as double-spending, nothing-at-stake, spamming, DDoS, and long-range attacks. 

Blockchain-based cryptocurrency systems must be able to deal with these attacks while ensuring stability and safety of the system and maintaining perfect uptime.

### Scalability

Our platform is built in the Cloud Infrastructure which supports high Scalability and reliability in various regions. In the future, layer 2 scaling solutions will be implemented allowing Ronin to scale infinitely. 

### Ecosystem

The Ronin Chain ecosystem includes the Explorer, the Wallet, and the Bridge, as well as Dapps such as Katana, MarketPlace, MavisHub. The stronger the chain’s infrastructure and support is, the more Dapps can be created, and the stronger the ecosystem of Dapps, the more users the chain will have. This mechanism is notable because having more users will motivate underlying infrastructure improvements, essentially creating a positive feedback loop. Each of the above blockchain projects provides a PoS-based consensus that can handle thousands of transactions per second, thus promising many potential Dapps for the ecosystem.

### Gas fee
We built the Free Gas proxy to allow for users who hold Axie NFTs to get a linearly scaling number of free transactions per day and for new users to get a fixed 20 free transactions to start their journey into Axie. For these transactions, 50% of the gas fee is burnt and 50% is sent to validators. Part of the Gas fee must be burnt to prevent a DDOS attack by hostile validators in the future. For details, please go to the Free Gas Proxy Section.
