const express = require('express'),
      logger = require('morgan'),
      bodyParser = require('body-parser'),
      app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/new', (req, res) => {
  res.render('new');
});

app.post('/create', (req, res) => {
  res.send(req.body.name);
});

app.listen(3000);
console.log(
  'Server starting...\n\n'
  + 'at http://localhost:3000\n'
);