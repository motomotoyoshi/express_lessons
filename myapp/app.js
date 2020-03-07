const express = require('express'),
      logger = require('morgan'),
      app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.param('id', (req, res, next, id) => {
  const users = ['aa', 'bb', 'cc'];
  req.params.name = users[id];
  next();
})

app.get('/hello/:id', (req, res) => {
  res.send('hello ' + req.params.name);
});

app.listen(3000);
console.log(
  'Server starting...\n\n'
  + 'at http://localhost:3000\n'
);