const path = require('path')
require('dotenv/config')

function getPayStringURL() {
  switch (process.env.RELEASE_ENV) {
    case 'dev':
      return 'https://dev.paystring.org'
    case 'stage':
      return 'https://stage.paystring.org'
    case 'prod':
      return 'https://paystring.org'
    default:
      return 'http://localhost:8000'
  }
}

function getDocsURL() {
  switch (process.env.RELEASE_ENV) {
    case 'dev':
      return 'https://dev.docs.paystring.org'
    case 'stage':
      return 'https://stage.docs.paystring.org'
    case 'prod':
      return 'https://docs.paystring.org'
    default:
      return 'http://localhost:3000'
  }
}

function getSegmentId() {
  switch (process.env.RELEASE_ENV) {
    case 'stage':
      return 'fY65tW4oAAvTElIHzrXQ2plf99qDjjAe'
    case 'prod':
      return 'eGcENJL6ghTAXTAdzOrmd4oqxDlRorz1'
    default:
      return '5KojrihxpEBJvAn3u0JXi9hlhzMh5b1M'
  }
}

function getSegmentHost() {
  switch (process.env.RELEASE_ENV) {
    case 'stage':
      return 'https://segment.ripplex.io/ana_stg.js'
    case 'prod':
      return 'https://segment.ripplex.io/ana_prod.js'
    default:
      return 'https://segment.ripplex.io/ana_dev.js'
  }
}

module.exports = {
  baseUrl: '',
  title: 'PayString Developer Documentation and Reference Guides',
  tagline:
    "Learn how to implement and deploy PayString on your payment network with our documentation library. You'll find API reference, standards and technical white papers.",
  url: getDocsURL(),
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'paystring',
  projectName: 'paystring',
  themeConfig: {
    image: 'img/paystring.png',
    navbar: {
      hideOnScroll: true,
      logo: {
        alt:
          'PayString: Unifying payments through a universal payment identifier to simplify sending and receiving payments',
        src: 'img/icon.svg',
        srcDark: 'img/icon-dark.svg',
        href: getPayStringURL(),
        target: '_self',
      },
      items: [
        {
          to: '/',
          activeBasePath: '/',
          label: 'Documentation',
          position: 'right',
        },
        {
          href: 'https://api.paystring.org',
          label: 'API Reference',
          position: 'right',
        },
        {
          href: `${getPayStringURL()}/contact`,
          label: 'Contact Us',
          position: 'right',
        },
        {
          href: 'https://github.com/paystring/paystring',
          position: 'right',
          className: 'github-button header-github-link',
          'aria-label': 'GitHub repository',
          label: 'GitHub repository',
        },
      ],
    },
    gtag: {
      trackingID: 'UA-148411216-7',
      linker: {
        domains: [getDocsURL(), getPayStringURL()],
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
          homePageId: 'home',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/paystring/paystring-documentation/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve(path.resolve(__dirname, './src/plugins/segment.js')),
      {
        appId: getSegmentId(),
        host: getSegmentHost(),
      },
    ],
  ],
  customFields: {
    developerUrl: `${getPayStringURL()}/use-cases`,
    sandboxUrl: `${getPayStringURL()}/sandbox`,
    discordUrl: 'https://chat.paystring.org/',
  },
}
