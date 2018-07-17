require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const { SERVER_PORT } = process.env;

const app = express();

// top level middleware -- runs with each request
app.use(bodyParser.json());

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port: ${SERVER_PORT}`);
});
