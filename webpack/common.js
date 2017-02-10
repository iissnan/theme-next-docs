'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = () => {
  return {
    context: path.resolve(__dirname, '../app'),
    entry: './assets/scripts/main',
    output: {
      filename: 'js/main.js',
      path: path.resolve(__dirname, '../dist/assets'),
      publicPath: '/assets/'
    },
    module: {
      rules: [
        { test: /\.ts$/, use: 'ts-loader' },
        {
          test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
          use: {
            loader: 'file-loader',
            options: { name: 'fonts/[name].[ext]' }
          },
          exclude: [ path.resolve(__dirname, '../app/assets/img') ]
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ['css-loader', 'sass-loader']
          })
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    plugins: [
      new webpack.ProvidePlugin({
        $:' jquery',
        jQuery: 'jquery'
      }),
      new ExtractTextPlugin({
        filename: "css/main.css",
      })
    ]
  };
};
