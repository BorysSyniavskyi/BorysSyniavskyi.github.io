const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

// Main site
gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("**/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});


gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/'));   
});
gulp.task('fonts', function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest('dist/fonts'));   
});
gulp.task('icons', function () {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest('dist/icons'));   
});

gulp.task('images', function () {
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));   
});
gulp.task('scripts', function () {
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest('dist/js'));   
});
// gulp.task('mailer', function () {
//     return gulp.src("src/mailer/**/*.js")
//         .pipe(gulp.dest('dist/mailer'));   
// });

// --------------------PULSE----------------------------
gulp.task('styles_pulse', function() {
    return gulp.src("src/pulse/sass/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/pulse/css"))
        .pipe(browserSync.stream());
});

gulp.task('html_pulse', function () {
    return gulp.src("src/pulse/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/pulse'));   
});
gulp.task('fonts_pulse', function () {
    return gulp.src("src/pulse/fonts/**/*")
        .pipe(gulp.dest('dist/pulse/fonts'));   
});
gulp.task('icons_pulse', function () {
    return gulp.src("src/pulse/icons/**/*")
        .pipe(gulp.dest('dist/pulse/icons'));   
});

gulp.task('images_pulse', function () {
    return gulp.src("src/pulse/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest('dist/pulse/img'));   
});
gulp.task('scripts_pulse', function () {
    return gulp.src("src/pulse/js/**/*.js")
        .pipe(gulp.dest('dist/pulse/js'));   
});
gulp.task('mailer_pulse', function () {
    return gulp.src("src/pulse/mailer/**/*")
        .pipe(gulp.dest('dist/pulse/mailer'));   
});

// ---------------------UBER-----------------------------------

gulp.task('styles_uber', function() {
    return gulp.src("src/uber/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/uber/css"))
        .pipe(browserSync.stream());
});
gulp.task('html_uber', function () {
    return gulp.src("src/uber/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/uber'));   
});
gulp.task('fonts_uber', function () {
    return gulp.src("src/uber/fonts/**/*")
        .pipe(gulp.dest('dist/uber/fonts'));   
});
gulp.task('icons_uber', function () {
    return gulp.src("src/uber/icons/**/*")
        .pipe(gulp.dest('dist/uber/icons'));   
});

gulp.task('images_uber', function () {
    return gulp.src("src/uber/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest('dist/uber/img'));   
});
gulp.task('scripts_uber', function () {
    return gulp.src("src/uber/js/**/*.js")
        .pipe(gulp.dest('dist/uber/js'));   
});

// ------------------- WORDPRESS-----------------------

gulp.task('styles_wordpress', function() {
    return gulp.src("src/wordpress/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/wordpress/css"))
        .pipe(browserSync.stream());
});
gulp.task('html_wordpress', function () {
    return gulp.src("src/wordpress/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/wordpress'));   
});
gulp.task('fonts_wordpress', function () {
    return gulp.src("src/wordpress/fonts/**/*")
        .pipe(gulp.dest('dist/wordpress/fonts'));   
});
gulp.task('icons_wordpress', function () {
    return gulp.src("src/wordpress/icons/**/*")
        .pipe(gulp.dest('dist/wordpress/icons'));   
});

gulp.task('images_wordpress', function () {
    return gulp.src("src/wordpress/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest('dist/wordpress/img'));   
});
gulp.task('scripts_wordpress', function () {
    return gulp.src("src/wordpress/js/**/*.js")
        .pipe(gulp.dest('dist/wordpress/js'));   
});


gulp.task('watch', function() {
    gulp.watch("src/sass/*.+(scss|sass|css)", gulp.parallel('styles'))
    gulp.watch("src/pulse/sass/*.+(scss|sass|css)", gulp.parallel('styles_pulse'))
    gulp.watch("src/uber/sass/*.+(scss|sass|css)", gulp.parallel('styles_uber'))
    gulp.watch("src/wordpress/sass/*.+(scss|sass|css)", gulp.parallel('styles_wordpress'))
    gulp.watch("src/*.html").on('change', gulp.parallel('html'))
    gulp.watch("src/pulse/*.html").on('change', gulp.parallel('html_pulse'))
    gulp.watch("src/uber/*.html").on('change', gulp.parallel('html_uber'))
    gulp.watch("src/wordpress/*.html").on('change', gulp.parallel('html_wordpress'));
    
    
});
gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html', 'fonts', 'icons', 'images', 'scripts', 'styles_pulse', 'html_pulse', 'fonts_pulse', 'icons_pulse', 'images_pulse', 'scripts_pulse', 'mailer_pulse', 'styles_uber', 'html_uber', 'fonts_uber', 'icons_uber', 'images_uber', 'scripts_uber', 'styles_wordpress', 'html_wordpress', 'fonts_wordpress', 'icons_wordpress', 'images_wordpress', 'scripts_wordpress'));
