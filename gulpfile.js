var gulp = require('gulp');
var concat = require('gulp-concat');

var projectName = "start-page";

var jsVendors = [
    "node_modules/angular/angular.js"
];

gulp.task("js-vendors", function(){
    return gulp.src(jsVendors)
        .pipe(concat("vendors.js"))
        .pipe(gulp.dest("dist/vendors/"));
});

gulp.task("html", function(){
    return gulp.src("Resources/html/*.html")
        .pipe(concat(projectName + ".html"))
        .pipe(gulp.dest("dist/"));
});

gulp.task("css", function(){
    return gulp.src("Resources/css/*.css")
        .pipe(concat(projectName + ".css"))
        .pipe(gulp.dest("dist/css/"));
});

gulp.task("scripts", function(){
    return gulp.src("Resources/js/**/*.js")
        .pipe(concat(projectName + ".js"))
        .pipe(gulp.dest("dist/js/"));
});

gulp.task("default", ["js-vendors", "html", "css", "scripts"]);