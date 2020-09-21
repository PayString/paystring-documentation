const DEFAULT_OPTIONS = {
  appId: null,
  enableOnDevMode: false, // if 'false', hubspot will be fired on NODE_ENV=production only
}

module.exports = function (context, opts) {
  const options = { ...DEFAULT_OPTIONS, ...opts }
  const isEnabled =
    (process.env.NODE_ENV === 'production' || options.enableOnDevMode) &&
    options.appId

  return {
    name: 'docusaurus2-hubspot',
    injectHtmlTags() {
      if (!isEnabled) return {}
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              type: 'text/javascript',
              id: 'hs-script-loader',
              async,
              defer,
              src: `//js.hs-scripts.com/${options.appId}.js`,
            },
          },
        ],
      }
    },
  }
}
