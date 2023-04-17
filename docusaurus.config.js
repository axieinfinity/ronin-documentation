// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const math = require('remark-math');
const katex = require('rehype-katex');

const currentYear = new Date().getFullYear()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ronin Docs',
  tagline: 'Lets build together',
  url: 'https://docs.roninchain.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'axieinfinity', // Usually your GitHub org/user name.
  projectName: 'ronin-document', // Usually your repo name.

  staticDirectories: ['static'],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

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
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: ({versionDocsDirPath, docPath}) =>
          `https://github.com/axieinfinity/ronin-document/edit/main/${versionDocsDirPath}/${docPath}`,
        editLocalizedFiles: false,
        editCurrentVersion: false,
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
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      announcementBar: {
        id: 'slashing',
        content:
          'Slashing rules have been updated, see <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ronin_network/status/1645664361799901185?s=46&t=YkUXw7V1JhDN_wzIX5WIUg">Twitter announcement</a>',
        backgroundColor: '#EEF9FD',
        textColor: '#091E42',
        isCloseable: false,
      },
      navbar: {
        title: 'Ronin',
        logo: {
          alt: 'Ronin logo',
          src: 'img/logo.svg',
        },
        items: [
          // Get started
          {
            label: 'Get started',
            to: '/docs/get-started',
          },
          // Basics
          {
            label: 'Basics',
            to: 'docs/basics',
          },
          // Delegators
          {
            label: 'Delegators',
            to: 'docs/delegators',
          },
          // Validators
          {
            label: 'Validators',
            to: 'docs/validators',
          },
          // Node operators
          {
            label: 'Node operators',
            to: 'docs/node-operators',
          },
          // Developers
          {
            label: 'Developers',
            to: 'docs/developers/portal',
          },
          // Community
          {
            label: 'Community',
            to: 'docs/community/join',
          },
          // Community HIDDEN until documentation goes open-source
          // {
          //   label: 'Community',
          //   to: 'docs/community',
          // },
          // Search
          {
            type: 'search',
            position: 'right',
          },
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
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/roninnetwork',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ronin_network',
              },
              {
                type: 'link',
                label: 'Newsletter',
                href: 'https://roninblockchain.substack.com/',
              },
              // {
              //   label: 'Join',
              //   to: 'docs/community/join',
              // },
              // {
              //   label: 'Contribute to documentation',
              //   to: 'docs/community/contribute',
              // },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'RON Staking',
                href: 'https://app.roninchain.com/staking/',
              },
              {
                label: 'Validator Dashboard',
                href: 'https://validator.roninchain.com/',
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
              {
                label: 'Sky Mavis Developer Portal',
                href: 'http://docs.skymavis.com/docs/getting-started',
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
