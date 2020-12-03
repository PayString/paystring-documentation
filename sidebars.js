module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'home',
    },
    {
      type: 'doc',
      id: 'what-is-paystring',
    },
    {
      type: 'category',
      label: 'Get Started',
      items: [
        'getting-started',
        'getting-started-sandbox',
        'getting-started-local',
        'getting-started-payburner',
        'paystring-cli',
        'verifiable-payid-tutorial',
        'ripplex-dev-kit-payid-get-started',
        'metrics-tutorial',
      ],
    },
    {
      type: 'category',
      label: 'Reference Implementation',
      items: [
        'paystring-reference-overview',
        'verifiable-payid',
        'paystring-discovery',
        'best-practices',
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
      label: 'PayString References',
      items: [
        'api-reference',
        'paystring-cli-reference',
        'paystring-headers',
        'paystring-interfaces',
        'paystring-schemas',
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
