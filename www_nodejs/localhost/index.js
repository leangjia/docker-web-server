var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.end('Hello, World!');
});

app.get('/node', function (req, res) {
    res.end('/node');
});

module.exports = app;
