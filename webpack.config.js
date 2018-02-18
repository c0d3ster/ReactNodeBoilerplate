var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.join(__dirname, 'public');
var APP_DIR =  path.join(__dirname, 'src');

var config = {
  devtool: "source-map",
  entry:  APP_DIR + '/index.jsx',
  output: {
    devtoolLineToLine: true,
    sourceMapFilename: "./bundle.js.map",
    pathinfo: true,
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['react', 'env']} },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|jpg)$/, loader: 'file-loader?name=public/[name].[ext]'}
    ]
  }
};

module.exports = config;
