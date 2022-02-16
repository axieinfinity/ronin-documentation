# Free Gas Proxy

![Interactive flow from users to Ronin network](<../.gitbook/assets/Untitled (2).png>)

A service allows Axie users to access the Ronin blockchain and send transactions without paying any RON - the Ronin native currency. The number of free transactions per day depends on holding Axie's NFTs, according to the below configurations\*\*:\*\*

Amount free transactions from holding Axies:

* 1 Normal Axie: 3 free txs/day
* 1 MEO Axie: 10 free txs/day
* 1 Origin Axie: 100 free txs/day
* 1 Mystic Axie: 500 free txs/day

Amount free transactions from holding Lands:

* 1 Savannah Land: 20 free txs/day
* 1 Forest Land: 60 txs/day
* 1 Arctic land: 180 txs/day
* 1 Mystic Land: 350 txs/day

New users of Axie will have **20 one-time transactions** to start. Those 20 transactions will not be reset after a day and will be decreased first if the user also has daily free transactions.

The block to recalculate free gas transactions for each user is the first block confirmed from 00:00 UTC.

For example:

> On the first day, you create an account on the Axie marketplace and get 20 free transactions. You buy 3 Axies, the number of remain free transactions is 7. On the second day, you have 7 free one-time transactions and 9 daily transactions - from having 3 Axies.

## Technical Specifications

### Supported transports

1. HTTP transport

### Supported methods

All methods are supported on testnet network. On the mainnet Ronin only supports the methods below:

* `eth_sendTransaction`
* `eth_sendRawTransaction`
* `eth_getTransactionReceipt`
* `eth_getTransactionByHash`
* `eth_gasPrice`
* `eth_getTransactionCount`
* `eth_estimateGas`
* `eth_chainId`
* `eth_getFreeGasRequests`

Returns number of free gas requests of a given address.

**Parameters**

* `DATA`, 20 Bytes - address to check for the number of free gas requests.

**Returns**

* `QUANTITY` - integer of the number of free gas requests in decimal.

**Example**

```
// Request body
{
    "jsonrpc":"2.0",
    "method":"eth_getFreeGasRequests",
    "params":[
        "0xb93e541bb854df8b9df1aafbed2156059bbcd84d"
    ],
    "id":1
}

// Response body
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": 100,
    "error": null
}
```
