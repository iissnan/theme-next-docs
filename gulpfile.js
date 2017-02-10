'use strict';

const gulp = require('gulp');
const tasks = {
  webpack: require('./gulp/tasks/webpack'),
  develop: require('./gulp/tasks/develop'),
  clean: require('./gulp/tasks/clean'),
  dist: require('./gulp/tasks/dist')
};

gulp.task('clean', tasks.clean);
gulp.task('webpack', tasks.webpack);
gulp.task('develop', tasks.develop);
gulp.task('dist', ['clean', 'webpack'], tasks.dist);
gulp.task('default', ['develop']);
