# Integrate Ronin Wallet

Ronin Wallet is a non-custodial crypto wallet. It is available as a browser extension and as a mobile application. Ronin Wallet lets you interact with Ronin Network Dapps and manage your assets.

## Allowed List

If you are here, you are probably thinking about shipping a cool product on Ronin Network. For now we only allow certain sites to work with Ronin Wallet. Although you can always start developing with Ronin Wallet with a `localhost` dApp project. 

To make it to production you can apply to our [Builders Program](https://axie.substack.com/p/builders). We are excited to see your idea.

## Provider

Ronin Wallet injects the global API to websites which are on the allowed list. This allows websites to communicate with Ronin Wallet and perform tasks such as requesting signatures, sending transactions or reading data from Ronin Network public RPC. 

`window.ronin.provider` implements the `sendAsync` method which handles a JSON RPC request with a callback. In the future we will adopt EIP 1193 to make it more standard.

```tsx
window.ronin.provider.sendAsync({ id: 0, jsonrpc: '2.0', method: 'eth_accounts' }, (error, response) => {
  console.log('Selected address: ', response.result[0])
})
```

`window.ronin.roninEvent` will emit `account_changed` event with an address whenever the user changes their selected account in Ronin Wallet.

```tsx
window.ronin.roninEvent.addEventListener('account_changed', () => {
  // handle account changed event
})
```

## Examples

We will discuss how to connect Ronin Wallet extension with a web project in the following sections. The stack we are using is

- TypeScript
- [Ethers](https://docs.ethers.io/)

## Setup with Ethers

1. Install Ethers umbrella packages

```bash
yarn add ethers
```

 2. Create a ronin-connect file

```tsx
import * as ethers from 'ethers'

// Types declaration for Ronin global variable
declare global {
  interface Window { 
    ronin: {
      provider: ethers.providers.ExternalProvider
      roninEvent: EventListener
    } 
  }
}

export const connectRoninWallet = async () => {
  // Check if Ronin Wallet is installed
  if (window.ronin === undefined) {
    throw new Error('Ronin Wallet is not installed')
  }

  const provider = new ethers.providers.Web3Provider(window.ronin.provider)
  // Check if current Ronin Wallet is unlocked
  const firstAddress = await provider.getSigner().getAddress()
  if (firstAddress === undefined) {
    throw new Error('Ronin Wallet is not unlocked')
  }

  return { address: firstAddress, provider }
}
```

The `connectRoninWallet` function above will return `address` which is the selected address in Ronin Wallet and a `provider` - an Ethers Provider instance. Ethers Provider handles RPC request constructing under the hood so you can focus on building your application, with TypeScript support.

3. Signing a personal message example

```tsx
export const signMessage = async (message: string) => {
  const { provider } = await connectRoninWallet()
  const signature = await provider.getSigner().signMessage(message)
  return signature
}
```

For more examples with Ethers please go throught [Ethers](https://docs.ethers.io/) document.
