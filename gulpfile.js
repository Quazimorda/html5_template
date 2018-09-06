var	gulp 					= require('gulp'),
		sass					= require('gulp-sass'),
		concatCSS 		= require('gulp-concat-css'),
		concat 				= require('gulp-concat'),
		cleanCSS			= require('gulp-clean-css'),
		browserSync		= require('browser-sync'),
		uglify				= require('gulp-uglify'),
		rename     	 	= require('gulp-rename'),
		cache					= require('gulp-cache'),
		imagemin 			= require('gulp-imageMin'),
		autoprefixer	= require('gulp-autoprefixer'),
		wiredep				= require('wiredep').stream,
		notify				= require('gulp-notify')
;

 

/**
 * Собираем и минифицируем скрипты из app/js/main.js
 */

gulp.task('scripts', function() {
	return gulp.src([
		'app/js/main.js'
		])
	.pipe(concat('main.min.js'))
	.pipe(uglify()) // Минимизировать js
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true})); 
});



/**
 * Установленные через bower плагины - которые лежат а папке app/libs,
 * подключаются автоматически в файл index.html. Файлы стилей подключаются
 * между комментариями <!-- bower:css --> и <!-- endbower -->, 
 * а скрипты - <!-- bower:js --> и <!-- endbower -->
 */

gulp.task('bower', function() {
	gulp.src('./app/index.html')
		.pipe(wiredep({
			directory : "app/libs"
		}))
		.pipe(gulp.dest('./app'))
});



/**
 * Запускаем веб-сервер с проектом из папки baseDir
 */

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});



/**
 * В папке app/sass в файле main.sass собираются стили из _fonts.sass и _vars.sass.
 * Затем идут собственно стили проекта, в самом конце добавляются медиа-запросы для
 * адаптивной вёрстки. В этой задаче из  файла app/sass/main.sass создаются css-стили
 * в папке app/css. На этапе разработки переименование файла main.css в main.min.css
 * и минифицирование стилей отключено - (пайпы: rename и cleanCSS). На этапе продакшена -
 * публикации проекта на хостинге, эти опции лучше включить.
 */

gulp.task('styles', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass().on("error", notify.onError()))
	//.pipe(rename({suffix: '.min', prefix : ''}))	// Добавление суффикса "min.css" к файлам стилей
	.pipe(autoprefixer(['last 15 versions']))	// добавление префиксов в нужных стилях
	//.pipe(cleanCSS())	// Чистка и минифицирование всех .css фалов
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});



/**
 * Задача watch - наблюдение за изменением файлов проекта. Перед этим принудительно
 * запускаются задачи: styles - обновление стилей, scripts - обновление скриптов java-script,
 * bower - подключение в проект, установленных библиотек из папки app/libs, и browser-sync -
 * обновление проекта в браузере. Затем слежение отдельно описано для задач: styles, scripts
 * и browser-sync.
 */

gulp.task('watch', ['styles', 'scripts', 'bower', 'browser-sync'], function() {
	gulp.watch('app/sass/**/*.sass', ['styles']);
	gulp.watch(['libs/**/*.js', 'app/js/main.js'], ['scripts']); // Если изменились библиотеки
	gulp.watch('app/js/*.js').on("change", browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});



/**
 * Задача не запускается автоматически, для её запуска следует в командной строке npm
 * ввести команду 'gulp imagemin'. Это позволит немного уменьшить размер всех картинок
 * проекта в папке app/images.
 */

gulp.task('imagemin', function() {
	return gulp.src('app/images/**/*')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('app/images')); 
});



/**
 * Задачей по-умолчанию объявляется залача  слежения - watch.
 */

gulp.task('default', ['watch']);