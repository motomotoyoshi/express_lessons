const express = require('express'),
      logger = require('morgan'),
      app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Page title'
  });
});

app.listen(3000);
console.log(
  'Server starting...\n\n'
  + 'at http://localhost:3000\n'
  );