const path = require('path')
const ROOT_DIR = process.cwd()
const LOADER_DIR = path.resolve(ROOT_DIR, './scripts/loaders')
const cssMinifyLoader = path.resolve(LOADER_DIR, './css-minify-loader.js')
const ejsLoader = path.resolve(LOADER_DIR, './ejs-loader.js')
module.exports = {
  entry: {
    index: path.resolve(ROOT_DIR, './src/js/index.ts'),
  },
  devtool: 'source-map',
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', 'jsx', '.json' ],
    alias: {
      '@utils': path.resolve(ROOT_DIR, './src/js/utils'),
    },
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    path: path.resolve(ROOT_DIR, 'dist'),
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.png$/, use: [ {
          loader: 'url-loader',
          options: {
            limit: 500000,   // 表示低于50000字节（50K）的图片会以 base64编码
          },
        } ],
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.frag|\.vert|\.glsl$/, use: 'raw-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.ejs$/, use: { loader: ejsLoader}  },
      {
        test: /\.styl$/,
        use: [ 'style-loader', 'css-loader', { loader: cssMinifyLoader }, 'stylus-loader' ],
      },
      { test: /\.less$/, use: [ 'style-loader', 'css-loader', 'less-loader' ] },
    ],
  },
}