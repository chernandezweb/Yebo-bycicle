/**
 * Created by Carlos Hernandez on 2018-01-23.
 */
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
// const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const changed = require('gulp-changed');
const minifyCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
// const concat = require('gulp-concat');

/*
   -- TOP LEVEL FUNCTIONS --

  gulp.task - Define tasks
  gulp.src - Point to files to use
  gulp.dest - Points to folder to output
  gulp.watch - watch files and folders for changes
*/


// Logs Message

gulp.task('message', function(){
    return console.log('Gulp is running...');
});

// //Copy all html files
//
// gulp.task('copyHtml',function(){
//     gulp.src('src/*.html').pipe(gulp.dest('dist'));
//
// });

// //Optimize images
//
gulp.task('imageMin', () =>
gulp.src('src/Assets/media/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('src/Assets/media/images-min'))
  );

// //Minify Js
// gulp.task('minify',function(){
//   gulp.src('src/js/*.js')
//   .pipe(uglify())
//   .pipe(gulp.dest('dist/js'));
// });

//Compile sass
gulp.task('sass',function(){
  gulp.src('src/Assets/scss/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed('src/Assets/css'))
    .pipe(gulp.dest('src/Assets/css'));
});

//scripts
// gulp.task('scripts',function(){
//   gulp.src('src/js/*.js')
//     .pipe(concat('main.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js'));
// });
//
//
// gulp.task('default', ['message', 'copyHtml','imageMin','sass','scripts']);


gulp.task('watch',function(){
  // gulp.watch('src/js/*.js',['scripts']);
  // gulp.watch('src/images/*',['imageMin']);
  gulp.watch('src/Assets/scss/*.scss',['sass']);
  // gulp.watch('src/*.html',['copyHtml']);
});
