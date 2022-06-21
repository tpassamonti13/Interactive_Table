var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// setup telnet client
const { Telnet } = require('telnet-client');
const conn = new Telnet();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// telnet connection to Watchout
(async function() {

  const watchoutParams = {
    host: '192.168.0.16',
    port: 3039,
    shellPrompt: null,
    negotiationMandatory: false,
    timeout: 3000
  }

  // Watchout commands here
  try{
    await conn.connect(watchoutParams);
  } catch(err) {
    console.log("error: ", err);
  }

  console.log("connected");

  var res = await conn.send('ping');

  console.log("ping: ", res);

  res = await conn.send('authenticate 1');

  console.log("authentiate: ", res);

  res = await conn.send('run TEST');

  console.log("run TEST: ", res);

  conn.end();
})()
module.exports = app;
