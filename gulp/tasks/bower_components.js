'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');

module.exports = gulp.task('assets', function() {
    return gulp.src(config.paths.src.bower)
        .pipe(gulpif(release, gulp.dest(config.paths.dest.release.bower), gulp.dest(config.paths.dest.build.bower)));
});