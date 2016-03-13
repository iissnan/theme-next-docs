var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var tap = require('gulp-tap');
var del = require('del');
var utils = require('./lib/utils');
var renderer = require ('./lib/renderer');
var configs = require('./lib/configs');

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
var dest = {
  files: {
    js: './app/assets/js/**/*',
    css: './app/assets/css/**/*',
    img: './app/assets/img/**/*',
    fonts: './app/assets/fonts/**/*',
    vendors: './app/assets/vendors/**/*',
    html: {
      zh: './app/*.nun'
    },
    uploads: './app/uploads/**/*',
    CNAME: './app/CNAME'
  },
  dirs: {
    dist: './dist',
    js: './dist/assets/js',
    css: './dist/assets/css',
    img: './dist/assets/img',
    fonts: './dist/assets/fonts',
    vendors: './dist/assets/vendors/',
    uploads: './dist/uploads'
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
            res.end(renderer.render(doc, { config: configs }));
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

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('dist', ['clean:dist', 'sass'], () => {
  ['js', 'css', 'fonts', 'img', 'vendors'].forEach(function (item) {
    gulp.src(dest.files[item]).pipe(gulp.dest(dest.dirs[item]));
  });

  gulp.src(dest.files.uploads).pipe(gulp.dest(dest.dirs.uploads));
  gulp.src(dest.files.CNAME).pipe(gulp.dest(dest.dirs.dist));

  gulp.src(dest.files.html.zh)
    .pipe(tap(function (file) {
      file.contents = new Buffer(renderer.render(file.path, { config: configs }));
      file.path = file.path.replace('nun', 'html');
    }))
    .pipe(gulp.dest(dest.dirs.dist));
});

gulp.task('default', ['sass', 'browser-sync']);
