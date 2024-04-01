// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mchain Docs',
  tagline: 'Your Guide Through the Cryptographic Odyssey on the High Seas',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.mchain.network',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MchainNetwork', // Usually your GitHub org/user name.
  projectName: 'mchain-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/MchainNetwork/mchain-docs/tree/master/',
        },
        blog: {
          blogTitle: 'Logbook',
          blogDescription:
            "The Mchain Logbook chronicles the updates, enhancements, and changes to our platform's documentation. It acts as a dynamic ledger, ensuring that both newcomers and long-time Mchain enthusiasts can track the evolution of our informational resources.",
          showReadingTime: false,
          routeBasePath: 'logbook',
          path: 'logbook',
          editUrl: 'https://github.com/MchainNetwork/mchain-docs/tree/master/',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'openapi/openapi.yaml',
            route: '/api/',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/mchain-social-card.jpg',
      navbar: {
        title: 'Mchain Docs',
        logo: {
          alt: 'Mchain',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/learn',
            label: 'Learn',
            position: 'left',
            sidebarId: 'learnSidebar',
          },
          {
            to: '/docs/develop',
            label: 'Develop',
            position: 'left',
            sidebarId: 'developSidebar',
          },
          {
            to: '/docs/validate',
            label: 'Node & Validators',
            position: 'left',
            sidebarId: 'validateSidebar',
          },
          { to: '/logbook', label: 'Logbook', position: 'left' },
          {
            href: 'https://testnet.hub.mchain.network',
            label: 'Mchain Hub',
            position: 'right',
          },
          {
            href: 'https://testnet.api.mchain.network/',
            label: 'API',
            position: 'right',
          },
          {
            href: 'https://github.com/MchainNetwork',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Explore',
            items: [
              {
                label: 'Documentation',
                to: '/docs/learn/',
              },
              {
                label: 'Logbook',
                to: '/logbook',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram Group',
                href: 'https://t.me/MchainNetwork',
              },
              {
                label: 'Telegram Channel',
                href: 'https://t.me/MchainCompass',
              },
            ],
          },
          {
            title: 'News',
            items: [
              {
                label: 'Medium',
                href: 'https://medium.com/@MchainNetwork',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/MchainNetwork',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Mchain',
                href: 'https://www.mchain.network',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/MchainNetwork',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mchain Network`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'dark' },
      },
    }),

  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexBlog: false,
        language: 'en',
      },
    ],
  ],
};

module.exports = config;
