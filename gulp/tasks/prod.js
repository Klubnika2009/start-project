module.exports = () => {
  $.gulp.task('prod', $.gulp.series('clean', 'fonts', 'html', 'stylesprod', 'scriptsprod', 'sprite', 'images'));
};