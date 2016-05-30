var express = require('express');
var app = express();
//var cookieParser = require('cookie-parser');

//app.use(cookieParser());

app.use(express.static('src'));

app.set ('views', './src/views');
app.set ('view engine', 'jade');

app.get('/', function(req, res) {
  //console.log("Cookies: ", req.cookies);
  res.render('index');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});