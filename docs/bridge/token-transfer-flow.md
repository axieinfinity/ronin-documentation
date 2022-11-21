---
description: Token deposit and withdrawal flow
---

# Token transfer via Bridge

### Token Deposit

In order to have the ability to transfer tokens on Ronin, users must first transfer them to the MainchainGateway contract on the Ethereum blockchain. This will emit a "deposit event" — a term used to describe and record the information resulting from this transaction.

This deposit event is then picked up by the Ronin Bridge which transmits these events to the MainchainGatewayand SidechainGateway contracts on the Ronin. As soon as the Gateway smart contract on Ronin has information about the deposited tokens on the Ethereum Gateway and enough validators have acknowledged, SidechainGateway creates a clone of these tokens on Ronin.

![Token deposit flow](<./token-transfer-flow.png>)

### Token Withdrawal​

In order to withdraw tokens from Ronin back to Ethereum, users must first transfer them first to the SidechainGateway contract on the Ronin blockchain. This will emit a "withdrawal event".

The withdrawal event is then picked up by the Ronin Bridge, which transmits these events to SidechainGateway and submits the validator signatures back to the contract. As soon as the SidechainGateway contract reaches the effective signature threshold, users can obtain these signatures and submit them to the MainchainValidator contract on Ethereum. The gateway contract will then proceed to release the tokens.

![Token withdrawal flow](<./token-witdrawal-flow.png>)
