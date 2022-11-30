/**
 * Creating a sidebar enables you to:
  - create an ordered group of docs
  - render a sidebar for each doc of that group
  - provide next/previous navigation

  The sidebars can be generated from the filesystem, or explicitly defined here.

  Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'category',
      label: 'Overview',
      // link: { type: 'doc', id: 'intro/introduction' },
      items: [
        {
          type: 'doc',
          label: 'Welcome to Ronin',
          id: 'intro/introduction',
        },
        {
          type: 'doc',
          label: 'Whitepaper (Testnet)',
          id: 'intro/whitepaper',
        },
        {
          type: 'category',
          label: 'Ronin Network',
          items: [
            {
              type: 'doc',
              label: 'Mainnet',
              id: 'platform/ronin-network/mainnet',
            },
            {
              type: 'doc',
              label: 'Saigon Testnet',
              id: 'intro/saigon-testnet',
            },
          ],       
        },  
        {
          type: 'doc',
          label: 'Tokenomic',
          id: 'platform/tokenomic',
        },
        {
          type: 'doc',
          label: 'Transaction life cycle',
          id: 'platform/transaction-lifecycle',
        },      
      ],
    },
    {
      type: 'category',
      label: 'Staking (Testnet)',
      link: { type: 'doc', id: 'stake/staking' },
      items: [
        {
          type: 'doc',
          label: 'Access the dashboard',
          id: 'stake/dashboard',
        },
        {
          type: 'doc',
          label: 'Delegate to a validator',
          id: 'stake/delegate',
        },
        {
          type: 'doc',
          label: 'Withdraw and move stake',
          id: 'stake/withdraw&move',
        },
        {
          type: 'doc',
          label: 'Claim reward',
          id: 'stake/claim',
        },
      ],
    },
    {
      type: 'category',
      label: 'Validator',
      link: { type: 'doc', id: 'components/validators' },
      items: [ 
        {
          type: 'category',
          label: 'Mainnet',          
          items: [
                {
                  type: 'link',
                  label: 'API',
                  href: 'https://documenter.getpostman.com/view/1372857/UVeKqQMn',
                },
                {
                  type: 'doc',
                  label: 'CLI',
                  id: 'developer-guide/cli',
                },
                {
                  type: 'doc',
                  label: 'Minimum requirements',
                  id: 'developer-guide/minimum-requirements',
                },
                {
                  type: 'doc',
                  label: 'Run a Validator node',
                  id: 'developer-guide/running-validating-node',
                },
                {
                  type: 'doc',
                  label: 'Run a Non Validator node',
                  id: 'developer-guide/running-non-validating-node',
                },
                {
                  type: 'doc',
                  label: 'Upgrade Ronin Node',
                  id: 'developer-guide/upgrade-ronin-node',
                },
          ],
        }, 
        {
          type: 'category',
          label: 'Testnet',
          link: { type: 'doc', id: 'validator/val' },
          items: [
          ],
        },
        // {
        //   type: 'doc',
        //   label: 'Validator responsibility',
        //   id: 'validator/responsibility',
        // },
        // {
        //   type: 'doc',
        //   label: 'Set up a validator node',
        //   id: 'validator/setup',
        // },
        // {
        //   type: 'doc',
        //   label: 'Registration',
        //   id: 'validator/registration',
        // },
      ],
    },
    {
      type: 'category',
      label: 'Bridge',
      link: { type: 'doc', id: 'components/ronin-bridge-v2' },
      items: [
        // {
        //   type: 'doc',
        //   label: 'Bridge V2',
        //   id: 'bridge/ronin-bridge-v2',
        // },
      ],
    },
    {
      type: 'category',
      label: 'Governance',
      link: { type: 'doc', id: 'governance/gov' },
      items: [
        // {
        //   type: 'doc',
        //   label: 'Create a proposal',
        //   id: 'governance/create',
        // },
        // {
        //   type: 'doc',
        //   label: 'Vote on a proposal',
        //   id: 'governance/vote',
        // },
      ],
    },
    {
      type: 'category',
      label: 'Developer Guides',
      // link: { type: 'doc', id: 'developer/dev' },
      items: [
        {
          type: 'category',
          label: 'Ronin Wallet Integration',
          items: [
            {
              type: 'doc',
              label: 'Wallet provider',
              id: 'developer-guide/integrate-ronin-wallet',
            },
            {
              type: 'doc',
              label: 'Network switching',
              id: 'developer-guide/switch-wallet-to-testnet',
            },
          ]
        },
        {
          type: 'category',
          label: 'Smart contract deploying',
          items: [
            {
              type: 'doc',
              label: 'Using Truffle',
              id: 'developer-guide/smart-contract-deploying/using-truffle',
            },
            {
              type: 'doc',
              label: 'Using Hardhat',
              id: 'developer-guide/smart-contract-deploying/using-hardhat',
            },
          ],
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Getting Started',
    //   link: { type: 'doc', id: 'developer-guide/README' },
    //   items: [
    //     {
    //       type: 'link',
    //       label: 'API',
    //       href: 'https://documenter.getpostman.com/view/1372857/UVeKqQMn',
    //     },
    //     {
    //       type: 'doc',
    //       label: 'CLI',
    //       id: 'developer-guide/cli',
    //     },
    //     {
    //       type: 'doc',
    //       label: 'Minimum requirements',
    //       id: 'developer-guide/minimum-requirements',
    //     },
    //     {
    //       type: 'category',
    //       label: 'Validator',
    //       items: [
    //         {
    //           type: 'doc',
    //           label: 'Run a Validator node',
    //           id: 'developer-guide/running-validating-node',
    //         },
    //         {
    //           type: 'category',
    //           label: 'Change logs',
    //           items: [
    //             {
    //               type: 'doc',
    //               label: 'CL2 - Bridge Upgrade',
    //               id: 'developer-guide/upgrade-ronin-bridge',
    //             },
    //             {
    //               type: 'doc',
    //               label: 'CL1 - Ronin Hardfork',
    //               id: 'developer-guide/upgrade-ronin-node',
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Non Validator',
    //       items: [
    //         {
    //           type: 'doc',
    //           label: 'Run a Non Validator node',
    //           id: 'developer-guide/running-non-validating-node',
    //         },
    //         {
    //           type: 'doc',
    //           label: 'Upgrade Ronin Node',
    //           id: 'developer-guide/upgrade-ronin-node',
    //         },
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Smart contract deploying',
    //       items: [
    //         {
    //           type: 'doc',
    //           label: 'Using Truffle',
    //           id: 'developer-guide/smart-contract-deploying/using-truffle',
    //         },
    //         {
    //           type: 'doc',
    //           label: 'Using Hardhat',
    //           id: 'developer-guide/smart-contract-deploying/using-hardhat',
    //         },
    //       ],
    //     },
    //     {
    //       type: 'doc',
    //       label: 'Integrate Ronin Wallet',
    //       id: 'developer-guide/integrate-ronin-wallet',
    //     },
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Platform',
    //   link: { type: 'doc', id: 'platform/README' },
    //   items: [
    //     {
    //       type: 'category',
    //       label: 'Ronin Network',
    //       items: [
    //         {
    //           type: 'doc',
    //           label: 'Mainnet',
    //           id: 'platform/ronin-network/mainnet',
    //         },
    //         {
    //           type: 'doc',
    //           label: 'Testnet',
    //           id: 'platform/ronin-network/testnet',
    //         },
    //       ],
    //     },
    //     {
    //       type: 'link',
    //       label: 'Lite Paper',
    //       href: 'https://litepaper.roninchain.com/',
    //     },
    //     {
    //       type: 'doc',
    //       label: 'Comparison',
    //       id: 'platform/comparison',
    //     },
    //     {
    //       type: 'doc',
    //       label: 'Road Map',
    //       id: 'platform/road-map',
    //     },
    //     {
    //       type: 'doc',
    //       label: 'Tokenomic',
    //       id: 'platform/tokenomic',
    //     },
    //     {
    //       type: 'doc',
    //       label: 'Transaction life cycle',
    //       id: 'platform/transaction-lifecycle',
    //     },
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Components',
    //   link: { type: 'doc', id: 'components/README' },
    //   items: [
    //     {
    //       type: 'doc',
    //       label: 'Free Gas Proxy',
    //       id: 'components/free-gas-proxy',
    //     },
    //     {
    //       type: 'doc',
    //       label: 'Ronin Explorer',
    //       id: 'components/ronin-explorer',
    //     },
    //     {
    //       type: 'doc',
    //       label: 'Transfer Gateway and Bridge',
    //       id: 'components/transfer-gateway-bridge',
    //     },
    //     {
    //       type: 'doc',
    //       label: 'Validators',
    //       id: 'components/validators',
    //     },
    //     {
    //       type: 'doc',
    //       label: 'Bridge V2',
    //       id: 'components/ronin-bridge-v2',
    //     },
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Flows',
    //   items: [
    //     {
    //       type: 'doc',
    //       label: 'Token transferring',
    //       id: 'flows/token-transfer-flow',
    //     },
    //     {
    //       type: 'doc',
    //       label: 'Update validator configs',
    //       id: 'flows/update-validator-configs-flow',
    //     },
    //   ],
    // },
  ],
}

module.exports = sidebars
