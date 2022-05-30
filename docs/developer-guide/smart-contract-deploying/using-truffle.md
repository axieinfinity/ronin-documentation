# Using Truffle

Deployment of smart contracts is only available on testnet. For mainnet, please refer to the [builder program](https://axie.substack.com/p/axie-infinity-builders-program) for more information.

### Install truffle

```
npm install -g truffle
```

### Creating a project

* Init new project

```
mkdir greeter && cd greeter && truffle init
```

* Modify `truffle-config.js`

```
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard port (default: none)
      network_id: "2021",    // 2020: mainnet, 2021: testnet
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0"  
    }
  }
}
```

Add your wallet mnemonic to `.secret` file

### Deploying smart contract

* Add `Greeter.sol` into `contracts` folder

```
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Greeter {
    string private greeting;

    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}

```

* Add deploy script `2_deploy_contracts.js` to folder `migrations`

```
const Greeter = artifacts.require("Greeter");

module.exports = function (deployer) {
  deployer.deploy(Greeter, "Hello");
};
```

* Deploy `Greeter.sol`

```
truffle compile && truffle migrate
```

The contract should be compiled and deployed

```
2_deploy_contracts.js
=====================

   Deploying 'Greeter'
   -------------------
   > transaction hash:    0xbf7c0c27ecb5095af6b6a54a0f36093293cc9b38039d564d6dc7fee3c266f9f8
   > Blocks: 1            Seconds: 4
   > contract address:    0x2A9460Fb9CfEdf5B4Dc8F97Afa0c6b07b3663136
   > block number:        218607
   > block timestamp:     1645412157
   > account:             0x58b0df8B91878AD6f18E69c60Ac93Fe7d6e96b31
   > balance:             54999999.978546693
   > gas used:            326181 (0x4fa25)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00652362 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00652362 ETH
```
