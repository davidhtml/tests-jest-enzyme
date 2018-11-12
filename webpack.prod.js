const merge = require('webpack-merge');

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const { paths } = require('./webpack.constants.config');
const baseConfig = require('./webpack.common');

module.exports = merge.smart(baseConfig, {
  entry: './src/app.js',
  output: {
    filename: '[hash].bundle.js',
    path: paths.BUILD,
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: false,
      }),
    ],
  },
  mode: 'production',
});
