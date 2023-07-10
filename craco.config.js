	
const CracoAlias = require('craco-alias');

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "@/styles/_variable.scss";
        `
      }
    }
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json'
      }
    }
  ]
};