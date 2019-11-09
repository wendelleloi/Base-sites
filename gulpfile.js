// Adiciona os modulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
var pug = require('gulp-pug');
var gulpif = require('gulp-if');

// Environment Setup
var env = process.env.NODE_ENV;

// Options for development
var styleOutput = '';

function DevOptions() {
  if (env === 'development') {
    return styleOutput = 'expanded';
  } else {
    return styleOutput = 'compressed';
  }
}

// Variáveis
env === 'development' ? styleOutput = 'expanded' : 'compressed'

// caminhos
var scssFiles = 'css/scss/**/*.scss';

// Fim variáveis 

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
  .src(scssFiles)
  .pipe(sass({outputStyle: DevOptions()}).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('html/css'))
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
  .pipe(gulpif(env === 'production', uglify()))
  .pipe(gulp.dest('html/js/'))
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
      baseDir: "./html",
      index: "index.html",
      // middleware para testar futuramente requisições no lado do cliente
      // middleware: [{
      //   route: "/",
      //   handle: (req, res, next) => {
      //     res.writeHead(302,  { 'Location': '/index.html' })                                                                                                                                                                
      //     res.end()
      //     next()
      //   }
      // }]
    },
    startPath: `index.html`
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