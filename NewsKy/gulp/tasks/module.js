"use strict";
module.exports = function() {
  $.gulp.task("module:copy", function() {
    return $.gulp
      .src("./_source/module/**/*.*")
      .pipe($.gulp.dest("./dev/module/"));
  });

  $.gulp.task("module:build", function() {
    return $.gulp
      .src("./_source/module/**/*.* ")
      .pipe($.gulp.dest("./_assets/module/"));
  });
};
