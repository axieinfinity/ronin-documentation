# Transaction Lifecycle

Once a transaction has been confirmed, the Ronin wallet identifies your transaction type:

* If the transaction is paid with RON then your transaction will be sent to an RPC node.
* Otherwise, the free gas transaction will be sent to the free gas proxy to confirm your account still has free transactions and then forwarded randomly to one of our validators.

#### Paid Transaction

The transaction is then broadcast to the other nodes and included in the pool of each node with lots of other transactions. Once it is passed into the nominated validator pool, your transaction is picked up and then included in a block in order to verify the transactions by executing them. You may end up waiting at this stage if the network is busy and validators aren't able to keep up.

Your transaction is propagated to other nodes from the beginning. Whenever the chain is reorganized, the transaction is still in the pool of other nodes and it will be mined in a block in the next several blocks.

#### Free Transaction

The free transaction is forwarded randomly into one of our nodes. Once a validator receives your transaction, it will be considered a local transaction and only can be mined by that validator node.

The duration you have to wait for your transaction to be mined depends on which the validator received the transaction. In the worst case, your transaction is forwarded to a validator node that has just created a new block and that validator must wait its turn to generate a new block, which can take you up to 24 seconds because the block time is ~3s and the node have to wait next 9 validators before it can continue mining.

Once your transaction is mined, the node wipes that transaction away. Since the transaction does not appear in other nodes, in the event that the Ronin network is reorganized the transaction cannot be found at any node and it is considered dropped.

### Transaction Drop

The transaction drop is not only related to the forwarding mechanism of the free gas transaction explained above, it is also derived from the resource and configuration of the node. Our default configuration has a capacity of 10.000 transactions in the pool, but our nodes can only contain until the resource limit is reached.

The transaction is considered to be dropped when the pool is full and the submitted transaction is cheaper than (or as cheap as) the lowest priced transaction currently being tracked.

![Ronin Transaction Lifecycle Diagram](<./image_3.png>)
