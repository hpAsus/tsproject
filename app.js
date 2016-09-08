var express = require('express'),
    server = express(),
    port = process.env.PORT || 8000,
    path = require('path'),
    fs = require('fs'),
    wkVars = require('wk-vars');

var md5 = require('md5');
var express = require('express');
var router = require('./server/router');
var apiRouter = require('./server/router_api');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var session = require('express-session');
var pause = require('connect-pause');

// USER MODEL
// =====================================================================================================================
var UserManager = require('./server/userManager');
var user1 = new UserManager({
    email: 'olga@mail.ru',
    password: md5('123'),
    name: 'Olga',
    birthdate: '08-04-1984',
    age: 32,
    bio: 'Nice beaver!',
    role: 'admin'
});

var user2 = new UserManager({
    email: 'peter@mail.ru',
    password: md5('123'),
    name: 'Peter',
    birthdate: '11-10-1991',
    age: 18,
    bio: 'Do not have any bio right now!'
});

// user1.createUser();
// user2.createUser();

// =====================================================================================================================
// CONFIGS
// =====================================================================================================================
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
// Method Override
server.use(methodOverride('X-HTTP-Method-Override'));

//Session settings
server.use(session({
    secret: 'angular secret key',
    resave: true,
    rolling: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 10 * 60 * 1000
    }
}));


server.use('/', express.static(__dirname + '/app'));
server.use('/node_modules', express.static(__dirname + '/node_modules'));
server.use(wkVars.init(path.join(__dirname, '/')));

server.use('/_versions.txt', function (req, resp) {
    resp.setHeader('Content-Type', 'text/plain');

    fs.access(__dirname + '/_versions.txt', fs.F_OK, function (err) {
        if (!err) {
            resp.sendFile(__dirname + '/_versions.txt');
        } else {
            resp.sendFile(__dirname + '/versions.txt');
        }
    });

});

// Router Settings
// =====================================================================================================================
server.use('/', router);

// All of the API routes will be prefixed with '/api'
server.use('/api', apiRouter);

// check all API routes for all requests - user should be authenticated
server.all('/api/*', function (req, res, next) {
    if (req.session.authenticated) {
        next();
    } else {
        res.sendStatus(401);
    }
});


process.on('uncaughtException', function (err) {
    console.log(err);
});

// START THE SERVER
// =====================================================================================================================
var serverInstance = {
    app: server
};
var appListen = server.listen;
server.listen = function() {
    return serverInstance.http = appListen.apply(this, arguments);
};
server.listen(port, function () {
    console.log('Magic happens on port ' + port);
});

module.exports = serverInstance;