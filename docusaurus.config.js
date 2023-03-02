// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const currentYear = new Date().getFullYear()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ronin Network',
  tagline: 'Lets build together',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'axieinfinity', // Usually your GitHub org/user name.
  projectName: 'ronin-document', // Usually your repo name.

  staticDirectories: ['static'],

  plugins: [
    'docusaurus-plugin-sass',
    require.resolve('docusaurus-lunr-search'),
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        googleAnalytics: {
          trackingID: 'UA-150383258-4',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ronin Network',
        logo: {
          alt: 'Ronin Network Logo',
          src: 'img/logo.svg',
        },
        items: [
          // Introduction
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Welcome',
          },
          // Basics
          // {
          //   type: 'dropdown',
          //   label: 'Basics',
          //   items: [
          //     {
          //       label: 'Blockchain',
          //       to: 'docs/category/blockchain-basics',
          //     },
          //     {
          //       label: 'Ronin Network',
          //       to: 'docs/category/ronin-network-basics',
          //     },
          //   ],
          // },
          // Delegators
          // {
          //   type: 'dropdown',
          //   label: 'Delegators',
          //   items: [
          //     {
          //       label: 'Purchase RON',
          //       to: 'docs/delegators/onboarding/purchase',
          //     },
          //     {
          //       label: 'Become a delegator',
          //       to: 'docs/delegators/onboarding/become-delegator',
          //     },
          //     {
          //       label: 'Claim rewards',
          //       to: 'docs/delegators/rewards/claim',
          //     },
          //     {
          //       label: 'Move stake',
          //       to: 'docs/delegators/stake/move',
          //     },
          //     {
          //       label: 'Withdraw stake',
          //       to: 'docs/delegators/stake/withdraw',
          //     },
          //     {
          //       label: 'FAQ',
          //       to: 'docs/delegators/faq',
          //     },
          //   ],
          // },
          // // Validators
          // {
          //   type: 'dropdown',
          //   label: 'Validators',
          //   items: [
          //     {
          //       label: 'Run a validator node',
          //       to: 'docs/validators/technician/setup',
          //     },
          //     {
          //       label: 'Become a validator',
          //       to: 'docs/validators/validator/onboarding/become-validator',
          //     },
          //     {
          //       label: 'Claim rewards',
          //       to: 'docs/validators/validator/rewards/claim',
          //     },
          //     {
          //       label: 'Increase stake',
          //       to: 'docs/validators/validator/stake/increase',
          //     },
          //     {
          //       label: 'Withdraw stake',
          //       to: 'docs/validators/validator/stake/withdraw',
          //     },
          //     {
          //       label: 'Manage profile',
          //       to: 'docs/category/manage-profile',
          //     },
          //     {
          //       label: 'Slashing and bailout',
          //       to: 'docs/category/slashing-and-bailout'
          //     },
          //     {
          //       label: 'FAQ',
          //       to: 'docs/validators/faq',
          //     },
          //   ],
          // },
          // // Developers
          // {
          //   type: 'dropdown',
          //   label: 'Developers',
          //   items: [
          //     {
          //       to: 'docs/category/smart-contracts',
          //       label: 'Deploy smart contracts',
          //     },
          //     {
          //       to: 'docs/category/ronin-wallet',
          //       label: 'Integrate Ronin Wallet',
          //     },
          //     {
          //       to: 'docs/developers/faq',
          //       label: 'FAQ',
          //     },
          //   ],
          // },
          // // Contributors
          // {
          //   type: 'dropdown',
          //   label: 'Contributors',
          //   items: [
          //     {
          //       to: 'docs/contributors/contribution-guide',
          //       label: 'Contribution guide',
          //     },
          //     {
          //       to: 'docs/contributors/style-guide',
          //       label: 'Style guide',
          //     },
          //     {
          //       to: 'docs/contributors/bug-bounty',
          //       label: 'Bug bounty program',
          //     },
          //   ],
          // },
          // // Resources
          // {
          //   type: 'dropdown',
          //   label: 'Resources',
          //   items: [
          //     {
          //       to: 'docs/basics/ronin/platform/white-paper',
          //       label: 'White paper',
          //     },
          //     {
          //       to: 'docs/resources/glossary',
          //       label: 'Glossary',
          //     },
          //     {
          //       to: 'docs/resources/audits',
          //       label: 'Security audits',
          //     },
          //     {
          //       to: 'docs/resources',
          //       label: 'Related documentation',
          //     },
          //   ],
          // },
          // // Search
          // {
          //   type: 'search',
          //   position: 'right',
          // },
        ],
      },
      // announcementBar: {
      //   id: 'announcement',
      //   content:
      //     '🎉&nbsp;<strong>Saigon</strong> - an open testnet for Ronin, is live! <a target="_blank" rel="noopener noreferrer" href="https://saigon-docs.roninchain.com">Checkout Saigon Documentation!</a>',
      //   backgroundColor: '#E0F6F4',
      //   textColor: '#00000',
      //   isCloseable: false,
      // },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Delegators',
                to: 'docs/category/delegators',
              },
              {
                label: 'Validators',
                to: 'docs/category/validators',
              },
              {
                label: 'Developers',
                to: 'docs/category/developers',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/P5GgF7SK',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ronin_network',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/axieinfinity/',
              },
            ],
          },
        ],
        copyright: `© ${currentYear - 1} - ${currentYear} Sky Mavis`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
