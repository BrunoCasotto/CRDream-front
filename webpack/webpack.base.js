const webpack = require('webpack');

const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const assetsPath = require("./assetsFilesConfig.js");

const autoprefixer = require('autoprefixer');

module.exports = {
  entry: assetsPath,
  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: "js/[name].js",
  },
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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader!postcss-loader'),
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=.+)?$/,
        use: [ {loader: 'file-loader?limit=100000&name=/images/[hash].[ext]'} ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin(
      {
        sourceMap: true,
        devtool: 'source-map'
      }
    )
  ],
};