const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbConfig/db');
const routes = require('./routes/Routes');
const path = require('path');  // Importa 'path' para manejar rutas de archivos
const cors = require('cors');
const fs = require('fs');
const https = require('https');

const app = express();

app.use(cors());

// Middleware para analizar cuerpos JSON
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


// Configuración de HTTPS con la clave privada y el certificado
const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, 'certs', 'btnhd.com.key')),  // Clave privada
  cert: fs.readFileSync(path.join(__dirname, 'certs', 'btnhd.com.crt'))  // Certificado
};

https.createServer(httpsOptions, app).listen(3000, () => {
  console.log('Server started on port 3000');
});