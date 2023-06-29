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
    // Ronin Network basics
    {
      type: 'category',
      label: 'Basics',
      link: {
        type: 'generated-index',
        description: 'Everything you need to know about Ronin.',
        slug: '/basics',
      },
      items: [
        // Introduction to Ronin
        {
          type: 'doc',
          label: 'Introduction to Ronin',
          id: 'basics/introduction',
        },
        // Key concepts
        {
          type: 'doc',
          label: 'Key concepts',
          id: 'basics/key-concepts',
        },
        // White paper
        'basics/white-paper',
        // Tokenomics
        'basics/tokenomics',
        // Rewards
        'basics/rewards',
        // Security audits
        'basics/audits',
        // Roles
        {
          type: 'category',
          label: 'Roles',
          link: {
            type: 'generated-index',
            title: 'Roles',
            description: 'The main actors on Ronin.',
            slug: '/basics/roles',
          },
          items: [
            // Validator
            'basics/roles/validator',
            // Delegator
            'basics/roles/delegator',
          ],
        },
        // dApps
        {
          type: 'category',
          label: 'dApps',
          link: {
            type: 'generated-index',
            title: 'dApps',
            description: 'Decentralized applications (dApps) on Ronin.',
            slug: '/basics/dapps',
          },
          items: [
            // Ronin Bridge
            'basics/dapps/ronin-bridge',
            // Ronin Explorer
            'basics/dapps/ronin-explorer',
            // RON Staking
            'basics/dapps/ron-staking',
            // Ronin Safe
            'basics/dapps/multisig',
            // Katana DEX
            'basics/dapps/katana',
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
        description: 'Stake tokens, delegate your stake to validators, and claim rewards.',
        slug: '/delegators',
      },
      items: [
        // Buy RON
        'delegators/onboarding/buy-ron',
        // Become a delegator
        'delegators/onboarding/become-delegator',
        // Stake
        {
          type: 'category',
          label: 'Stake',
          link: {
            type: 'generated-index',
            title: 'Stake',
            description: 'Manage your RON stake.',
            slug: '/delegators/stake',
          },
          items: [
            // Stake more
            'delegators/stake/increase',
            // Move stake
            'delegators/stake/move',
            // Withdraw stake
            'delegators/stake/withdraw',
          ],
        },
        // Claim rewards
        {
          type: 'doc',
          label: 'Claim rewards',
          id: 'delegators/rewards/claim',
        },
        // Track validators
        'delegators/manage/track',
        // View activity
        'delegators/manage/activity',
        // FAQ
        'delegators/faq',
      ],
    },
    // Validators
    {
      type: 'category',
      label: 'Validators',
      link: {
        type: 'generated-index',
        description: 'Register as a validator, stake tokens, claim rewards, and manage your validator profile.',
        slug: '/validators',
      },
      items: [
        // Become a validator
        'validators/onboarding/become-validator',
        // Stake
        {
          type: 'category',
          label: 'Stake',
          link: {
            type: 'generated-index',
            title: 'Stake',
            description: 'Manage your RON stake.',
            slug: '/validators/stake',
          },
          items: [
            // Increase stake
            'validators/stake/increase',
            // Withdraw stake
            'validators/stake/withdraw',
          ],
        },
        // Claim rewards
        'validators/rewards/claim',
        // Manage your account
        {
          type: 'category',
          label: 'Manage your account',
          link: {
            type: 'generated-index',
            title: 'Manage your account', 
            description: "Features for managing your validator's account.",
            slug: '/validators/manage',
          },
          items: [
            // Change commission rate
            'validators/manage/commission',
            // Schedule maintenance
            'validators/manage/maintenance',
            // Renounce role
            'validators/manage/renounce',
            // View activity
            'validators/manage/activity',
            // View profile
            'validators/manage/profile',
            // View analytics
            'validators/manage/analytics',
            // Emergency exit
            'validators/manage/emergency-exit',
          ],
        },
        // Slashing and bailout
        {
          type: 'category',
          label: 'Slashing',
          link: {
            type: 'generated-index',
            title: 'Slashing',
            description: 'Learn about the slashing rules and options for a bailout.',
            slug: '/validators/slashing',
          },
          items: [
            // Slashing
            'validators/slashing/slashing',
            // Bailout
            'validators/slashing/bailout',
          ],
        },
        // Governance
        {
          type: 'category',
          label: 'Governance',
          link: {
            type: 'generated-index',
            title: 'Governance', 
            description: 'On-chain governance through proposals raised and voted on by Governing Validators.',
            slug: '/validators/governance',
          },
          items: [
            // Overview
            'validators/governance/overview',
            // Create a proposal
            'validators/governance/create',
            // Vote on a proposal
            'validators/governance/vote',
          ],
        },
        // FAQ
        'validators/faq',
      ],
    },
    {
      type: 'category',
      label: 'Node operators',
      link: {
        type: 'doc',
        id: 'node-operators/index',        
      },
      items: [
        // Introduction
        'node-operators/introduction',
        {
          type: 'category',
          label: 'Setup',
          link: {
            type: 'generated-index',
            title: 'Setup',
            slug: '/node-operators/mainnet',
            description: 'Node installation guides for the Ronin mainnet.'
          },
          items: [
            // Setup introduction
            'node-operators/setup/introduction',
            // Latest version
            'node-operators/setup/latest',
            // Run a validator and bridge together
            'node-operators/setup/mainnet/combined',
            // Run a standalone validator
            'node-operators/setup/mainnet/validator',
            // Run a standalone bridge
            'node-operators/setup/mainnet/bridge',
            // Run a full node
            'node-operators/setup/mainnet/non-validator',
            // Run an archive node
            'node-operators/setup/mainnet/archive',
            // Generate keys
            'node-operators/setup/generate-keys',
            // Install Ronin CLI
            'node-operators/setup/cli',
          ],
        },
        // Resources
        {
          type: 'category',
          label: 'Resources',
          link: {
            type: 'generated-index',
            title: 'Resources',
            slug: '/node-operators/resources',
            description: 'Resources for node operators.'
          },
          items: [
            // Network parameters
            {
              type: 'category',
              label: 'Network parameters',
              link: {
                type: 'generated-index',
                title: 'Network parameters',
                slug: '/node-operators/resources/parameters',
              },
              items: [
                // Ronin mainnet
                'node-operators/resources/parameters/mainnet',
                // Saigon testnet
                'node-operators/resources/parameters/testnet',
              ],
            },
            // Security hardening
            'node-operators/resources/security',
            // FAQ
            'node-operators/resources/faq',
          ],
        },
        {
          type: 'category',
          label: 'Saigon testnet',
          link: {
            type: 'generated-index',
            title: 'Saigon testnet',
            description: 'Node installation guides for the Saigon testnet.',
            slug: '/node-operators/testnet',
          },
          items: [
            // Run a validator and bridge together
            'node-operators/setup/testnet/combined',
            // Run a non-validator-node
            'node-operators/setup/testnet/non-validator',
            // Run a full archive node
            'node-operators/setup/testnet/archive',
          ],
        },
      ],
    },
    // Developers
    {
      type: 'doc',
      label: 'Developers',
      id: 'developers/portal',
    },
    // Community
    {
      type: 'category',
      label: 'Community',
      link: {
        type: 'generated-index',
        title: 'Community', 
        description: 'Community information and a contribution guide.',
        slug: '/community',
      },
      items: [
        'community/join',
        {
          type: 'category',
          label: 'Contribute',
          link: {
            type: 'generated-index',
            title: 'Contribute',
            description: 'Learn how to contribute to the Ronin documentation.',
            slug: '/community/contribute',
          },
          items: [
            // Contribution guide
            'CONTRIBUTING',
            // Content style guide
            'community/contribute/style-guide',
            // Content templates
            'community/contribute/templates',
          ],
        },
        // 'community/bug-bounty',
        // 'community/council',
        // 'community/governance',
        // 'community/grants',
      ],
    },
  ],
}

module.exports = sidebars
