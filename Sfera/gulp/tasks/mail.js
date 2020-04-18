/* global $ */
module.exports = () => {
  $.gulp.task('mail:copy', () => {
    return $.gulp.src('./source/mail/**/*.*').pipe($.gulp.dest('./dev/mail/'));
  });

  $.gulp.task('mail:build', () => {
    return $.gulp
      .src('./source/mail/**/*.*')
      .pipe($.gp.fontmin())
      .pipe($.gulp.dest('./build/mail/'));
  });
};
