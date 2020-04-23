module.exports = {
  title: 'PayID Documentation',
  tagline: 'Testing PayID docs',
  url: 'https://your-docusaurus-test-site.com',
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
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
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
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/xpring-eng/payid',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ripple',
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
