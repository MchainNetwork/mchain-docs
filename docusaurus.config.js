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

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/MchainNetwork/mchain-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: 'logbook',
          path: 'logbook',
          editUrl:
            'https://github.com/MchainNetwork/mchain-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
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
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/logbook', label: 'Logbook', position: 'left' },
          {
            href: 'https://github.com/MchainNetwork',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
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
                label: 'Logbook',
                to: '/logbook',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/MchainNetwork',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mchain Network. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
