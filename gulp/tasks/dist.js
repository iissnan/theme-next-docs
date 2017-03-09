'use strict';

const gulp = require('gulp');
const tap = require('gulp-tap');
const renderer = require('../../lib/renderer');

const APP_DIR = 'app/';
const SOURCE = {
  img: APP_DIR + 'assets/img/**/*',
  html: {
    zh: APP_DIR + '*.njk'
  },
  uploads: APP_DIR + 'uploads/**/*',
  CNAME: APP_DIR + 'CNAME'
};
const DIST_DIR = 'dist/';
const DIST = {
  dist: DIST_DIR,
  img: DIST_DIR + 'assets/img',
  uploads: DIST_DIR + 'uploads'
};

module.exports = () => {
  gulp.src(SOURCE.img)
    .pipe(gulp.dest(DIST.img));

  gulp.src(SOURCE.uploads)
    .pipe(gulp.dest(DIST.uploads));

  gulp.src(SOURCE.CNAME)
    .pipe(gulp.dest(DIST.dist));

  gulp.src(SOURCE.html.zh)
    .pipe(tap(function (file) {
      file.contents = new Buffer(renderer.render(file.path));
      file.path = file.path.replace('njk', 'html');
    }))
    .pipe(gulp.dest(DIST.dist));
};
