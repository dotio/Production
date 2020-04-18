"use strict";
module.exports = function() {
  $.gulp.task("sprite:png", function() {
    var spriteData = $.gulp.src("./_source/img/**/*.png").pipe(
      $.gp.spritesmith({
        imgName: "sprite.png",
        cssName: "sprite.scss",
        cssFormat: "scss",
        imgPath: "../img/sprite.png",
        padding: 70
      })
    );

    var imaStream = spriteData.img.pipe($.gulp.dest("./_source/img/"));
    var cssStream = spriteData.css.pipe($.gulp.dest("./dev/img/"));

    return $.merge(imaStream, cssStream);
  });

  $.gulp.task("sprite:png-build", function() {
    var spriteData = $.gulp.src("./_source/img/**/*.png").pipe(
      $.gp.spritesmith({
        imgName: "sprite.png",
        cssName: "sprite.scss",
        cssFormat: "scss",
        imgPath: "../img/sprite.png",
        padding: 70
      })
    );

    var imaStream = spriteData.img.pipe($.gulp.dest("./_source/img/"));

    var cssStream = spriteData.css.pipe($.gulp.dest("./_assets/img/"));

    return $.merge(imaStream, cssStream);
  });
};
