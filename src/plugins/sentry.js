module.exports = function (_, opts) {
  return {
    name: 'docusaurus2-sentry',
    injectHtmlTags() {
      if (!opts.dsn) return {}
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              type: 'text/javascript',
              src: 'https://browser.sentry-cdn.com/5.17.0/bundle.min.js',
              integrity:
                'sha384-lowBFC6YTkvMIWPORr7+TERnCkZdo5ab00oH5NkFLeQUAmBTLGwJpFjF6djuxJ/5',
              crossorigin: 'anonymous',
            },
          },
          {
            tagName: 'script',
            attributes: {
              type: 'text/javascript',
            },
            innerHTML: `window.Sentry.init(${JSON.stringify(opts)});`,
          },
        ],
      }
    },
  }
}
