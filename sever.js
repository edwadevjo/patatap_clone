// var bodyParser     = require("body-parser"),
//     mongoose       = require("mongoose"),
//     express        = require("express"),
//     request        = require("request");
//     var app        = express();

var express = require("express");
var app     = express();


//APP CONFIG
app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/script'));
//Store all JS and CSS in Scripts folder.

app.get('/patatap', function(req,res){
  res.sendFile('/index.html');
  //It will find and locate index.html from View or Scripts
});

app.listen(3000);


/* it should come together */
console.log("Running at Port 3000");
app.listen(process.env.PORT, process.env.IP, function(){
  console.log("HTML SERVER IS RUNNING!"); 
});

