// const {src ,dest} = require('gulp');
// const loadPlugins = require('gulp-load-plugins');
// const $ = loadPlugins();

// function image() {
//     return src('./src/img/logo/logo.png')
//     //拡張子を指定するとその拡張子のファイルのみに対して実行してくれる
//         .pipe($.imagemin())
//         .pipe(dest('./dest/img/logo'));
// }

// exports.image = image;

// モジュールの定義
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

// 関数の定義
const ImgImagemin = function() {
  return gulp
  .src("./src/img/**") //タスクを実行するディレクトリを指定
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/img")) // 出力先ディレクトリを指定
};
// 処理実行
export default(done) => {
  ImgImagemin();
  done();
}

