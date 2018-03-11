const express = require("express");
const  cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');

const app = require('../app');
const http = require('http');
const server = http.createServer(app);


server.listen(8080,function () {
    console.log('...server is running');
});