---
description: Token deposit and withdrawal flow
---

# Token transfer flows

### Token Deposit

To allow users to transfer their tokens on Ronin, they have to transfer them first to the `MainchainGateway` contract on the Ethereum blockchain which then emits a "deposit event" — the information that the user sent tokens to the Gateway smart contract.

This deposit event is then picked up by the Ronin Bridge which transmits these events to the `MainchainGateway`and `SidechainGateway` contracts on the Ronin. As soon as the Gateway smart contract on Ronin has information about the deposited tokens on the Ethereum Gateway and enough validators have acknowledged,  `SidechainGateway` creates a clone of these tokens on Ronin.

![Token deposit flow](<../.gitbook/assets/Blank diagram (7).png>)

### Token Withdrawal

To allow users to withdraw their tokens from Ronin back to Ethereum, they have to transfer them first to the `SidechainGateway` contract which then emits a "withdrawal event".

The withdrawal event is then picked up by the Ronin Bridge, which transmits observe these events to `SidechainGateway`and submits the validator signatures back to the contract. As soon as the `SidechainGateway` has a signature amount that reaches the effective threshold, the users can get these signatures and submit them to the `MainchainValidator` contract on Ethereum, the gateway contract will then release tokens.



![Token withdrawal flow](<../.gitbook/assets/Blank diagram (9).png>)
