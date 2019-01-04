//require all needed vars
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var mustache = require('gulp-mustache');
var purify = require('gulp-purifycss');

//Detect changes in files and autosync
<<<<<<< HEAD
gulp.task('check-server', function () {
    browserSync.init({
        baseDir: "dist/",
        server: "dist"
    });
    gulp.watch(['src/assets/scss/*.scss'], ['compile-sass']).on('change', browserSync.reload);
    gulp.watch('src/views/**/*.mustache', ['compile-mustache']).on('change', browserSync.reload);
    gulp.watch('src/views/common/json/*.json', ['move-json']).on('change', browserSync.reload);
=======
gulp.task('watch', function () {
    browserSync.init({
        server: "dist/",
    });
    gulp.watch(['src/assets/scss/*.scss'], gulp.series('compile-sass')).on('change', browserSync.reload);
    gulp.watch('src/views/*.mustache', gulp.series('compile-mustache')).on('change', browserSync.reload);
    // gulp.watch('src/view/json/*.json', ['move-json']).on('change', browserSync.reload);
>>>>>>> 45486e58e65d4199bf0aae508c5c8f25803eb555
});

//Compile scss into css
gulp.task('compile-sass', function () {
<<<<<<< HEAD
    return gulp.src('src/sass/style.scss')
=======
    return gulp.src('src/assets/scss/style.scss')
>>>>>>> 45486e58e65d4199bf0aae508c5c8f25803eb555
        .pipe(sass())
        .pipe(gulp.dest('dist/assets/css/'))
        .pipe(browserSync.stream());
});

//Compile mustache to html
gulp.task('compile-mustache', function () {
    return gulp.src(['src/views/*.mustache'])
        .pipe(mustache({},
            {
                'extension': '.html'
            }, {})).on('error', function (error) {
            // We have an error
            console.log(error);
        })
        .pipe(gulp.dest('dist/')); //sent to root
});

//Remove all unused css
gulp.task('clean-css', function () {
<<<<<<< HEAD
    return gulp.src('dist/assets/css/main.css')
        .pipe(purify(['src/*.css']))
=======
    return gulp.src('dist/assets/css/style.css')
        .pipe(purify(['dist/assets/css/style.css']))
>>>>>>> 45486e58e65d4199bf0aae508c5c8f25803eb555
        .pipe(gulp.dest('dist/assets/css/'))
        .pipe(browserSync.stream());
});

//Move JSON files
gulp.task('move-json', function () {
<<<<<<< HEAD
    gulp.src("src/views/common/json/*.json")
=======
    gulp.src("src/json/*.json")
>>>>>>> 45486e58e65d4199bf0aae508c5c8f25803eb555
        .pipe(gulp.dest("dist/assets/json/"));
});

