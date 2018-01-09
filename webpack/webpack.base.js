const webpack = require('webpack');

const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');

//paths
const sass_path = path.join(__dirname, '..', 'resources','sass');
const js_path = path.join(__dirname, '..', 'resources','js');

const finder = require('./assetsFinder');

let bundle = {
  bundle :[
    path.join(sass_path, 'reset.scss'),
    path.join(js_path, 'global.js')
  ]
};

let components = finder.findComponentsAssets();

let pages = finder.findPagesAssets();

module.exports = {
  entry: Object.assign(bundle, pages, components),
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
        use: [ {loader: 'file-loader?limit=100000&name=/images/[name].[ext]'} ]
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        loader:'url-loader?limit=1024&name=images/[name].[ext]'
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