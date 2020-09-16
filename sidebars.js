module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'welcome-to-payid',
    },
    {
      type: 'category',
      label: 'Reference Implementation',
      items: [
        'payid-reference-overview',
        'payid-server-requirements',
        'payid-cli',
        'verifiable-payid',
        'payid-best-practices',
        'integrate-payid-users',
        'metrics',
      ],
    },
    {
      type: 'category',
      label: 'Deployment Options',
      items: [
        'intro-deploy',
        'local-deployment',
        'deploy-with-docker',
        'aws-lambda-deploy',
        'remote-deployment',
      ],
    },
    {
      type: 'category',
      label: 'Get Started',
      items: [
        'getting-started',
        'payid-setup-tutorial',
        'payid-cli-tutorial',
        'verifiable-payid-tutorial',
        'xpring-sdk-payid-tutorial',
        'metrics-tutorial',
      ],
    },
    {
      type: 'category',
      label: 'PayID References',
      items: [
        'api-reference',
        'payid-cli-reference',
        'payid-headers',
        'payid-interfaces',
        'payid-schemas',
      ],
    },
    {
      type: 'category',
      label: 'PayID Tooling',
      items: ['xpring-sdk-payid'],
    },
    {
      type: 'category',
      label: 'Community Resources',
      items: ['community-resources'],
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: ['release-notes'],
    },
  ],
}
