const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/hola-mundo', (req, res) => {
  res.send('Hello world');
});

app.get('*', (req, res) => {
  res.send('404 | Page not Found');
});

app.listen(port, () => {
  console.log('Escuchando al puerto 8080');
});
