module.exports = {
  title: 'PayID Documentation',
  tagline: 'Deploy and use PayID',
  url: 'https://dev.docs.payidorg.xpring.dev/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'xpring-eng', // Usually your GitHub org/user name.
  projectName: 'payid', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'PayID',
      logo: {
        alt: 'PayID Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/getting-started',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          href: 'https://documenter.getpostman.com/view/11189344/Szf9XTDi',
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
              href: 'https://documenter.getpostman.com/view/11189344/Szf9XTDi',
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
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/payid',
            },
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
