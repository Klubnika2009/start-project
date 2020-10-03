module.exports = () => {

  $.gulp.task('serve', () => {
    $.browserSync.init({
      server: {
        baseDir: $.path.build
      },
      notify: true, 
      // online: true, // Work offline without internet connection
      // tunnel: true  // tunnel: 'projectname', // Demonstration page: http://projectname.localtunnel.me
    });

    $.gulp.watch($.path.html.watch, $.gulp.series('html'));
    $.gulp.watch($.path.fonts.watch, $.gulp.series('fonts'));
    $.gulp.watch($.path.styles.watch, $.gulp.series('stylesdev'));
    $.gulp.watch($.path.scripts.watch, $.gulp.series('scriptsdev'));
    $.gulp.watch($.path.images.watch, $.gulp.series('images'));
    $.gulp.watch($.path.sprite.watch, $.gulp.series('sprite'));

  });

};