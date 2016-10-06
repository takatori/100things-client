import gulp from 'gulp';
import concat from 'gulp-concat';
import config from '../config';

gulp.task('lib', () => {
  return gulp.src(config.src.lib)
    .pipe(concat('lib.js'))
    .pipe(gulp.dest(config.dist.lib))
});
