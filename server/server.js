var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var Flat = require('./models/flatsModel');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);

mongoose.connection.on('error', function() {
     console.log('Could not connect to the database. Exiting now...'); 
     process.exit(); 
}); 

mongoose.connection.once('open', function() { 
    console.log("Successfully connected to the database"); 
}) 

var http = require('http');

//ajout des routes ici 
var routes = require('./routes/flats'); 
routes(app); 

app.all('/*', function(req, res, next) { 
    // CORS headers 
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain 
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'); 
    // Set custom headers for CORS 
    // res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key'); 
    // if (req.method == 'OPTIONS') 
    // { res.status(200).end(); 
    // } else { 
    //     next(); 
    // } 
}); 

app.use('/', require('./routes'));
app.on('uncaughtException', function (err) {
    console.error(err.stack);
    console.log("Node NOT Exiting...");
});


app.get('/', function(req, res){   //route d'origine mise dans
    res.json({"message": "test réponse de l'API"});
});

// If no route is matched by now, it must be a 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// Start the server
app.set('port', process.env.PORT || 8000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});