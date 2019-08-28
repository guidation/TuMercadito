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

const path = require('path');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/elmercadito'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/elmercadito/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

