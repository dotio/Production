module.exports = function() {
  $.gulp.task("watch", function() {
    $.gulp.watch("./_source/template/**/*.pug", $.gulp.series("pug:copy"));
    $.gulp.watch("./_source/css/**/*.scss", $.gulp.series("style:copy"));
    $.gulp.watch("./_source/js/**/*.js", $.gulp.series("js:copy"));
    $.gulp.watch("./_source/img/**/*.*", $.gulp.series("img:copy"));
  });
};
