/* global $ */
module.exports = () => {
  $.gulp.task('clean', () => {
    return $.del('./dev');
  });
};
