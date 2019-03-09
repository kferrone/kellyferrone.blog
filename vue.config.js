const Purecss = require('purecss');
const pureFile = Purecss.getFilePath('pure.css');

module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "${pureFile}";`
      }
    }
  }
}