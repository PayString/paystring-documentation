const path = require('path')
require('dotenv/config')

function getPayIDURL() {
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

function getDocsURL() {
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

module.exports = {
  baseUrl: '',
  title: 'PayID Developer Documentation and Reference Guides',
  tagline:
    "Learn how to implement and deploy PayID on your payment network with our documentation library. You'll find API reference, standards and technical white papers.",
  url: getDocsURL(),
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'payid-org',
  projectName: 'payid',
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
      items: [
        {
          to: '/',
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
          className: 'github-button header-github-link',
          'aria-label': 'GitHub repository',
          label: 'GitHub repository',
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
    // announcementBar: {
    //   id: 'hackathon_annoucement',
    //   content:
    //     'Participate in the <a target="_blank" rel="noopener noreferrer" href="https://payid.devpost.com/?utm_source=docs.payid.org&utm_medium=banner">PayID Hackathon</a> and win up to $15K! Submissions are due by 5:00pm PDT Aug 2, 2020',
    //   backgroundColor: '#292d3e',
    //   textColor: '#bfc7d5',
    // },
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
            'https://github.com/payid-org/payid-documentation/tree/master',
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
      },
    ],
  ],
  customFields: {
    developerUrl: `${getPayIDURL()}/use-cases`,
    sandboxUrl: `${getPayIDURL()}/sandbox`,
    discordUrl: 'https://chat.payid.org/',
  },
}
