const path = require('path')
require('dotenv/config')

module.exports = {
  title: 'Documentation | PayID',
  tagline: 'Deploy and use PayID',
  url: `https://docs.payid.org`, // TODO LOAD BASED ON ENV
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'xpring-eng', // Usually your GitHub org/user name.
  projectName: 'payid', // Usually your repo name.
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'PayID icon',
        src: 'img/icon.svg',
        srcDark: 'img/icon-dark.svg',
        href: 'https://dev.payid.org/', // TODO LOAD BASED ON ENV
      },
      links: [
        {
          to: 'docs/payid-overview',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'right',
        },
        {
          href: 'https://api.payid.org',
          label: 'API Reference',
          position: 'right',
        },
        {
          href: 'https://github.com/xpring-eng/payid',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    gtag: {
      trackingID: 'UA-148411216-7',
      linker: {
        domains: ['docs.payid.org', 'payid.org'], // TODO LOAD BASED ON ENV
      },
    },
    algolia: {
      apiKey: 'a88df26bddf797de70ffeb1e55475513',
      indexName: 'payid',
    },
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
}
