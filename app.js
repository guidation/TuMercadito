const express = require('express');
const http = require('http');
const port = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./src/app/configMensaje');

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.post('/formulario', (req, res) => {
  configMensaje(req.body);
  res.status(200).send();
})

app.listen(3001, () => {
  console.log('Servidor corriendo')
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port,() => {
  console.log(`Server running at port `+ port);
});

