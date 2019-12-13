const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack-common')

const ROOT_DIR = process.cwd()

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: './src/js/index.ts',
  },
  module: {
    rules: [
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
})