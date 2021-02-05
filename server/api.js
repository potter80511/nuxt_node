const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.json({ title: 'Johnny', message: 'Hello there!' });
});

module.exports = app;
