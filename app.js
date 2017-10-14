const express = require('express');
const path = require('path');

// Init App
const app = express();

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', function(req, res) {
  res.render('index', {
    title: 'Articles'
  });
});

// Add route
app.get('/articles/add', function(req, res) {
  res.render('add', {
    title:'Add article'
  });
});

// Start server
app.listen(3000, function() {
  console.log('\nServer started\nPort: 3000\n');
});
