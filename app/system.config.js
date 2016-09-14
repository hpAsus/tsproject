System.config({
    defaultJSExtensions: true,

    meta: {
        'angular' : {format: 'global', exports: 'angular'},
        'angular-translate': {deps: ['angular']},
        'angular-ui-router': {deps: ['angular']},
        'angular-ui-grid': {deps: ['angular']},
        'angular-animate': {deps: ['angular']},
        'angular-messages': {deps: ['angular-messages']},
        'angular-cookies': {deps: ['angular']},
        'reflect-metadata': {format: 'global'},
        'angular-material': {deps: ['angular']},
        'angular-aria': {deps: ['angular']}
    },

    paths: {
        "ts-summer/*": "src/ts-summer/*.js",

        // 3Party libs
        "angular": "node_modules/angular/angular.js",
        "angular-translate": "node_modules/angular-translate/dist/angular-translate.js",
        "angular-ui-router": "node_modules/angular-ui-router/release/angular-ui-router.js",
        "angular-animate": "node_modules/angular-animate/angular-animate.js",
        "es6-promise": "node_modules/es6-promise/dist/es6-promise.js",
        "document-register-element": "node_modules/document-register-element/build/document-register-element.js",
        "reflect-metadata": "node_modules/reflect-metadata/Reflect.js",
        "angular-material": "node_modules/angular-material/angular-material.js",
        'angular-aria': 'node_modules/angular-aria/angular-aria.js',

        "*": "node_modules/*.js"
    }
});