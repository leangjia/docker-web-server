var express = require('express');

/*
var mongoose = require('mongoose');
var Video = require('./models/Video.js');
mongoose.connect('mongodb://mongodb/dbname');
*/

var app = express();

app.onClearCache = function(){
    /*
     * If index.js use mongoose,then must delete mongoose model and close mongoose conect
     * Because index.js will recreate Video model and reconnect MongoDB
     * for example:
        delete mongoose.connection.models['Video'];//remove mongoose model 'Video'
        mongoose.disconnect();//close mongoose all connect;
    */
};

app.get('/', function (req, res) {
    res.end('Hello, World!');
});

module.exports = app;
