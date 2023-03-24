---
description: Basic concepts related to blockchain in general and to Ronin specifically 
---

# Key concepts
Terms and examples to help you speak the industry lingo.

## A
### Address
A blockchain address is used to send and receive funds of digital assets on a blockchain network. Every blockchain has wallet addresses in some form, and most look like a long string of letters and numbers. 

For example, a Ronin address looks something like this: ronin:50460c4cd74094cd591455cad457e99c4ab8be0.

## B
### Bitcoin
Bitcoin is a blockchain network that uses a native cryptocurrency called bitcoin (BTC). As the first blockchain and cryptocurrency, it has a dominant presence within the broader crypto ecosystem. Bitcoin was established in 2009 and pioneered Proof of Work (PoW), a technology used to reach consensus on a decentralized network.

### Block
A block is the data record of all transaction information made during a specific time frame on a blockchain network. Blocks are added sequentially to a network's chain of data, which in turn make up the public ledger known as a blockchain.

For example, a Ronin block contains information about the date, time, and number of transactions, as well as signature information regarding the origin and destination of the transfer. Blocks must be confirmed by the network via a process of consensus before a chain can continue transacting and creating new blocks.

### Block explorer
A block explorer is a software interface that enables users to access real-time blockchain information like transactions, blocks, addresses, nodes, and balances on a particular network. On Ronin, the explorer software is called [Ronin Block Explorer](https://app.roninchain.com/dashboard).

### Block reward
A block reward is the payment awarded to a validator for successfully validating a new block. On Ronin, the block reward is shared between validators and delegators.

### Blockchain
A blockchain is a public ledger of transactions that is maintained and verified by a decentralized, peer-to-peer (P2P) network of computers that adhere to a consensus mechanism to confirm data. Each computer in a blockchain network maintains its own copy of the shared record, making it nearly impossible for a single computer to alter past transactions or for malicious actors to overwhelm the network.

### Bridge
A blockchain bridge—also known as a cross-chain bridge—allows independent blockchains to communicate with each other. This allows users to transfer crypto assets from one blockchain to another, including tokens, wrapped cryptocurrencies, and non-fungible tokens (NFTs). For example, [Ronin Bridge](https://bridge.roninchain.com/) is used for asset transfer between the Ronin chain and the Ethereum mainnet.

### Bridge operator
A bridge operator is a type of node used for acknowledging deposit and withdrawal events on a blockchain bridge to facilitate asset transfers between this chain and others. On Ronin Bridge, each validator runs a [bridge operator node](#bridge-operator-node) alongside the [validator node](#validator-node).

## C
### Client
A client is any type of software that is downloaded onto a computer and helps the user interact with another type of software or service provided by a server.

On Ronin, a client is the software needed to allow Ronin [nodes](#node) to read blocks on the Ronin blockchain and Ronin-based smart contracts. A node is the running piece of the client software. In order to run a node, you have to first download a Ronin client application.

A common use case of a client is a cryptocurrency software wallet, such as [Ronin Wallet](#ronin-wallet).

### Commission
Validators collect commissions when their node earns a staking reward for delegators. A validator node earns a staking reward for participating in the consensus protocol each epoch. The commission rate is a fraction of the staking reward.

### Consensus mechanism
A consensus mechanism is an algorithm used to guarantee agreement on the blockchain between all nodes. The blockchain, although being built in a decentralized way, eventually aligns so that all nodes agree on whether a given block is part of the chain. Ronin's consensus mechanism is a combination of the [Delegated Proof of Stake (DPoS)](#delegated-proof-of-stake-dpos) and [Proof of Authority (PoA)](#proof-of-authority-poa) algorithms.

## D
### Decentralized application (dApp)
A decentralized application (dApp) uses blockchain technology to address use cases ranging from investment to lending to gaming and governance. While the front-end of a dApp may seem similar to a web application, its back-end processes don't require a centralized server and instead run on a decentralized network. For communication, dApps use wallet software (like Ronin Wallet) to interact with automated smart contracts on the blockchain.

One example of a Ronin dApp is the [Katana](https://katana.roninchain.com) decentralized exchange.

### Decentralized exchange (DEX)
A decentralized exchange (DEX) is a financial services platform for buying, trading, and selling digital assets. On a DEX, users transact directly on the blockchain in a peer-to-peer (P2P) fashion without the need for a centralized intermediary.

### Delegated Proof of Stake (DPoS)
Delegated Proof of Stake (DPoS) is a consensus mechanism with a distinct voting and delegation structure. A DPoS system allows users to delegate their own stake to a validator node of their choosing—and vote for the node to be selected as a validator in the next day. Selected validators receive block rewards after verifying the transactions in a block, and those rewards are then shared with users who delegated them as validators.

### Delegator
A delegator is a RON token holder—an individual or institution—who contributes some amount of their tokens to a validator in exchange for a portion of staking rewards and the ability to vote for the validator to be elected in the validator set.

## E
### Epoch
While this varies depending on the blockchain protocol, an epoch generally refers to a specific number of blocks—or a specific or approximate period of time. Generally found on blockchains that utilize Proof of Stake (PoS), different PoS protocols have different ways of defining an epoch (if they use them). Epochs are used to reach security checkpoints, distribute staking rewards, or assign a new group of blockchain validators. For example, an epoch on Ronin lasts 200 blocks, which is roughly equal to 10 minutes.

### Ethereum
Ethereum launched in 2015 as a decentralized, blockchain-based global supercomputer to serve as the foundation for an ecosystem of interoperable, decentralized applications (dApps) powered by token economies and smart contracts. Assets and applications designed on Ethereum are built with self-executing smart contracts that remove the need for an intermediary. The network is fueled by its native cryptocurrency ether (ETH), which is used to pay network transaction fees.

## G
### Gas
Gas refers to the fees associated with transacting and executing smart contracts or decentralized applications (dApps) on the Ethereum blockchain. Ethereum blockchain processes happen through transactions that require gas. These gas costs are figured by measuring the computational power required for each action and how long each action takes. Gas costs are denoted in gwei, a denomination of ether (ETH), equal to 0.000000001 ETH. Gas was built into the system to reward validators who maintain network consensus. By adding a cost to each transaction, gas also acts as a spam mitigation tool that deters nefarious network activity.

## H
### Hard fork
A hard fork is a software update that is not backwards compatible. In blockchain tech, a hard fork happens when new rules are introduced into the blockchain code that are not compatible with the rules of the blockchain's previous code.

## K
### Katana
Every blockchain has its own flagship decentralized exchange (DEX), a place where users are able to swap tokens freely within the ecosystem. Ethereum has [Uniswap](https://uniswap.org/), Matic has [Quickswap](https://quickswap.exchange/) and Ronin has [Katana](https://katana.roninchain.com/#/swap). Better known as “Ronin DEX”, Katana allows users to swap between tokens within the Axie Infinity ecosystem without leaving the Ronin blockchain.

The DEX has 3 liquidity pools (SLP/WETH, AXS/WETH, RON/WETH) where users can opt to become liquidity providers (LPs) by staking the relevant pairing. Liquidity providers receive 0.25% of each trade that taps into the pool, proportionate to their pool share.

## M

### Mainnet
A mainnet is a fully developed and released version of a blockchain network. This stands in contrast with a testnet, which is generally used to perform tests and experiments on a blockchain before a mainnet is released. Testnets are used while a blockchain is live for experimentation and development as to not disrupt the mainnet.

## N
### Node
A node is a computer that performs a certain function on a blockchain network and runs client software in order to do so. Some nodes validate transactions, while others observe activity on the blockchain. Nodal network structure is also a key aspect of maintaining security on a blockchain network.

On Ronin, the node types are as follows:
* Validator node
* Bridge operator node
* Non-validator node (RPC)
* Archive node

The validator node and non-validator node are full nodes—they store full blockchain data, which is periodically pruned so the node does not store all state data back to genesis.

The archive node, on the other hand, retains all historical data right back to genesis. It stores all of the information that a full node does and builds an archive of historical blockchain states.

#### Validator node
A validator node is responsible for verifying and approving transactions
submitted by users and blockchain clients. Upon the close of a transaction block, validator nodes are randomly chosen to validate block data, thus generating the subsequent block, and earning RON tokens as a reward.

#### Bridge operator node
A bridge operator node is used to acknowledge deposit and withdrawal events to facilitate asset transfers between Ronin and other EVM-based chains. Each validator has the responsibility to run a bridge operator node as well as the validator node. A validator who doesn't do so is unable to claim block rewards.

#### Non-validator node (RPC)
While validator nodes run the Ronin consensus protocol and earn rewards on block validation, a non-validator node—also known as an RPC (remote procedure call) node—only serves as a gateway for decentralized applications to obtain relevant data on the Ronin blockchain.

Specifically, an RPC node provides a mechanism for applications to query the blockchain for information, send transactions, and execute smart contracts.

#### Archive node
An archive node retains all historical data right back to genesis and is suited for making fast queries about historical states. This data represents units of terabytes, which makes archive nodes less attractive for average users but can be handy for services like block explorers, wallet vendors, and chain analytics. 

### Node operator
A node operator is an individual or institution that sets up and configure nodes for the validator. The node operator and validator might actually be the same person or entity. but, this documentation makes a distinction between these roles for clarity. For example, see sections [Node operators](/docs/node-operators) and [Validators](/docs/validators). 

## P
### Proof of Authority (PoA)
Proof of Authority (PoA) is a consensus mechanism that relies on the value of identity and reputation instead of cryptographic assets or computational power. PoA relies on a limited number of nodes to verify transactions, making it too centralized, but this trade-off is offset by high scalability and transaction speeds.

### Proof of Stake (PoS)
Proof of Stake (PoS) is a consensus mechanism that encourages participants to stake native coins in a network of validator nodes. When a transaction block is closed, validator nodes are randomly chosen to validate block data, generate the subsequent block, and earn native coins as a reward. PoS systems also allow validator nodes to participate in decentralized platform governance by voting on key decisions.

### Proof of Work (PoW)
Proof of Work (PoW) is a consensus mechanism first popularized by [Bitcoin](#bitcoin). PoW systems rely on a mining process to maintain the network. Miners use electricity and computer hardware and compete to solve the complex cryptographic puzzles required to confirm transacted network data, and are rewarded with the network's coin for doing so. While being more decentralized and secure than most networks, PoW systems are criticized for high energy consumption.

## R
### Ronin
Developed by Sky Mavis, Ronin is an Ethereum-linked chain on which Axie Infinity operates. Ronin is a scaling solution intended to address issues that occur during times of high network congestion, such as slow transaction confirmations and high transaction fees. Sky Mavis also operates [Ronin Bridge](https://bridge.roninchain.com), which allows users to move their assets from Ethereum to Ronin.

### Ronin Block Explorer
[Ronin Block Explorer](https://explorer.roninchain.com/) is a website where users can explore and search the Ronin blockchain for transactions, addresses, tokens, prices, and other activities taking place on Ronin.

### Ronin Faucet
[Ronin Faucet](https://faucet.roninchain.com) is a website that distributes small amounts of testnet RON to users in exchange for developing projects on Ronin.

### Ronin Wallet
Ronin Wallet is the primary wallet used for the Ronin network. It is where the standard tokens RON, RRC20, and RRC721 are kept. The wallet is available as a Chrome extension for desktop and as an app on mobile devices. 

With the Ronin wallet, users can exchange the standard tokens, and send and receive cryptocurrencies and NFTs without paying high gas fees. 

The ERC-20 tokens supported by the Ronin Wallet include Ronin Wrapped Ether (WETH), Smooth Love Portion (SLP), Axie Infinity Shard (AXS), USDC, Axie Egg Coin (AEC), SLP-WETH, RON-WETH, and USDC-WETH. While the ERC-721 tokens supported on the wallet include Land Plot, Land Item, and Axie.

Ronin Wallet is a non-custodial wallet that allows only the owner of the wallet to have absolute influence and access to the funds in the wallet.

Ronin Wallet has 3 important features:
* The wallet address, which consists of numbers and characters used to send and receive assets between two wallets.
* The passphrase, which is a security key likened to a password. The passphrase consists of any 12 English keywords and is required to perform the wallet recovery operation.
* The private key is a string format to connect to a crypto account, similar to the password of a bank account.

### RPC
RPC (remote procedure call) is a lightweight communication protocol for facilitating interactions among software applications. RPC allows programs to communicate with other remote programs hosted on other networks.

In blockchain tech, RPC is a method for dApps to communicate with a blockchain network by invoking processes or functions on remote systems. When a client application uses RPC, it sends a request to the blockchain without revealing the client’s server information, instructing it to perform a specific function or procedure. After that, the server runs the requested function and returns the result to the client's dApps.

## S
### Sidechain
A sidechain is an external secondary blockchain protocol that is connected to a primary blockchain network (mainchain). Sidechains are typically designed to allow for the transfer of data and value between themselves and the mainchain.

### Slashing
Slashing is a process employed automatically by blockchain protocols that make use of a Proof-of-Stake (PoS) or related consensus mechanism. If a user stakes their crypto assets inside a validator node and the node behaves in a dishonest or malicious manner, the user can be penalized, resulting in a loss of a portion of the initial investment.

### Smart contract
A smart contract is a self-executing code or protocol that carries out a set of instructions that is verified on the blockchain. These contracts are trustless, autonomous, decentralized, and transparent; they are irreversible and unmodifiable once deployed.

### Solidity
Solidity is the software development programming language designed specifically for Ethereum. Solidity is an object-oriented programming language designed for building smart contracts that work in unison with the Ethereum Virtual Machine (EVM) and the Ethereum network.

### Staking
Staking is the process through which a Ronin user "stakes" or locks their cryptocurrency assets on the network as part of the consensus mechanism, thus ensuring the security and functionality of the chain.

Ronin's DPoS allows users to commit their RON as votes, where voting power is proportional to the number of coins held. These votes are then used to elect a number of validators who manage the blockchain on behalf of their voters, ensuring security and consensus. The staking rewards are distributed to these elected validators, who then redistribute part of the rewards to the users who staked their tokens proportionally to their individual contributions.

To stake on Ronin, [become a delegator](../delegators/onboarding/become-delegator.mdx). 

## T
### Testnet
A testnet is a sandbox or testing environment for a blockchain network typically made available for development purposes prior to a mainnet launch. Testnets are commonly used to ensure that the blockchain system is adequately secure and functional in accordance with its intended design. After the testnet is audited and pressure-tested, developers often fix bugs or add new features to the project's mainnet prior to launch.

### Transaction
In a blockchain context, a transaction (TX) generally refers to the sending and receiving of different types of data between users on a blockchain network. Depending on their origin, transactions can be sent with varying speeds and levels of security and privacy. The most common type of transaction simply allows users to exchange network-specific coins/tokens between each other. For example, Alice sends Bob 4 RON using the Ronin network, which he promptly receives a few minutes later. In exchange, Bob then sends Alice an equivalent value in ether (ETH) via the Ethereum network.

## V
### Validator
A validator is an individual or institution that validates transactions and generates blocks within a blockchain by running a validator node. Blockchain protocols have their own parameters for what constitutes an acceptable validator and how it operates.

There are three types of validators on Ronin: Validator Candidates, Standard Validators, and Governing Validators. Standard Validators participate in block production and operate Ronin Bridge. Governing Validators act as Standard Validators but also govern the network through proposals.

In this documentation, a distinction is made between a validator and a node operator. The former is responsible for managing the validator's profile, claiming rewards, and performing other GUI-related tasks, while the latter is in charge of setting up and running the client software on the node.

It's also common to use the term "validator" to refer to the validator node itself. 

## W
### Web3 games
Web3 games are video games that leverage blockchain technology to provide new features and experiences for players. These games often use non-fungible tokens (NFTs) to represent in-game assets and provide players with true ownership of those assets. They also incorporate decentralized finance (DeFi) elements, allowing players to earn cryptocurrency and participate in yield farming or liquidity provision within the game.

For example, Axie Infinity is a blockchain-based play-to-earn game built on the Ronin network. Players can buy, train, breed, and battle pets called Axies, available as NFTs to earn the in-game currency Smooth Love Potion (SLP). Axie Infinity players can also sell their Axies in the marketplace to earn real money.

