const path = require('path')
const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const SassLintPlugin = require('sass-lint-webpack')
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin")
const DashboardPlugin = require("webpack-dashboard/plugin")
const CopyPlugin = require('copy-webpack-plugin')

let config = {
  entry: {
    home: './assets/stylesheets/home.scss',
    other: './assets/stylesheets/other.scss'
  },
  mode: process.env.NODE_ENV || 'development',
  output: {
    filename: '[name].css',
    path: path.resolve(__dirname, './src/assets/stylesheets')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader'],
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: '../../[path][name]_[hash:5].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false
              },
              mozjpeg: {
                progressive: true,
                arithmetic: false
              },
              optipng: false,
              pngquant: {
                floyd: 0.5,
                speed: 2
              },
              svgo: {
                plugins: [
                  { removeTitle: true },
                  { convertPathData: false }
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10,
              name: '../fonts/[name].[ext]'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new SassLintPlugin({
      ignorePlugins: ['extract-text-webpack-plugin']
    }),
    new DashboardPlugin(),
    new ExtractTextWebpackPlugin('[name].css')
  ]
}

module.exports = config;

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new OptimizeCSSAssets(),
    new ExtractTextWebpackPlugin('../../../public/assets/stylesheets/[name].css'),
    new CopyPlugin([
      { from: 'src/assets/fonts', to: path.resolve(__dirname, './public/assets/fonts'), toType: 'dir' },
      { from: 'src/assets/images', to: path.resolve(__dirname, './public/assets/images'), toType: 'dir' },

    ])
  );
}
