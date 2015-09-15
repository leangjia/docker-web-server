var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.end(new Date().toString());
});

app.get('/a', function (req, res) {
    res.end('/a');
});

module.exports = app;
