# Transaction Lifecycle

Once a user confirms a transaction, the Ronin wallet will identify the type as either free or paid. Based on that, the transaction deterministically sent to complete its associated lifecycle

<!-- * If the transaction is paid with RON then your transaction will be sent to an RPC node.
* Otherwise, the free gas transaction will be sent to the free gas proxy to confirm your account still has free transactions and then forwarded randomly to one of our validators. -->

#### Paid Transactions Lifecycle 

If the transaction is paid with RON then it will first be sent to an RPC node. Afterwards, it will be broadcast to the other nodes and included in each node’s aggregated pool of transactions. Once it is passed into the nominated validator pool, the transaction is picked up and included in a block to be executed and verified. A user may end up waiting at this stage if the network is busy and validators aren't able to keep up.

A paid transaction is propagated to other nodes from the beginning. Whenever the chain is reorganized, the transaction is still in the pool of other nodes and it will be mined in a block in the next several blocks.

#### Free Transaction

If the transaction is NOT paid with RON (a free transaction), it will first be sent to the free gas proxy to confirm the account still has free transactions available. Next, it will be forwarded to a random Ronin Validator where it can then only be mined by that specific validator node.

The wait time for the transaction to be mined is variable, depending on which the validator received the transaction. In the worst case, the transaction is forwarded to a validator node that has just created a new block and that validator must wait its turn to generate a new block, taking 24 seconds in total. This is because block time is ~3s and the node will have to wait for the next 9 validators before it can continue mining.

Once your transaction is mined, the node wipes that transaction away. However; in the event that the Ronin network is reorganized, the transaction is considered dropped, since free transactions don’t appear in any other nodes.

### Transaction Drop

Transaction drops are not unique to this aforementioned free gas forwarding mechanism. They can also be attributed to the node’s configuration and resources. The default configuration has a capacity of 10.000 transactions in the pool, but our nodes can only contain until the resource limit is reached.

The transaction is considered to be dropped when the pool is full and the submitted transaction is cheaper than (or as cheap as) the lowest priced transaction currently being tracked.

![Ronin Transaction Lifecycle Diagram](<./image_3.png>)
