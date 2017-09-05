// gulpfile.js
 var gulp = require('gulp'), 
 htmlmini = require('gulp-html-minify'), 
 useref = require('gulp-useref'), 
 uglify = require('gulp-uglify'), 
 csso = require('gulp-csso'), 
 filter = require('gulp-filter'), 
 RevAll = require('gulp-rev-all'),
 oImage = require('gulp-image'),
imagemin = require('gulp-imagemin'),
 del = require('del'); 
 gulp.task('default', function () {
	 var jsFilter = filter('**/*.js',{restore:true}), 
	 cssFilter = filter('**/*.css',{restore:true}),
	 htmlFilter = filter(['**/*.html'],{restore:true}); 
	 gulp.src('src/*.html')
	 .pipe(useref()) 
	 .pipe(jsFilter) 
	 .pipe(uglify()) 
	 .pipe(jsFilter.restore) 
	 .pipe(cssFilter)
	 .pipe(csso())
	 .pipe(cssFilter.restore)
	 .pipe(RevAll.revision({
		 dontRenameFile: ['.html'],
		 dontUpdateReference: ['.html']
		 }))
	 .pipe(htmlFilter)
	 .pipe(htmlFilter.restore)
	 .pipe(gulp.dest('dist'));
	 gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
 });

