"use strict";
module.exports = function() {
  $.gulp.task("img:copy", function() {
    return $.gulp
      .src("./_source/img/**/*.*", { since: $.gulp.lastRun("img:copy") })

      .pipe($.gulp.dest("./dev/img/"));
  });
  $.gulp.task("img:build", function() {
    return (
      $.gulp
        .src("./_source/img/**/*.*")
        .pipe($.gp.imagemin())

        //.pipe($.gp.tinypng(''))
        .pipe($.gulp.dest("./_assets/img/"))
    );
  });
};
