const express = require('express');
const timeout = require('connect-timeout');
const bodyParser = require('body-parser');

const app = express();

const haltOnTimedout = (req, res, next) => {
    if (!req.timedout) next();
};

app.use(timeout(5000));
app.use(haltOnTimedout);

app.use(bodyParser.json());

require('./router')(app);

module.exports = app;
