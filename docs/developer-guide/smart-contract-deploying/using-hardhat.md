# Using Hardhat

Deploying smart contract is only available on testnet. For mainnet, please refer [builder program](https://axie.substack.com/p/axie-infinity-builders-program) for more information

### Install Hardhat

```
npm init && npm install dotenv && npm install --save-dev hardhat
```

To use your local installation of Hardhat, you need to use `npx` to run it (i.e. `npx hardhat`).

Create hardhat project by using the following command

```
npx hardhat
```

Follow the instruction on the terminal to finish setting project

### Configuration

Add the following configuration into `hardhat.config.js`

```
require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path:__dirname+'/.env'})

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const privateKeys = [`your-main-address-private-key`]
module.exports = {
  defaultNetwork: "ronin",
  networks: {
    hardhat: {
    },
    ronin: {
      chainId: 2022,
      url: "http://localhost:8545",
      accounts: privateKeys
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0"
      }
    ]
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 600000
  }
};
```

### Compiling & deploying smart contract

* You can easily find `Greeter.sol` in contracts folder. If you don't, add `Greeter.sol` to `contracts` folder with the following code

```
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    string private greeting;

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
```

* Compile it by running this:

```
npx hardhat compile
```

* Next, run `scripts/sample-script.js`. It should look like this:

```
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

By running:

```
npx hardhat run scripts/sample-script.js --network ronin
```

The result should be like this:

```
Deploying a Greeter with greeting: Hello, Hardhat!
Greeter deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```
