'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');
const gulpsync = require('gulp-sync')(gulp);
const execSync = require('child_process').execSync;

let rmFolder = (dirName) => {
    execSync('rm -rf ' + dirName, (error) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
    });
};

gulp.task('delete-dist', () => {
    rmFolder('dist');
});

gulp.task('lint', () => {
    let src = gulp.src(['src/**/*.js', 'gulpfile.js']).pipe(eslint()).pipe(eslint.format()).pipe(eslint.failAfterError());
    return src;
});

gulp.task('babel', () => {
    let stream = gulp.src('src/**/*.js').pipe(babel()).pipe(gulp.dest('dist'));
    return stream;
});

gulp.task('compile', gulpsync.sync(['delete-dist', 'lint', 'babel']));

gulp.task('server', () => {
    let stream = nodemon({
        script: 'dist/server.js',
        watch: 'src',
        ext: 'js json html',
        tasks: ['lint', 'delete-dist', 'babel']
    });
    return stream;
});
