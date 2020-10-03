module.exports = () => {
  $.gulp.task('html', () => {
    return $.gulp.src($.path.html.src)
      .pipe($.rigger())
      .pipe($.gulp.dest($.path.html.build))
      .on('end', $.browserSync.reload);
  });
};