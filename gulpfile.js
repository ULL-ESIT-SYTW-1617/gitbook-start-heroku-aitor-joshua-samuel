var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('lint', () => {
  return gulp.src(['./local/*.js','./github/*.js','./*.js','./github/*/*.js','./local/*/*.js','./src/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
