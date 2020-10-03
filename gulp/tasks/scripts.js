const jsFile = [
  $.path.scripts.jquery,
  $.path.scripts.swiper,
  $.path.scripts.src
];

module.exports = () => {

  $.gulp.task('scriptsdev', () => {
    return $.gulp.src(jsFile)
      .pipe($.sourcemaps.init())
      .pipe($.concat('scripts.js'))
      .pipe($.rename({
        basename: 'scripts',
        suffix: '.min'
      }))
      .pipe($.sourcemaps.write('.'))
      .pipe($.gulp.dest($.path.scripts.build))
      .on('end', $.browserSync.reload);
  });

  $.gulp.task('scriptsprod', () => {
    return $.gulp.src(jsFile)
      .pipe($.concat('scripts.js'))
      .pipe($.uglify())
      .pipe($.rename({
        basename: 'scripts',
        suffix: '.min'
      }))
      .pipe($.gulp.dest($.path.scripts.build))
      .on('end', $.browserSync.reload);
  });

};