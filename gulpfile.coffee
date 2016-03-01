gulp = require('gulp')
browserSync = require('browser-sync')

gulp.task 'browser-sync', ->
  browserSync.init {
    server: baseDir: './app'
  }


gulp.task 'default', ['browser-sync']
