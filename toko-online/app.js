var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//panggil file koneksi database
require('./app_toko_online/models/db');

//router
//perbaikan ke-2
var indexRouter = require('../toko-online/app_toko_online/routes/index');
var usersRouter = require('../toko-online/app_toko_online/routes/users');
var productRouter = require('../toko-online/app_toko_online/routes/product'); //letakkan di atas agar rapi

var apiProductRouter = require('./app_toko_online/routes/api/product');
var engine = require('ejs-blocks'); //menggunakan ejs block
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_toko_online', 'views')); //perbaikan 1
app.engine('ejs', engine); //daftarkan engine ejs block
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/produk', productRouter);
app.use('/api/produk', apiProductRouter); //daftarkan router api
//serving bootstrap
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
