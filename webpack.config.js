const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * @type {import('webpack/declarations/WebpackOptions').WebpackOptions}
 */
module.exports = {
  entry: {
    newtab: './src/newtab.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'extension'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'newtab.html',
      chunks: ['newtab'],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new CopyWebpackPlugin({ patterns: [{ from: './public', to: './' }] }),
  ],
  devtool: 'source-map',
};
