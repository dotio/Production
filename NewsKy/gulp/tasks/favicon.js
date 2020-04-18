"use strict";
module.exports = function() {
  $.gulp.task("favicon:copy", function() {
    return $.gulp
      .src("./_source/favicon/*.*")
      .pipe($.gulp.dest("./dev/favicon/"));
  });

  $.gulp.task("favicon:build", function() {
    return $.gulp
      .src("./_source/favicon/*.* ")
      .pipe($.gulp.dest("./_assets/favicon/"));
  });
};
