var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    cmq = require('gulp-combine-mq'),
    clean = require('gulp-cleancss');

gulp.task('liney', function () {
  gulp.src('./liney/**/*.scss')
    .pipe(plumber())
    .pipe(sass({
      precision: 2
    }))
    .pipe(cmq())
    .pipe(clean())
    .pipe(plumber.stop())
    .pipe(gulp.dest('./css/'));
});
