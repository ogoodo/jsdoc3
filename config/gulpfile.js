const gulp = require('gulp')
const jsdoc = require('gulp-jsdoc3')

let isDll = false
let isBuild = false

if(false) {
    console.info('gulp运行目录: ', process.cwd())
    console.info('gulp运行参数: ', process.argv)
    const argv = process.argv
    argv.forEach(function (item) {
        if(item.indexOf('--NODE_ENV=')===0) {
            const nodeenv = item.replace('--NODE_ENV=', '')
            console.info('gulp打包版本: ', nodeenv)
            process.env.NODE_ENV = nodeenv;
        }
    })
}
/**
 * 如果js文件格式不合要求生成jsdoc的时候会报错误(esprima), 但是又不会提出什么错误
 * jsdoc估计是基于AST的, 如果js有错误， 他生成就会报错:ogoodo.com:2016.3.30
 * jsdoc3支持es6，jsx
 * 参考: https://github.com/jsdoc3/jsdoc
 */
gulp.task('make:jsdoc', function () {
    const cfg = require('../config/jsdoc.config.json')
    return gulp
    //.src(['./src/*.js', './src/*.jsx'])
    .src(['../src/example/*.js', '../jsdoc3/*.js'])
    .pipe(jsdoc(cfg))
    // .pipe(jsdoc('./doc-output'))
})

/**
 * 监听文件改变
 */
gulp.watch(['../src/example/*.js'], function() {
    gulp.run('make:jsdoc');
});


// 生成jsdoc帮助文档
gulp.task('jsdoc', ['make:jsdoc'])

