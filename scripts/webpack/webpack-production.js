const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack-common')

const ROOT_DIR = process.cwd()

module.exports = merge(common, {
  mode: 'production',
  entry: {
    index: './src/js/index.ts',
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    path: path.resolve(ROOT_DIR, 'dist'),
  },
})