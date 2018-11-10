let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function(){
   return gulp.src('src/styles/*.scss')
       .pipe(sass())
       .pipe(gulp.dest('src/styles'))
});

gulp.task('default', function(){
   gulp.watch('src/styles/*.scss', gulp.series('sass'));
});