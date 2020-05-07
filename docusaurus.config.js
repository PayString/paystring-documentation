const path = require('path')
require('dotenv/config')

module.exports = {
  title: 'PayID Documentation',
  tagline: 'Deploy and use PayID',
  url: `https://${process.env.RELEASE_ENV}.docs.payid.org`,
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'xpring-eng', // Usually your GitHub org/user name.
  projectName: 'payid', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'PayID',
      logo: {
        alt: 'PayID icon',
        src: 'img/icon.svg',
      },
      links: [
        {
          to: 'docs/payid-overview',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          href: 'https://api.payid.org',
          label: 'API Reference',
          position: 'left',
        },
        {
          href: 'https://github.com/xpring-eng/payid',
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
              label: 'Getting Started',
              to: 'docs/getting-started',
            },
            {
              label: 'API Reference',
              href: 'https://api.payid.org',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/payid',
            },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/payid',
            // },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/xpring-eng/payid',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/xpringdev',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ripple.`,
    },
    // algolia: {
    //   apiKey: 'api-key',
    //   indexName: 'index-name',
    //   appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
    //   algoliaOptions: {}, // Optional, if provided by Algolia
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/xpring-eng/payid-documentation/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, './src/plugins/svg.js')],
}
