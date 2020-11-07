const path = require('path');

module.exports = {
  //模式
  mode: "development",
  // mode: "production",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sxuan_utils.js',
    library: 'sutils', //对外暴露对象的名称
    libraryTarget: "umd" //esm /commonjs /amd
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }
};