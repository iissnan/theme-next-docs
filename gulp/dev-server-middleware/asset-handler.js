'use strict';

const webpack = require('webpack');
const webpackConfig = require('../../webpack/dev');
const webpackMiddleware = require("webpack-dev-middleware");

module.exports = () => {
  const webpackCompiler = webpack(webpackConfig);
  return webpackMiddleware(webpackCompiler, {
    publicPath: '/assets/',
    watchOptions: {
      ignored: /node_modules/
    },
    stats: { colors: true }
  });
};
