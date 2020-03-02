const express = require('express'),
      app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About this page.');
});

app.listen(3000);
console.log(
  'Server starting...\n\n'
  + 'at http://localhost:3000\n'
  );