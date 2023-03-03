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

  sidebar: [
    // Introduction
    {
      type: 'doc',
      label: 'Introduction',
      id: 'introduction',
    },
    {
      // Blockchain basics
      type: 'category',
      label: 'Blockchain basics',
      link: {
        type: 'generated-index',
        title: 'Blockchain basics', 
      },
      items: [
        'basics/blockchain/blockchain',
        'basics/blockchain/blockchain-network',
        'basics/blockchain/bridge',
        'basics/blockchain/client',
        'basics/blockchain/consensus',
        'basics/blockchain/dapp',
        'basics/blockchain/ethereum',
        'basics/blockchain/gas',
        'basics/blockchain/node',
        'basics/blockchain/sidechain',
        'basics/blockchain/solidity',
      ],
    },
    {
      // Ronin basics
      type: 'category',
      label: 'Ronin Network basics',
      link: {
        type: 'generated-index',
        title: 'Ronin Network basics',
      },
      items: [
        // Introduction
        'basics/ronin/introduction',
        // Components
        {
          type: 'category',
          label: 'Components',
          link: {
            type: 'generated-index',
            title: 'Components',
          },
          items: [
            // Ronin Bridge
            {
              type: 'category',
              label: 'Ronin Bridge',
              link: {
                type: 'doc',
                id: 'basics/ronin/components/ronin-bridge/ronin-bridge',
              },
              items: [
                // Governance
                'basics/ronin/components/ronin-bridge/governance',
                // Fee structure
                'basics/ronin/components/ronin-bridge/fee-structure',
                // Withdrawal limits
                'basics/ronin/components/ronin-bridge/withdrawal-limits',
              ],
            },
            // Ronin Explorer
            'basics/ronin/components/ronin-explorer',
            // dApps
            'basics/ronin/components/dapps',
          ],
        },
        // Platform
        {
          type: 'category',
          label: 'Platform',
          link: {
            type: 'generated-index',
            title: 'Platform',
          },
          items: [
            // Comparison
            'basics/ronin/platform/comparison',
            // Roadmap
            'basics/ronin/platform/roadmap',
            // Tokenomics
            'basics/ronin/platform/tokenomics',
            // Configurations
            {
              type: 'category',
              label: 'Configurations',
              items: [
                // Mainnet
                'basics/ronin/platform/configs/mainnet',
                // Testnet
                'basics/ronin/platform/configs/testnet',
              ],
            },
            // Transaction life cycle
            'basics/ronin/platform/transaction',
            // White paper
            'basics/ronin/platform/white-paper',
          ],
        },
        // Roles
        {
          type: 'category',
          label: 'Roles',
          link: {
            type: 'generated-index',
            title: 'Roles',
          },
          items: [
            // Validator
            'basics/ronin/roles/validator',
            // Delegator
            'basics/ronin/roles/delegator',
          ],
        },
      ],
    },
    // Delegators
    {
      type: 'category',
      label: 'Delegators',
      link: {
        type: 'generated-index',
        title: 'Delegators',
        description: 'Learn how to stake tokens, delegate your stake to validators, and claim rewards.'
      },
      items: [
        // Purchase RON
        'delegators/onboarding/purchase',
        // Become a delegator
        'delegators/onboarding/become-delegator',
        // Stake
        {
          type: 'category',
          label: 'Stake',
          link: {
            type: 'generated-index',
            title: 'Stake',
            description: 'Move or withdraw your stake.',
          },
          items: [
            // Move stake
            'delegators/stake/move',
            // Withdraw stake
            'delegators/stake/withdraw',
          ],
        },
        // Rewards
        {
          type: 'category',
          label: 'Rewards',
          link: {
            type: 'generated-index',
            title: 'Rewards',
            description: 'Learn about reward types and how to claim rewards.',
          },
          items: [
            // Reward types
            'delegators/rewards/types',
            // Claim rewards
            'delegators/rewards/claim',
          ],
        },
        // FAQ
        {
          type: 'doc',
          label: 'FAQ',
          id: 'delegators/faq',
        },
      ],
    },
    // Validators
    {
      type: 'category',
      label: 'Validators',
      link: {
        type: 'generated-index',
        title: 'Validators', 
        description: 'Learn how to set up nodes, manage profile, stake, and claim rewards.',
      },
      items: [
        'validators/validator/onboarding/become-validator',
        // Stake
        {
          type: 'category',
          label: 'Stake',
          link: {
            type: 'generated-index',
            title: 'Stake',
            description: 'Learn how to increase or withdraw your stake.'
          },
          items: [
            // Increase stake
            'validators/validator/stake/increase',
            // Withdraw stake
            'validators/validator/stake/withdraw',
          ],
        },
        // Rewards
        {
          type: 'category',
          label: 'Rewards',
          link: {
            type: 'generated-index',
            title: 'Rewards',
            description: 'Learn about reward types and how to claim rewards.'
          },
          items: [
            // Reward types
            'validators/validator/rewards/types',
            // Claim rewards
            'validators/validator/rewards/claim',
          ],
        },
        // Manage profile
        {
          type: 'category',
          label: 'Manage profile',
          link: {
            type: 'generated-index',
            title: 'Manage profile', 
            description: 'Learn how to set commission rate, schedule maintenance, and view your analytics and activities.',
          },
          items: [
            {
              type: 'doc',
              label: 'Change commission rate',
              id: 'validators/validator/manage-profile/commission',
            },
            {
              type: 'doc',
              label: 'Schedule maintenance mode',
              id: 'validators/validator/manage-profile/maintenance',
            },
            {
              type: 'doc',
              label: 'Renounce your role',
              id: 'validators/validator/manage-profile/renounce',
            },
            {
              type: 'doc',
              label: 'View activities',
              id: 'validators/validator/manage-profile/activities',
            },
            {
              type: 'doc',
              label: 'View profile',
              id: 'validators/validator/manage-profile/profile',
            },
            {
              type: 'doc',
              label: 'View analytics',
              id: 'validators/validator/manage-profile/analytics',
            },
          ],
        },
        {
          // Bridge operator
          type: 'category',
          label: 'Bridge operators',
          link: {
            type: 'generated-index',
            title: 'Bridge operator', 
            description: 'Learn how set up and run a bridge operator node.',
          },
          items: [
            // Run a bridge operator node
            'validators/bridge-operator/setup',
          ],
        },
        'validators/slashing/slashing',
        // Bailout
        'validators/slashing/bailout',
        // FAQ
        {
          type: 'doc',
          label: 'FAQ',
          id: 'validators/faq',
        },
      ],
    },
    // Developers
    {
      // Validator technician
      type: 'category',
      label: 'Node operators',
      link: {
        type: 'generated-index',
        title: 'Validator technicians',
        description: 'Learn how to set up and run a validator node.',
      },
      items: [
        // API
        {
          type: 'link',
          label: 'API',
          href: 'https://documenter.getpostman.com/view/1372857/UVeKqQMn',
        },
        // CLI guide
        'validators/technician/cli',
        // Minimum requirements
        'validators/technician/minimum-requirements',
        // Run a validator node (testnet)
        'validators/technician/setup',
        // Run a validator node (PoA mainnet)
        'validators/technician/run-validator-node',
        // Run a non-validator-node (PoA mainnet)
        'validators/technician/run-non-validator-node',
        // Bridge operator
        'basics/ronin/roles/bridge-operator',
        // Node setup tutorials
        {
          type: 'category',
          label: 'Tutorials',
          link: {
            type: 'generated-index',
            title: 'Tutorials',
          },
          items: [
            // Run a validator node on AWS
            'validators/technician/tutorials/run-node-on-aws',
            // Run a validator node on GCP
            'validators/technician/tutorials/run-node-on-gcp',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Developers',
      link: {
        type: 'generated-index',
        title: 'Developers', 
        description: 'Build your decentralized application on Ronin Network.',
      },
      items: [
        {
          type: 'category',
          label: 'Smart contracts',
          link: {
            type: 'generated-index',
            title: 'Deploy smart contracts', 
            description: 'Guides for smart contract deployment.',
          },
          items: [
            'developers/smart-contract/using-hardhat',
            'developers/smart-contract/using-truffle',
          ],
        },
        {
          type: 'category',
          label: 'Ronin Wallet',
          link: {
            type: 'generated-index',
            title: 'Integrate Ronin Wallet', 
            description: 'Guides for Ronin Wallet integration.',
          },
          items: [
            'developers/ronin-wallet/integrate',
            'developers/ronin-wallet/switch-network',
          ],
        },
        // FAQ
        {
          type: 'doc',
          label: 'FAQ',
          id: 'developers/faq',
        },
      ],
    },
    // Contributors
    {
      type: 'category',
      label: 'Contributors',
      link: {
        type: 'generated-index',
        title: 'Contributors', 
        description: 'Contribution guide, style guide, and a bug bounty program.',
      },
      items: [
        'contributors/contribution-guide',
        'contributors/style-guide',
        {
          type: 'category',
          label: 'Templates',
          link: {
            type: 'generated-index',
            title: 'Templates', 
            description: 'Learn about the templates used to create this documentation.',
          },
          items: [
            'contributors/templates/concept',
            'contributors/templates/task',
            'contributors/templates/reference',
            'contributors/templates/troubleshooting',
          ],
        },
        'contributors/bug-bounty',
      ],
    },
    // Resources
    {
      type: 'category',
      label: 'Resources',
      link: {
        type: 'generated-index',
        title: 'Resources', 
      },
      items: [
        'resources/glossary',
        'resources/audits',
        'resources/resources',
      ],
    },
  ],
}

module.exports = sidebars
