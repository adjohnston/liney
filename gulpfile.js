var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    cmq = require('gulp-combine-mq');

gulp.task('sass', function () {
  gulp.src('./src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(plumber.stop())
    .pipe(gulp.dest('./src/css/'));
});

gulp.task('cmq', ['sass'], function () {
  gulp.src('./src/css/**/*.css')
    .pipe(cmq())
    .pipe(gulp.dest('./dest/css'));
})

gulp.task('watch', function () {
  gulp.watch('**/*.scss', ['cmq']);
});
