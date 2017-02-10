'use strict';

const gulp = require('gulp');
const bs = require('browser-sync');
const getDevServerMiddleware = require('../dev-server-middleware');

module.exports = () => {
  bs.init({
    open: false,
    server: {
      baseDir: 'app',
      middleware: getDevServerMiddleware()
    }
  });

  gulp.watch(['app/**/*.nun'], bs.reload);
};
