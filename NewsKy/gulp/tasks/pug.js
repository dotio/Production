"use strict";
module.exports = function() {
  $.gulp.task("pug:copy", function() {
    return (
      $.gulp
        .src("./_source/template/pages/*.pug")
        //.pipe($.gp.plumber())
        .pipe($.gp.pug({ pretty: true }))
        .on(
          "error",
          $.gp.notify.onError(function(error) {
            return {
              title: "Pug",
              message: error.message
            };
          })
        )
        .pipe($.gulp.dest("./dev/"))
        .on("end", $.browserSync.reload)
    );
  });

  $.gulp.task("pug:build", function() {
    return (
      $.gulp
        .src("./_source/template/pages/*.pug")
        //.pipe($.gp.plumber())
        .pipe($.gp.pug({ pretty: true }))
        .on(
          "error",
          $.gp.notify.onError(function(error) {
            return {
              title: "Pug",
              message: error.message
            };
          })
        )
        .pipe($.gulp.dest("./_assets/"))
        .on("end", $.browserSync.reload)
    );
  });
};
