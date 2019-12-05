const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack-common')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_DIR = process.cwd()

module.exports = merge(common, {
  mode: 'development',
  entry: {
    index: './src/js/index.ts',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html',
    })
  ],
  devServer: {
    contentBase: path.join(ROOT_DIR, 'resources'),
    open : true,
    // compress: true,
    port: 9000
  }
})