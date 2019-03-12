module.exports = {
  chainWebpack: config => {

    //for coffee
    config.module
      .rule('coffee')
      .test(/\.coffee$/)
      .use('coffee-loader')
      .loader('coffee-loader')
      .end()

  },
  configureWebpack: {
    devtool: 'source-map',

  },
  css: {
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "./src/theme/style.scss"`,
        options: {
          indentedSyntax: true
        }
      }
    }
  }
}


