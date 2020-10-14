global.$ = {
  gulp: require('gulp'),
  // Html
  rigger: require('gulp-rigger'),
  // Styles
  plumber: require('gulp-plumber'),
  notify: require('gulp-notify'),
  sourcemaps: require('gulp-sourcemaps'),
  rename: require('gulp-rename'),
  cleanCss: require('gulp-clean-css'),
  sass: require('gulp-sass'),
  autoprefixer: require('gulp-autoprefixer'),
  // Scripts
  concat: require('gulp-concat'),
  uglify: require('gulp-uglify'),
  babel: require('gulp-babel'),
  // Clean
  del: require('del'),
  // Images
  imagemin: require('gulp-imagemin'),
  pngquant: require('imagemin-pngquant'),
  mozjpeg: require('imagemin-mozjpeg'),
  svgo: require('imagemin-svgo'),
  gifsicle: require('imagemin-gifsicle'),
  cache: require('gulp-cache'),
  // SVG Sprite
  svgmin: require('gulp-svgmin'),
  cheerio: require('gulp-cheerio'),
  replace: require('gulp-replace'),
  svgsprite: require('gulp-svg-sprite'),
  // Server
  browserSync: require('browser-sync').create(),
  path: {
    config: require('./gulp/config'),
    build: './build',
    html: {
      src: ['./app/**/*html', '!./app/template/*.html'],
      build: './build',
      watch: './app/**/*.html'
    },
    styles: {
      src: './app/sass/**/*.sass',
      build: './build/css',
      watch: './app/sass/**/*.sass'
    },
    scripts: {
      jquery: './node_modules/jquery/dist/jquery.min.js',
      swiper: './node_modules/swiper/swiper-bundle.min.js',
      src: './app/js/**/*.js',
      build: './build/js',
      watch: './app/js/**/*.js'
    },
    images: {
      src: './app/images/**/*.{jpg,jpeg,png,gif,tiff,svg}',
      build: './build/images',
      watch: './app/images/**/*.{jpg,jpeg,png,gif,tiff,svg}'
    },
    sprite: {
      src: './app/images/**/*.svg',
      build: './build/images',
      watch: './app/images/**/*.svg'
    },
    fonts: {
      src: './app/fonts/**/*.{woff,woff2,ttf,eot}',
      build: "./build/fonts",
      watch: './app/fonts/**/*.{woff,woff2,ttf,eot}'
    }
  }
}

$.path.config.forEach(function (path) {
  require(path)();
});