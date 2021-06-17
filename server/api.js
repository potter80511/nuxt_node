const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.json({ title: 'Johnny', message: 'Hello there!' });
});

app.get('/courses', (req, res) => {
  res.json({
    courses: [{
      id: 1,
      name: '進入python世界',
      color: '#ff5522',
    }]
  });
});

module.exports = app;
