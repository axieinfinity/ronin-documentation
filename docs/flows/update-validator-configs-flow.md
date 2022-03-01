# Update validator configs flow

The validator contract on the Ronin chain named `SidechainValidator` is designed to respect the decentralized attribute so that there is no admin of the contract.

Whenever we want to add, remove a validator, or update the effective threshold; the represent admin has to submit a change transaction to `MainchainValidator`, which will emit the change event. The Ronin Bridge informs the change event to `SidechainValidator` when the event is emitted. As soon as the `SidechainValidator` on the Ronin chain has information about the change and enough validators acknowledged, the change takes effect.

![Update validator configs flow](<./update-validator-configs-flow.png>)
