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
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {loader: 'babel-loader', options: { presets: ['react', 'env'] }},
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: { importLoaders : 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(png|jpg)$/,
        use: 'file-loader?name=public/[name].[ext]'
      }
    ]
  }
};

module.exports = config;
