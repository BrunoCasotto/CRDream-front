const webpack = require('webpack');

const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const assetsPath = require("./assetsFilesConfig.js");

const autoprefixer = require('autoprefixer');

module.exports = {
  entry: assetsPath,
  watch: true,
  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: "js/[name].js",
  },
    devtool: 'source-map',
    resolve: {
      alias: {
        _sass: path.join(__dirname, '..', 'resources', 'sass')
      }
    },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader!postcss-loader'),
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      allChunks: true,
    }),
  ],
};