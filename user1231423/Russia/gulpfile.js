//require all needed vars
var gulp = require('gulp'); 
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var purify = require('gulp-purifycss');

//Detect changes in files and autosync
gulp.task('check-server',function(){
  browserSync.init({
    server: "dist"
  });
  gulp.watch("src/sass/*.scss",['compile-sass']);
  gulp.watch("src/*.mustache").on('change',browserSync.reload);
});

//Compile scss into css
gulp.task('compile-sass', function () {
  return gulp.src('src/sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/css/'))
    .pipe(browserSync.stream());
 });

 //Compile mustache to html
gulp.task('compile-mustache',function(){
    return gulp.src(['src/views/*.mustache'])
        .pipe(mustache({},
            {
                'extension':'.html'
            },{})).on('error', function(error) {
            // If we do have an error
            console.log(error);
        })
        .pipe(gulp.dest('dist/')); //sent to dist root
  });

//Remove all unused css
gulp.task('clean-css', function() {
  return gulp.src('dist/assets/css/main.css')
    .pipe(purify(['src/*.css']))
    .pipe(gulp.dest('dist/assets/css/'))
    .pipe(browserSync.stream());
});