const webpack = require('webpack');

const path = require('path');

//getting object of js files ton load
const jsPath = require("./jsFilesConfig.js");

module.exports = {
  entry: jsPath,
  output: {
    path: path.join(__dirname, '..', 'public/js'),
    publicPath: '/public/',
    filename: "[name].bundle.js",
    chunkFilename: "[id].bundle.js",
  }
};