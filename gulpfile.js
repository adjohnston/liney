var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    cmq = require('gulp-combine-mq');

gulp.task('liney', function () {
  gulp.src('./src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(cmq())
    .pipe(plumber.stop())
    .pipe(gulp.dest('./src/css/'));
});
