'use strict';

const gutil = require('gulp-util');
const webpack = require('webpack');
const webpackProductionConfig = require('../../webpack/pro');

module.exports = callback => {
  webpack(webpackProductionConfig, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    gutil.log('[Webpack]', stats.toString({
      colors: true
    }));
    callback();
  });
};
