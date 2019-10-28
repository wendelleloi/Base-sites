// Adiciona os modulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
var pug = require('gulp-pug');

// Função para compilar o Pug
function CompilaPug() {
  return gulp 
  .src('pug/*.pug')
  .pipe((pug({
    doctype: 'html',
    pretty: true
  })))
  .pipe(gulp.dest('html/'))
  .pipe(browserSync.stream());
}

// Tarefa de gulp para a função Pug
gulp.task('pug', function(done){
  CompilaPug();
  done();
});

// Funçao para compilar o SASS e adicionar os prefixos
function compilaSass() {
  return gulp
  .src('css/scss/**/*.scss')
  .pipe(sass({
    outputStyle: 'expanded' // use compressed para ficar em line 
  }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('css/'))
  .pipe(browserSync.stream());
}

// Tarefa de gulp para a função de SASS
gulp.task('sass', function(done){
  compilaSass();
  done();
});

// Função para juntar o JS
function gulpJS() {
  return gulp
  .src('js/main/*.js')
  .pipe(concat('main.js'))
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('js/'))
  .pipe(browserSync.stream())
}

gulp.task('mainjs', gulpJS);

// JS Plugins
function pluginJS() {
  return gulp
  .src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/moment/min/moment.min.js',
    'js/plugins/*.js'
  ])
  .pipe(concat('plugins.js'))
  .pipe(gulp.dest('js/'))
  .pipe(browserSync.stream())
}

gulp.task('pluginjs', pluginJS);

// Função para iniciar o browser
function browser() {
  browserSync.init({
    server: {
      baseDir: "./html"
    }
  });
}

// Tarefa para iniciar o browser-sync
gulp.task('browser-sync', browser);

// Função de watch do Gulp
function watch() {
  gulp.watch('css/scss/**/*.scss', compilaSass);
  gulp.watch('js/main/*.js', gulpJS);
  gulp.watch('js/plugins/*.js', pluginJS);
  // gulp.watch(['*.html']).on('change', browserSync.reload);
  gulp.watch(['pug/**/*.pug'],CompilaPug);
}

// Inicia a tarefa de watch
gulp.task('watch', watch);

// Tarefa padrão do Gulp, que inicia o watch e o browser-sync
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'mainjs', 'pluginjs','pug'));