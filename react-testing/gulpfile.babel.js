import gulp from 'gulp'
import del from 'del'
import runSequence from 'run-sequence'
import browserSync from 'browser-sync'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'


gulp.task('clean', (done) => {
  del(['./dist'])
    .then(() => {
      done()
    })
})

gulp.task('template', () => {
  return gulp
    .src('./src/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream())
})

gulp.task('script', () => {
  const bundler = browserify('./src/js/app.js', {
    }).transform(babelify, {
      'presets': ['es2015', 'react'],
      'plugins': ['transform-object-assign']
    })

  function rebundle () {
    bundler
      .bundle()
      .on('error', (err) => {
        console.error(err)
      })
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(gulp.dest('./dist/js'))
  }

  bundler.on('update', () => {
    console.log('-> bundling...')
    rebundle()
  })

  rebundle()
})

gulp.task('serve', () => {
  runSequence('clean', ['template', 'script'], () => {
    browserSync.init({
      server: './dist',
      open: false
    })
  })

  gulp
    .watch(['./dist/*.html'])
    .on('change', browserSync.reload)

  gulp.watch(['./dist/js/*.js'], ['script'])

  gulp.watch(['./src/*.html'], ['template'])
  gulp.watch(['./src/js/**/*.js'], ['script'])
})

gulp.task('default', ['clean'])
