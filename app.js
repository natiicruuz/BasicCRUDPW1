const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbConfig/db');
const routes = require('./routes/Routes');
const path = require('path');  // Importa 'path' para manejar rutas de archivos
const cors = require('cors');

const app = express();

app.use(cors());

// app.use(bodyParser.json());

// Middleware para analizar cuerpos JSON
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});