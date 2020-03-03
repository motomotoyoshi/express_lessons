const express = require('express'),
      app = express();
app.use(express.static(__dirname + '/public'));

app.get('/hello.txt', (req, res) => {
  res.sendfile(__dirname + '/public/hello.txt');
});

app.listen(3000);
console.log(
  'Server starting...\n\n'
  + 'at http://localhost:3000\n'
  );