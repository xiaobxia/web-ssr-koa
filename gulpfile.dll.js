const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require("gulp-uglify");

gulp.task('util', function () {
  return gulp.src([
    './src/dll/zepto.js',
    './src/dll/blazy.js',
    './src/dll/mui.previewimage.js',
    './src/dll/mui.zoom.js',
    './src/dll/util.js'
  ])
    .pipe(concat('util.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./src/lib'));
});
// gulp.task('zepto', function () {
//   return gulp.src( './src/dll/zepto.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('./src/lib'));
// });
gulp.task('default', gulp.series('util'));
