---
sidebar_position: 4
---

# Free Gas Proxy

![Interactive flow from users to Ronin network](<./free-gas-proxy.png>)

A service allows Axie users to access the Ronin blockchain and send transactions without paying any RON - the Ronin native currency. The number of free transactions per day depends on holding Axie's NFTs, according to the below configurations:

Amount free transactions from holding Axies:

* 1 or more normal Axies: 0 txs/month
* 1 or more MEO Axies: 2 txs/month
* 1 or more Origin Axies: 10 txs/month
* 1 or more Mystic Axies: 80 txs/month

Amount free transactions from holding Lands:

* 1 or more Savannah Land: 8 txs/month
* 1 or more Forest Lands: 26 txs/month
* 1 or more Arctic Lands: 72 txs/month
* 1 or more Mystic Lands: 160 txs/month

Free Transaction Calculation Mechanism

Each account will receive a certain number of free transactions per month based on the highest value NFT it has. For example, if an account has 1 Arctic land and 1 Mystic land it gets 160 tx/month rather than 72 + 160 tx/month.

Your total free transactions are based on an average of the Axie assets you owned and the amount of days you owned them in the month. For example, if you only owned a Mystic Axie for one day in a 30 day month then the formula is (1 Mystic Axie * 1 day) / 30 = 0 (decimal is not considered). You would not have any free transactions for the month. In order to receive the free transactions your wallet would need to hold the Mystic Axie for the entire month.


New users of Axie will have **20 one-time transactions** to start. Those 20 transactions will not be reset after a day and will be decreased first if the user also has daily free transactions.

The block to recalculate free gas transactions for each user is the first block confirmed from 00:00 UTC.

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
