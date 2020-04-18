"use strict";
module.exports = function() {
  $.gulp.task("js:copy", function() {
    return $.gulp
      .src("./_source/js/**/*.js")
      .pipe($.gulp.dest("./dev/js/"))
      .pipe($.browserSync.stream());
  });

  $.gulp.task("js:build", function() {
    return $.gulp
      .src("./_source/js/**/*.js")
      //.pipe($.gp.uglify())
      .pipe($.gp.concat("bundle.min.js"))
      .pipe($.gulp.dest("./_assets/js/"))
      .pipe($.browserSync.stream());
  });
};
