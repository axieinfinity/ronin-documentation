// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const currentYear = new Date().getFullYear()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ronin Docs',
  tagline: 'Stake and earn rewards on Ronin',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.roninchain.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  organizationName: 'axieinfinity', // Usually your GitHub org/user name.
  projectName: 'ronin-documentation', // Usually your repo name.

  staticDirectories: ['static'],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    'docusaurus-plugin-sass',
    ['@docusaurus/plugin-client-redirects',
    {
      createRedirects(existingPath) {
        if (existingPath.includes('/')) {
          return [
            '/docs' + existingPath
          ];
        }
        return undefined; // Return a falsy value: no redirect created
      },
    },]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl: `https://github.com/axieinfinity/ronin-documentation/edit/main`,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        gtag: {
          trackingID: 'G-7XP0LK51BJ', // Measurement ID
          anonymizeIP: false,
        },
        googleTagManager: {
          containerId: 'GTM-PSV4LRD', // Tag ID from Google Tag Manager
        },
        googleAnalytics: {
          trackingID: 'UA-150383258-4',
        },        
      }),
    ],
  ],
  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        // Global tags
        {name: 'keywords', content: 'web3, dapp, ronin, axie, axs, ron'},

        // Facebook meta tags
        {name: 'og:url', content: 'https://docs.roninchain.com'},
        {name: 'og:type', content: 'website'},
        // {name: 'og:title', content: 'Ronin Documentation'},
        // {name: 'og:description', content: 'Build web3 games with real, player-owned economies.'},
        {name: 'og:image', content: '/img/thumbnail.png'},
        // Twitter meta tags
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:domain', content: 'docs.roninchain.com'},
        {name: 'twitter:url', content: 'https://docs.roninchain.com'},
        // {name: 'twitter:title', content: 'Ronin Documentation'},
        // {name: 'twitter:description', content: 'Build web3 games with real, player-owned economies.'},
        {name: 'twitter:image', content: '/img/thumbnail.png'},
      ],
      algolia: {
        appId: 'RXU5ZAVMCJ',
        apiKey: '46141953dde60ffc0242ca8e0252dbe8',
        indexName: 'roninchain',
      },
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
      // announcementBar: {
      //   id: 'slashing',
      //   content:
      //     'Slashing rules have been updated, see <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ronin_network/status/1645664361799901185?s=46&t=YkUXw7V1JhDN_wzIX5WIUg">Twitter announcement</a>',
      //   backgroundColor: '#EEF9FD',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
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
            to: '/get-started',
          },
          // Basics
          {
            label: 'Basics',
            to: 'basics',
          },
          // Apps
          {
            label: 'Apps',
            to: 'apps',
          },
          // Delegators
          {
            label: 'Delegators',
            to: 'delegators',
          },
          // Validators
          {
            label: 'Validators',
            to: 'validators',
          },
          // Bridge operators
          {
            label: 'Bridge operators',
            to: 'bridge-operators',
          },
          // Community
          {
            label: 'Community',
            to: 'community/join',
          },
          // Search
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
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
                label: 'X',
                href: 'https://twitter.com/ronin_network',
              },
              {
                type: 'link',
                label: 'Blog',
                href: 'https://blog.roninchain.com/',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Developer docs',
                href: 'https://docs.skymavis.com/ronin/overview',
              },
              {
                label: 'RON staking',
                href: 'https://app.roninchain.com/staking/',
              },
              {
                label: 'Validator dashboard',
                href: 'https://validator.roninchain.com/',
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
