/// <reference path="./Scripts/typings/express/express.d.ts" />
/// <reference path="./Scripts/typings/node/node.d.ts" />
/// <reference path="./Scripts/typings/stylus/stylus.d.ts" />
var express = require('express');
var routes = require('./routes/index');
var user = require('./routes/user');
var childproc = require('./routes/childexec');
var trybb = require('./routes/bb');
var http = require('http');
var path = require('path');
var app = express();
// all environments
var myport = process.env.PORT || 81;
console.log('starting node server on port : ' + myport);
process.env.PORT = myport;
app.set('port', process.env.PORT);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
var stylus = require('stylus');
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/cp', childproc.childproc);
app.get('/bb', trybb.tryit);
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
//# sourceMappingURL=app.js.map