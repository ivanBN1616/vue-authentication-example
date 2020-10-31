const path = require('path');

module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true,
          multiLanguageInstaller: true,
        }
      },
    },
  },
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        actions: path.resolve(__dirname, 'src/store/actions'),
        utils: path.resolve(__dirname, 'src/utils')
      }
    }
  }
};
