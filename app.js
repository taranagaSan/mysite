const express = require("express");
const  cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
require('./app_server/models/db');


const index = require('./app_server/routes/index');

const app = express();
// const jsonParser = bodyParser.json();



app.set('x-powered-by', false);
app.set('views', __dirname + '/views');
app.engine('mustache', mustacheExpress());
app.set('view engine','mustache');

app.use('/public', express.static('public'));
app.use('/', index);
app.use('/registration', index);
app.use('/places', index);

app.use(function (req, res, next) {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use(function (error, req, res, next) {
    res.locals.message = error.message;
    res.locals.error = req.app.get('env') === 'development' ? error : {};
    res.status(error.status || 500);
    res.render('error');
});
module.exports = app;