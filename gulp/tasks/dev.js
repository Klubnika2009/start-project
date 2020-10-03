module.exports = () => {
  $.gulp.task('dev', $.gulp.series('clean', 'fonts', 'html', 'stylesdev', 'scriptsdev', 'sprite', 'images'));
};