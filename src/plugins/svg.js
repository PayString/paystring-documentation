module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-svg',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.svg$/,
              issuer: {
                test: /\.(js|ts)x?$/,
              },
              use: ['@svgr/webpack'],
            },
          ],
        },
      }
    },
  }
}
