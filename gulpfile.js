var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);














// const gulp       = require('gulp');
// const { watch } = require('gulp');
// const browserSync = require('browser-sync').create();








// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
//     gulp.watch('./css/index.css');
//     gulp.watch("./index.html").on('change', browserSync.reload);
// });

// gulp.task('css', function() {
//     return gulp.src("./css/index.css")
//         .pipe(gulp.dest("./css/index.css"))
//         .pipe(browserSync.stream());
// });


// gulp.task('default', ['browser-sync']);