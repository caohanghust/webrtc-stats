const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack-common')

const ROOT_DIR = process.cwd()

module.exports = merge(common, {
  mode: 'development',
  entry: {
    index: './src/js/index.ts',
  },
})