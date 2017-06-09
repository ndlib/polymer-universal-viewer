const gulp = require('gulp');
const preprocess = require('gulp-preprocess');

gulp.task('build:dev', () => {
  return gulp.src('./src/universal-viewer.html')
    .pipe(preprocess(
      {
        context: { NODE_ENV: 'dev' }
      }
    ))
    .pipe(gulp.dest('./'));
});

gulp.task('build:prod', () => {
  return gulp.src('./src/universal-viewer.html')
    .pipe(preprocess(
      {
        context: { NODE_ENV: 'production' }
      }
    ))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['build:prod']);
