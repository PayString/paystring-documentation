module.exports = function (context, options) {
  return {
    name: 'docusaurus2-fonts',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
              use: ['url-loader'],
            },
          ],
        },
      }
    },
  }
}
