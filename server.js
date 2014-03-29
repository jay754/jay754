var forever = require("forever");
var util = require('util');
var express = require("express");
var app = express();

var port = 2368;
var host = "127.0.0.1";

app.use(express.static(__dirname + "/public"));

app.use(app.router);

app.use(function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.listen(port, host, function(){
  console.log("server has been started at port " + port);
});
