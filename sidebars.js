module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'welcome-to-payid',
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
      label: 'Reference Implementation',
      items: [
        'payid-reference-overview',
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
        'payid-server-requirements',        
        'local-deployment',
        'deploy-with-docker',
        'aws-lambda-deploy',
        'remote-deployment',
        'nginx-ssl-deploy',
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
      type: 'doc',
      id: 'xpring-sdk-payid',
    },
    {
      type: 'doc',
      id: 'community-resources',
    },
    {
      type: 'doc',
      id: 'release-notes',
    },
  ],
}
