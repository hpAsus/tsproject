module.exports = function (config) {
    config.bundleTsc.files.push("{{{$srcDir}}}/{{{$$package.name}}}/types.d.ts");
    config.copyStatic.src = ["{{{$appDir}}}/**/*.{html,js,json}"];
    config.sass.config = {
        src: ['{{{$appDir}}}/index.scss'],
        includePaths: [
            './node_modules/wk-css/src',
            './node_modules/wk-css/src/wk-lib/utilities',
            './node_modules/wk-icons/src',
            './node_modules/bootstrap-sass/assets/stylesheets',
            './node_modules/modularscale-sass/stylesheets',
            './node_modules/breakpoint-sass/stylesheets',
            './node_modules/susy/sass/',
            './node_modules/angular-ui-grid/'
        ]
    };
    config.sassWatch.config = config.sass.config;
    config.copyWkFonts = {
        src: './node_modules/wk-css/src/wk-components/fonts/**/*',
        dest: './dist/app/assets/fonts'
    };
    config.sass.autoprefixer = {
        options: {
            browsers: ['last 2 versions']
        }
    };
    config.sass.minifyCSS = {
        options: {
            debug: false,
            restructure: false
        }
    };

    config.copyServerFiles = {
        src: './server/**/*.js',
        dest: './dist/server'
    };

    config.copyDataFiles = {
        src: './data/**/*',
        dest: './dist/data'
    };

};