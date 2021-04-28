const express = require('express');
const app = express();
const port = 8080;

// Servir contenido estático

app.use(express.static('public'));

app.get('/hola-mundo', (req, res) => {
  res.send('Hello world');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log('Escuchando al puerto 8080');
});
