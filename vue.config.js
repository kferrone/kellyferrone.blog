const RobotstxtPlugin = require("robotstxt-webpack-plugin");

const robotsTxtOpts = {
  policy: [
    {
      userAgent: "*",
      allow: "/"
    }
  ],
  sitemap: `${process.env.VUE_APP_HOST}/sitemap.xml`,
  host: `${process.env.VUE_APP_HOST}`
}

const devHost = 'http://localhost:5000/kellyferrone/us-central1';
module.exports = {
  publicPath: process.env.VUE_APP_HOST,
  indexPath: 'foo.html',
  devServer: {
    proxy: {
      '/contact-me': {
        target: `${devHost}/sendgridEmail`
      },
      '/sitemap.xml': {
        target: `${devHost}/siteMap`
      },
      '/rss.xml': {
        target: `${devHost}/rssFeed`,
        changeOrigin: true
      },
      '/atom.xml': {
        target: `${devHost}/atomFeed`
      },
      '/meta': {
        target: `${devHost}/metaFx`
      },
      '^/blog/*': {
        target: `${devHost}/blogFx`
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'src/assets/blog.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {

    //for coffee
    config.module
      .rule('coffee')
      .test(/\.coffee$/)
      .use('coffee-loader')
      .loader('coffee-loader')
      .end();

    //config.entry('public').add('./src/main.js').end();
    config.plugin('copy').tap(options => {
      options[0][0].ignore.push('admin.html');
      return options;
    });

  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [new RobotstxtPlugin(robotsTxtOpts)]
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


