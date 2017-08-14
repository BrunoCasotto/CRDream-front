const webpack = require('webpack');

const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const assetsPath = require("./assetsFilesConfig.js");

const autoprefixer = require('autoprefixer');

const ImageminPlugin = require('imagemin-webpack-plugin').default

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
        _sass: path.join(__dirname, '..', 'resources', 'sass'),
        _img: path.join(__dirname, '..', 'resources', 'images'),
        _components: path.join(__dirname, '..', 'views', 'components'),
      }
    },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader!postcss-loader'),
        exclude: /node_modules/,
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [ {loader: 'file-loader?limit=100000&name=/images/[hash].[ext]'} ]
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