/// <reference path="./Scripts/typings/express/express.d.ts" />
/// <reference path="./Scripts/typings/node/node.d.ts" />
/// <reference path="./Scripts/typings/stylus/stylus.d.ts" />



import express = require('express');
import routes = require('./routes/index');
import user = require('./routes/user');
import childproc = require('./routes/childexec');
import trybb = require('./routes/bb');
import http = require('http');
import path = require('path');

var app = express();

// all environments


var myport =  process.env.PORT || 81;
console.log('starting node server on port : ' + myport);
  process.env.PORT =myport;



app.set('port', process.env.PORT);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

import stylus = require('stylus');
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

http.createServer(app).listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});
