'use strict';

//npm i --save-dev gulp gulp-watch gulp-autoprefixer gulp-uglify gulp-sass gulp-sourcemaps gulp-rigger gulp-minify-css gulp-csscomb gulp-imagemin imagemin-pngquant browser-sync

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    csscomb = require('gulp-csscomb'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    browserSync = require("browser-sync"),
    rimraf = require('rimraf'),
    typograf = require('gulp-typograf'),
    reload = browserSync.reload;

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        libs: 'build/js/libs',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/main.js',
        libs: 'src/js/libs/**/**',
        style: 'src/sass/main.scss',
        img: 'src/img/**/**',
        fonts: 'src/fonts/**/**',
        favicon: 'src/favicon.ico'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        libs: 'src/js/libs/**/**',
        style: 'src/sass/**/*.scss',
        img: 'src/img/**/**',
        fonts: 'src/fonts/**/**'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: false,
    host: 'localhost',
    port: 9004,
    logPrefix: "dev"
};

gulp.task('server', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(typograf({lang: 'ru'}))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        //.pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['src/sass/'],
            //outputStyle: 'compressed',
            //sourceMap: true,
            errLogToConsole: true
        }))
        .pipe(autoprefixer())
        .pipe(csscomb())
        //.pipe(cssmin())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        //.pipe(sourcemaps.init())
        //.pipe(uglify())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('libs:build', function() {
    gulp.src(path.src.libs)
        .pipe(gulp.dest(path.build.libs))
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false,
                removeTitle: true
            }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('favicon:build', function() {
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html))
});

gulp.task('build', [
    'html:build',
    'style:build',
    'image:build',
    'js:build'
]);

gulp.task('build-full', [
    'html:build',
    'style:build',
    'image:build',
    'js:build',
    'libs:build',
    'fonts:build',
    'favicon:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});


gulp.task('default', ['build', 'server', 'watch']);
gulp.task('full', ['build-full', 'server', 'watch']);