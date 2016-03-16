// common modules
var gulp            = require('gulp');
var concat          = require('gulp-concat');
var rename          = require('gulp-rename');
var inject          = require('gulp-inject');
var shell           = require('gulp-shell');
var series          = require('stream-series');
var del             = require('del').sync;

// TS/JS modules
var webpack         = require('webpack-stream');
var uglify          = require('gulp-uglify');
var templateCache   = require('gulp-angular-templatecache');

// SASS/CSS modules
var sass            = require('gulp-sass');
var minifyCSS       = require('gulp-cssmin');

// livereload modules
var browserSync     = require('browser-sync').create();
var reload          = browserSync.reload;

gulp.task('index', function() {
    return gulp.src('app/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('clean:dist', function() {
    return del('dist/**/*');
});

var prodVendorFonts = [
    'app/bower_components/bootstrap/fonts/**/*'
];

var prodAssets = [
    'assets/**/*'
];

var prodVendorStyles = [
    'app/bower_components/bootstrap/dist/css/bootstrap.min.css',
    'app/bower_components/bootstrap/dist/css/bootstrap-theme.min.css'
];

var prodVendorScripts = [
    'app/bower_components/lodash/dist/lodash.min.js',
    'app/bower_components/angular/angular.min.js',
    'app/bower_components/angular-animate/angular-animate.min.js',
    'app/bower_components/angular-sanitize/angular-sanitize.min.js',
    'app/bower_components/angular-ui-router/release/angular-ui-router.min.js'
];
var prodAssetsStream = () => gulp.src(prodAssets)
    .pipe(gulp.dest('dist/assets'));
gulp.task('prod:assets', () => prodAssetsStream());

var  prodVendorFontStream = () => gulp.src( prodVendorFonts)
    .pipe(gulp.dest('dist/fonts'));
gulp.task('prod:vendor:fonts', () => prodVendorFontStream());

var  prodVendorStyleStream = () => gulp.src(prodVendorStyles)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('dist'));
gulp.task('prod:vendor:styles', () => prodVendorStyleStream());

var  prodVendorScriptStream = () => gulp.src(prodVendorScripts)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist'));
gulp.task('prod:vendor:scripts', () => prodVendorScriptStream());

var  prodAppTemplateStream = () => gulp.src('app/src/**/*.html')
    .pipe(templateCache({ standalone: true }))
    .pipe(gulp.dest('dist'));
gulp.task('prod:app:templates', () => prodAppTemplateStream());

var  prodAppStyleStream = () => gulp.src('app/src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist'));
gulp.task('prod:app:styles', () =>  prodAppStyleStream());

var  prodAppScriptStream = () => gulp.src('app/src/app.ts')
    .pipe(webpack(require('./app/webpack.conf.js')))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
gulp.task('prod:app:scripts', () =>  prodAppScriptStream());

gulp.task('prod:build', ['clean:dist', 'prod:vendor:fonts', 'prod:assets'], function() {
    var vendorSeries = series(
         prodVendorStyleStream(),
         prodAppStyleStream()
    );
    var appSeries = series(
         prodVendorScriptStream(),
         prodAppTemplateStream(),
         prodAppScriptStream()
    );
    return gulp.src('app/index.html')
        .pipe(inject(vendorSeries, { ignorePath: '/dist' }))
        .pipe(inject(appSeries, { ignorePath: '/dist' }))
        .pipe(gulp.dest('dist'));
});

var devAssets = [
    'assets/**/*'
];

var devVendorFonts = [
    'app/bower_components/bootstrap/fonts/**/*'
];

var devVendorStyles = [
    'app/bower_components/bootstrap/dist/css/bootstrap.css',
    'app/bower_components/bootstrap/dist/css/bootstrap-theme.css'
];

var devVendorScripts = [
    'app/bower_components/lodash/dist/lodash.js',
    'app/bower_components/angular/angular.js',
    'app/bower_components/angular-animate/angular-animate.js',
    'app/bower_components/angular-sanitize/angular-sanitize.js',
    'app/bower_components/angular-ui-router/release/angular-ui-router.js'
];

var devAssetsStream = () => gulp.src(devAssets)
    .pipe(gulp.dest('dist/assets'));
gulp.task('dev:assets', () => devAssetsStream());

var devVendorFontStream = () => gulp.src(devVendorFonts)
    .pipe(gulp.dest('dist/fonts'));
gulp.task('dev:vendor:fonts', () => devVendorFontStream());

var devVendorStyleStream = () => gulp.src(devVendorStyles)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('dist'));
gulp.task('dev:vendor:styles', () => devVendorStyleStream());

var devVendorScriptStream = () => gulp.src(devVendorScripts)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist'));
gulp.task('dev:vendor:scripts', () => devVendorScriptStream());

var devAppTemplateStream = () => gulp.src('app/src/**/*.html')
    .pipe(templateCache({ standalone: true }))
    .pipe(gulp.dest('dist'));
gulp.task('dev:app:templates', () => devAppTemplateStream());

var devAppStyleStream = () => gulp.src('app/src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
gulp.task('dev:app:styles', () => devAppStyleStream());

var devAppScriptStream = () => gulp.src('app/src/app.ts')
    .pipe(webpack(require('./app/webpack.conf.js')))
    .pipe(gulp.dest('dist'));
gulp.task('dev:app:scripts', () => devAppScriptStream());

gulp.task('dev:build', ['clean:dist', 'dev:vendor:fonts', 'dev:assets'], function() {
    var vendorSeries = series(
        devVendorStyleStream(),
        devAppStyleStream()
    );
    var appSeries = series(
        devVendorScriptStream(),
        devAppTemplateStream(),
        devAppScriptStream()
    );
    return gulp.src('app/index.html')
        .pipe(inject(vendorSeries, { ignorePath: '/dist' }))
        .pipe(inject(appSeries, { ignorePath: '/dist' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['dev:build'], function() {
    browserSync.init({
        browser: "google-chrome",
        server: { baseDir: "./dist" }
    });

    gulp.watch("app/src/**/*.scss", ['dev:app:styles']);
    gulp.watch([
        "app/src/**/*.ts"
    ], ['dev:app:scripts']).on('change', reload);
    gulp.watch([
        "app/src/**/*.html",
        "!app/src/index.html"
    ], ['dev:app:templates']).on('change', reload);
    gulp.watch([
        "app/index.html",
        "app/tsconfig.json"
    ], ['dev:build']).on('change', reload);
});

gulp.task('install', shell.task([
    'npm install',
    'cd app && bower install',
    'cd app && typings install',
    'gulp dev:build'
], { interactive: true }));

gulp.task('default', ['dev:build']);
