const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const browserify = require('gulp-browserify');
const sass = require('gulp-sass');
const addsrc = require('gulp-add-src');
const nodemon = require('gulp-nodemon');

const config = {
    source: './src/',
    dist: './public/'
};

const paths = {
    assets: "assets/",
    html: "*.html",
    sass: "scss/**/*.scss",
    js: "js/**/*.js",
    materializeJS: 'js/vendor/materialize.min.js',
    jquery: "js/vendor/jquery-3.2.1.min.js",
    mainSass: "scss/main.scss",
    mainJS: "js/app.js"
};

const sources = {
    assets: config.source + paths.assets,
    html: config.source + paths.html,
    sass: config.source + paths.assets + paths.sass,
    js: config.source + paths.assets + paths.js,
    materializeJS: config.source + paths.assets + paths.materializeJS,
    jquery: config.source + paths.assets + paths.jquery,
    rootSass: config.source + paths.assets + paths.mainSass,
    rootJS: config.source + paths.assets + paths.mainJS
};

gulp.task('html', () => {
    gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task('sass', function () {
    gulp.src(sources.rootSass)
        .pipe(sass().on("error", sass.logError)) //sass({outputStyle: "compressed"})
        .pipe(gulp.dest(config.dist + paths.assets +
            "css"));
});

gulp.task('js', function () {
    return gulp.src([sources.assets + "js/components/*.js", sources.rootJS])
        .pipe(concat('app.js'))
        .pipe(browserify())
        .pipe(addsrc(sources.jquery))
        .pipe(addsrc(sources.materializeJS))
        .pipe(gulp.dest(config.dist + paths.assets + "js"))
});

gulp.task('font', () => {
    gulp.src(sources.assets + 'fonts/**/*').pipe(gulp.dest(config.dist + paths.assets + 'fonts'));
});

gulp.task('img', () => {
    gulp.src(sources.assets + 'img/**/*').pipe(gulp.dest(config.dist + paths.assets + 'img'));
});

gulp.task('sass-watch', ["sass"], function (done) {
    browserSync.reload();
    done();
});

gulp.task('js-watch', ["js"], function (done) {
    browserSync.reload();
    done();
});

gulp.task('html-watch', ["html"], function (done) {
    browserSync.reload();
    done();
});

gulp.task('serve', ['browser-sync'], function () {
    gulp.watch(sources.html, ["html-watch"]);
    gulp.watch(sources.sass, ["sass-watch"]);
    gulp.watch(sources.js, ["js-watch"]);
});

gulp.task('browser-sync', ['nodemon'], function () {
    browserSync.init({
        port: 3007,
        proxy: {
            target: 'localhost:3000',
            ws: true
        }
    });
});

gulp.task('nodemon', (cb) => {

    let started = false;

    return nodemon({
        script: 'server.js'
    }).on('start', function () {
        if (!started) {
            cb();
            started = true;
        }
    });
});


gulp.task('run', ['font', 'img', 'html', 'sass', 'js','serve']);
