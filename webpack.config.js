const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
    filename: 'bundle.js'
  },
  devServer: {
    port: 9070,
    proxy: {
      '/value': {
        target: 'http://illya.brutgroot.com',
      }
    }
  }
};