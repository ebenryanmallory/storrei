var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var hbs = require('hbs');
var hbs = require('express-hbs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var grapesRouter = require('./routes/grapesjs');
var portalRouter = require('./routes/portal');
var standardtemplateRouter = require('./routes/standard-template');
var blanktemplatelRouter = require('./routes/blank-template');
var dashboardRouter = require('./routes/dashboard');

var app = express();

app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
  }));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/users', usersRouter);
app.use('/grapes/', grapesRouter);
app.use('/portal', portalRouter);
app.use('/standard-template', standardtemplateRouter);
app.use('/blank-template', blanktemplatelRouter);
app.use('/dashboard/', dashboardRouter);

module.exports = app;
