const gulp = require('gulp-help')(require('gulp'));
const wkDefaults = require('gulp-wk-default')(gulp);
const fs = require('fs');
const yargs = require('yargs');
const es = require('event-stream');
const bump = require('gulp-bump');
const rename = require('gulp-rename');

// loading of gulp-wk-default profiles
wkDefaults.loadProfiles('ts-application');

// loading custom configuration
wkDefaults.loadConfig(require('./gulp.config'));

gulp.task('copy:wkFonts', wkDefaults.tasks.copy());

wkDefaults.dependencies('build:local').pop();
wkDefaults.dependencies('sass').push('copy:wkFonts');
wkDefaults.dependencies('build:stage:2').push('compile:tsc', 'sass');
wkDefaults.dependencies('build:stage:3').push('build:versions');
wkDefaults.dependencies('build:stage:4').pop();

gulp.task('build:applyVersion', function (cb) {
    var argv = yargs.argv;

    if (argv.majorVersion || argv.sprintNumber || argv.buildNumber) {
        var majorVersion = argv.majorVersion || '0';
        var sprintNumber = argv.sprintNumber || '0';
        var buildNumber = argv.buildNumber || '0';

        var version = majorVersion + '.' + sprintNumber + '.' + buildNumber;

        var packages = gulp.src(['./dist/tlp.pckg.json', './dist/package.json'])
            .pipe(bump({version: version}))
            .pipe(gulp.dest('./dist'));

        gulp.src('./dist/*vars.json')
            .pipe(bump({version: version}))
            .pipe(gulp.dest('./dist'));

        var versionstxt = gulp.src(['./dist/_versions.txt'])
            .pipe(bump({'version': version, 'key': 'product.version'}))
            .pipe(gulp.dest('./dist'))
            .pipe(rename('versions.txt'))
            .pipe(gulp.dest('./dist'));

        return es.merge(packages, versionstxt);

    } else {
        cb();
    }
});

gulp.task('build:versions', function (done) {
    var npmPath = __dirname + '/node_modules',
        versions = {
            product: getProductInfo('tlp.pckg.json'),
            npm: {},
            env: {
                node: process.version,
                platform: process.platform
            }
        };

    versions.npm = versionsParse(npmPath, 'package.json');

    fs.writeFile('_versions.txt', JSON.stringify(versions, null, 4), 'utf8', function () {
        done();
    });
});

function versionsParse(mainFolderPath, versionFile) {
    var resultJson = {};
    var mainFolderComponents = fs.readdirSync(mainFolderPath);

    for (var i = 0, item, itemDirPath, itemDir; i < mainFolderComponents.length; i += 1) {
        item = mainFolderComponents[i];

        itemDirPath = mainFolderPath + '/' + item;
        itemDir = fs.readdirSync(itemDirPath);

        if (itemDir.indexOf(versionFile) > -1) {
            var json = fs.readFileSync(itemDirPath + '/' + versionFile, {encoding: 'utf8'});

            json = JSON.parse(json);

            if (json.name.indexOf('wk') > -1) {
                resultJson[json.name] = json.version;
            }
        }
    }

    return resultJson;
}
function getProductInfo(infoFile) {
    try {
        var productInfo = fs.readFileSync(infoFile, {encoding: 'utf8'});
    } catch (e) {
        //silent
        return;
    }

    productInfo = JSON.parse(productInfo);

    return {
        name: productInfo['name'],
        version: productInfo['version']
    }
}