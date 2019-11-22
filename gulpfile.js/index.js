const {series, src, dest} = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function clean(cb) {
    cb();
}

function build() {
    return src('src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest('dist/'));
}

exports.build = build;
exports.default = series(clean, build);
