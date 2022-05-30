# Update validator configs flow

The validator contract on the Ronin chain (named SidechainValidator) is designed to respect key aspects of decentralization, so there is no admin of the contract.

Whenever we want to add, remove a validator, or update the effective threshold; the representative admin has to emit a change transaction to MainchainValidator, which will initialize the change event. The Ronin Bridge informs the change event to SidechainValidator when the event is emitted, and as soon as enough validators acknowledge it, the change takes effect.

![Update validator configs flow](<./update-validator-configs-flow.png>)
