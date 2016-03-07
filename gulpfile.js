var gulp = require('gulp');
var browserSync = require('browser-sync');
var utils = require('./lib/utils');
var renderer = require ('./lib/renderer');

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './app',
      middleware: [
        (req, res, next) => {
          var doc = utils.mappingRequestDocument(req.url);
          if (doc) {
            res.end(renderer.render(doc));
          }
          next();
        }
      ]
    }
  });

  gulp.watch([
    './app/**/*.nun',
    './app/assets/js/**/*.js',
    './app/assets/css/**/*.css',
    './app/assets/img/*'
  ], browserSync.reload);
});


gulp.task('default', ['browser-sync']);
