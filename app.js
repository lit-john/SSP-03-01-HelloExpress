// My main file
var express = require("express");
var app = express();

app.get('/', function(req, res) {
  console.log("Received a get request");
  var o = {
    msg: "Hello from node (JSON)"
  };
  res.type('application/json');
  res.send(JSON.stringify(o));
});

app.get('/index.html', function(req, res) {
  res.type('png');
  res.send("<html><body><h3>Hello from Express.</h3></body></html>")
});

app.listen(process.env.PORT || 3000, function() {
  console.log("I'm up and running on port 3000");
});
