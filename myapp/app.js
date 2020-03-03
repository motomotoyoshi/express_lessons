const express = require('express'),
      app = express();

app.get('/users/:name?', (req, res) => {
  if (req.params.name) {
    res.send('Hello, ' + req.params.name);
  } else {
    res.send('Hello, nobody.');
  }
});

app.get('/items/:id([0-9]+)', (req, res) => {
  res.send('Item no: ' + req.params.id);
});

app.listen(3000);
console.log(
  'Server starting...\n\n'
  + 'at http://localhost:3000\n'
  );