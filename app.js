//app.js
var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');

// INITIALIZE THE GIPHY-API LIBRARY
var giphy = require('giphy-api')();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', function (req, res) {
  giphy.search(req.query.term, function (err, response) {
    res.render('home', {gifs: response.data})
  });
});

app.listen(3000, function () {
  console.log('Gif Search listening on port localhost:3000!');
});
