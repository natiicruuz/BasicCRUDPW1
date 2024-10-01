const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbConfig/db');
const routes = require('./routes/Routes');


const app = express();

app.use(bodyParser.json());

app.use('/', routes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});