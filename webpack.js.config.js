const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

let config = {
  entry: {
    home: './assets/javascripts/home.js'
  },
  mode: process.env.NODE_ENV || 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './src/assets/javascripts')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  plugins: []
}

module.exports = config;

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new UglifyJSPlugin()
  );
}
