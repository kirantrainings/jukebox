var gulp = require('gulp');
var concat = require('gulp-concat');

//creating the task.

gulp.task("jsconcat", function () {
    return gulp.src('app/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./build/'));
});
