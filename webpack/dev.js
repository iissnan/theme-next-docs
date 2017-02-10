'use strict';

const webpackMerge = require('webpack-merge');
const getCommonConfig = require('./common');

module.exports = webpackMerge(getCommonConfig(), {
  devtool: 'inline-source-map',
});
