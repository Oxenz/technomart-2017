var gulp = require('gulp'),
		stylus = require('gulp-stylus'),
		browserSync = require('browser-sync');

gulp.task('stylus', function() {
	return gulp.src('stylus/main.styl')
		.pipe(stylus())
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({stream: true}))

});

gulp.task('bs', function() {
	browserSync({
		server: {
			baseDir: '.'
		}
	});
})

gulp.task('wt', ['bs', 'stylus'], function() {
	gulp.watch('stylus/main.styl', ['stylus']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
})