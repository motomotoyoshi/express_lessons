const express = require('express'),
      logger = require('morgan'),
      app = express();

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
  console.log('My cunstom middleware !!');
  next();
})

app.get('/hello.txt', (req, res) => {
  res.sendfile(__dirname + '/public/hello.txt');
});

app.listen(3000);
console.log(
  'Server starting...\n\n'
  + 'at http://localhost:3000\n'
  );