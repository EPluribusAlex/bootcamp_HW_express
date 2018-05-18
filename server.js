var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');

var htmlRouter = require('./app/routes/html');
var apiRouter = require('./app/routes/api');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'app/public')));

app.use('/api', apiRouter);
app.use('/', htmlRouter);

module.exports = app;
