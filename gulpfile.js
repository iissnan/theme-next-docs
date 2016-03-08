var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var utils = require('./lib/utils');
var renderer = require ('./lib/renderer');

var source = {
  files: {
    html: './app/**/*.nun',
    js: './app/assets/js/**/*.js',
    css: './app/assets/css/**/*.css',
    img: './app/assets/img/',
    sass: './app/assets/sass/**/*.scss'
  },
  dirs: {
    index: './app',
    css: './app/assets/css'
  }
};

gulp.task('browser-sync', () => {
  browserSync.init({
    open: false,
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
    source.files.html,
    source.files.js,
    source.files.css,
    source.files.img
  ], browserSync.reload);

  gulp.watch(source.files.sass, ['sass']);
});

gulp.task('sass', () => {
  return gulp.src(source.files.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(source.dirs.css));
});

gulp.task('default', ['sass', 'browser-sync']);
