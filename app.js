var express = require('express'),
    server = express(),
    port = process.env.PORT || 8000,
    path = require('path'),
    fs = require('fs'),
    wkVars = require('wk-vars');

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
process.on('uncaughtException', function (err) {
    console.log(err);
});

server.listen(port, function () {
    console.log('listening on port ' + port);
});