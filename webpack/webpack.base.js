const webpack = require('webpack');

const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const assetsPath = require("./assetsFilesConfig.js");

module.exports = {
  entry: assetsPath,
  watch: true,
  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: "js/[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].bundle.css',
      allChunks: true,
    }),
  ],
};