const express = require('express'),
      app = express(),
      logger = require('morgan'),
      bodyParser = require('body-parser'),
      methodOverride = require('method-override'),
      post = require('./routes/post');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride())

app.use(logger('dev'));

// routing
app.get('/', post.index);
app.get('/posts/new', post.new);
// app.post('/posts/create', post.create);
app.get('/posts/:id([0-9]+)', post.show);
// app.get('/posts/:id/edit', post.edit);
// app.put('/posts/:id', post.update);
// app.delete('/posts/:id', post.destroy);

app.listen(5000);
console.log('server starting... http://localhost:5000\n');