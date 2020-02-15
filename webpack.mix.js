const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

// template styles
mix.styles([
   'public/template/vendor/bootstrap/css/bootstrap.min.css',
   'public/template/css/clean-blog.min.css'
], 'public/css/styles.css');

// public/template js
mix.scripts([
   'public/template/vendor/jquery/jquery.min.js',
   'public/template/vendor/bootstrap/js/bootstrap.bundle.min.js',
   'public/template/js/clean-blog.min.js'
], 'public/js/main.js');