var express = require('express');
var timeout = require('connect-timeout');
var bodyParser = require('body-parser');

var app = express();

app.use(timeout(5000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next) {
	if (!req.timedout) next();
}

app.use(bodyParser.json());

require('./router')(app);

module.exports = app;
