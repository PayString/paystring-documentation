const path = require('path')
require('dotenv/config')

const getPayIDURL = () => {
  switch (process.env.RELEASE_ENV) {
    case 'dev':
      return 'https://dev.payid.org'
    case 'stage':
      return 'https://stage.payid.org'
    case 'prod':
      return 'https://payid.org'
    default:
      return 'http://localhost:8000'
  }
}

const getDocsURL = () => {
  switch (process.env.RELEASE_ENV) {
    case 'dev':
      return 'https://dev.docs.payid.org'
    case 'stage':
      return 'https://stage.docs.payid.org'
    case 'prod':
      return 'https://docs.payid.org'
    default:
      return 'http://localhost:3000'
  }
}

const getHeapAppID = () => {
  switch (process.env.RELEASE_ENV) {
    case 'stage':
      return '3411953951'
    case 'prod':
      return '3069043076'
    default:
      return null
  }
}

const getSentryDSN = () => {
  switch (process.env.RELEASE_ENV) {
    case 'stage':
      return 'https://c15f0f6a453c444597c6a637a15273ab@o262339.ingest.sentry.io/5277565'
    case 'prod':
      return 'https://531c7661d68844239952e7c6d5cc5961@o262339.ingest.sentry.io/5277626'
    default:
      return null
  }
}

module.exports = {
  title: 'PayID Developer Documentation and Reference Guides',
  tagline:
    "Learn how to implement and deploy PayID on your payment network with our documentation library. You'll find API reference, standards and technical white papers.",
  url: getDocsURL(),
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'payid-org', // Usually your GitHub org/user name.
  projectName: 'payid', // Usually your repo name.
  themeConfig: {
    image: 'img/payid.png',
    navbar: {
      hideOnScroll: true,
      logo: {
        alt:
          'PayID: Unifying payments through a universal payment identifier to simplify sending and receiving payments',
        src: 'img/icon.svg',
        srcDark: 'img/icon-dark.svg',
        href: getPayIDURL(),
        target: '_self',
      },
      links: [
        {
          to: '/getting-started',
          activeBasePath: '/',
          label: 'Documentation',
          position: 'right',
        },
        {
          href: 'https://api.payid.org',
          label: 'API Reference',
          position: 'right',
        },
        {
          href: `${getPayIDURL()}/contact`,
          label: 'Contact Us',
          position: 'right',
        },
        {
          href: 'https://github.com/payid-org/payid',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    gtag: {
      trackingID: 'UA-148411216-7',
      linker: {
        domains: [getDocsURL(), getPayIDURL()],
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
          routeBasePath: '/',
          homePageId: 'getting-started',
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl:
          //   'https://github.com/payid-org/payid-documentation/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve(path.resolve(__dirname, './src/plugins/heap.js')),
      {
        appId: getHeapAppID(),
      },
    ],
    [
      require.resolve(path.resolve(__dirname, './src/plugins/sentry.js')),
      {
        dsn: getSentryDSN(),
        environment: process.env.RELEASE_ENV,
      },
    ],
    [require.resolve(path.resolve(__dirname, './src/plugins/fonts.js'))],
  ],
}
