/**
 * Created by xiaobxia on 2018/1/3.
 */
let gulp = require('gulp');
let spritesmith = require('gulp.spritesmith');

gulp.task('sprite-2', function () {
  let spriteData = gulp.src('src/sprite/*-2x.png').pipe(spritesmith({
    imgName: 'sprite-2.png',
    cssName: 'sprite-2.css',
    padding: 10
  }));
  return spriteData.pipe(gulp.dest('./dest'));
});
gulp.task('sprite-3', function () {
  let spriteData = gulp.src('src/sprite/*-3x.png').pipe(spritesmith({
    imgName: 'sprite-3.png',
    cssName: 'sprite-3.css',
    padding: 10
  }));
  return spriteData.pipe(gulp.dest('./dest'));
});

gulp.task('default', gulp.series('sprite-2', 'sprite-3'));
