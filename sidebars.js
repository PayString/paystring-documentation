module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'home',
    },
    {
      type: 'category',
      label: 'Get Started',
      items: [
        'getting-started',
        'verifiable-payid-tutorial',
        'ripplex-dev-kit-payid-get-started',
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
        'payid-discovery',
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
      id: 'ripplex-dev-kit-payid',
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
