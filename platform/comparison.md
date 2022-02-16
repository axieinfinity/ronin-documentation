---
description: 'Blockchain comparison overview: Ronin Chain, Ethereum.'
---

# Comparison

## Comparison criteria <a href="#4c41" id="4c41"></a>

### Consensus <a href="#2ab4" id="2ab4"></a>

Proof of authority is proposed in details in this proposal of ethereum [https://eips.ethereum.org/EIPS/eip-225](https://eips.ethereum.org/EIPS/eip-225). The protocol is called **Clique**. This protocol is appropriate for a private network because all the validators are predefined, known and hence reliable.

The basic idea is: The set of validators (or authority nodes) are predefined in the genesis block when setting up the network. A new validator can be added later when the network needs to scale. But, such validator can be added successfully if half of the currently authority nodes approve the it. The same mechanism is used when a validator is removed from the network.

To make sure a malicious signer cannot do too much harm to the network, any signer can sign at most `(floor(VALIDATOR_COUNT / 2) + 1)`consecutive blocks, where  VALIDATOR\_COUNT is the number of current approved validators. For example, if there are 7 validators right now, each validator can only sign at most 4 consecutive blocks.&#x20;

One other important difference in Clique is the fix minimum value of block time. This value can be set in the header of genesis block. The current value of minimum block time in Ronin network is 3 seconds

### Decentralization <a href="#4da0" id="4da0"></a>

Due to the design, POA is nearly perfect for private networks, not appropriate for public networks. All the validators of Ronin blockchain right now belong to Axie Infinity. In the near future, we will allow reliable, cooperated partners to join the network of validators. Validators act as partners to the network and must help Ronin through the business, growth, economic investment.

If the demand for complete decentralization is high in the future, we may move to Proof of Stake protocol, but this decision is not finalized yet.

### Security

The POA scheme design allows a bit of scale with the increase of the number of signers. We have a plan to integrate layer-2 rollup solution to our blockchain in the future ([https://ethereum.org/en/developers/docs/scaling/layer-2-rollups/](https://ethereum.org/en/developers/docs/scaling/layer-2-rollups/)).

Moreover, we have strong security and Infra teams for protecting the chain from attack types such as double-spending, nothing-at-stake, spamming, DDoS, and long-range attacks. Blockchain-based cryptocurrency systems must not only deal with these attacks but also ensure the stability of the system, which includes safety and liveness.

### Scalability <a href="#55b8" id="55b8"></a>

Our platform is built in the Cloud Infras which support high Scalability and reliability in multi regions. In the future, layer 2 scaling solutions will be implemented for making unlimited scaling for the Ronin Chain.

### Ecosystem <a href="#08c1" id="08c1"></a>

The ronin chain ecosystem includes Explorer, Wallet, Bridge, and its Dapps such as Katana, MarketPlace, MavisHub.  The stronger the infrastructure and its support, the more Dapps can be based on it for creating a strong ecosystem. Moreover, a strong ecosystem of Dapps will attract more users of the infrastructure, which in turn motivates improvements and entails the development of the underlying infrastructure. Each of the above blockchain projects provides a PoS-based consensus that can handle thousands of transactions per second, thus promising many potential Dapps for the ecosystem.

### Gas Fee

We built the Free Gas proxy which makes the users who hold Axie NFTS  will get a certain number of free transactions per day. This should scale linearly. Being a new user gets you 20 free transactions to start. 50% of the gas fee is burnt, 50% is sent to validators. Part of the Gas fee must be burnt to prevent a DDOS attack by hostile validators in the future. For details, please go to Free Gas Proxy Component.

