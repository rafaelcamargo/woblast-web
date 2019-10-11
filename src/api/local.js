/* eslint no-undef: 0 */

const ENV = require('../../environments/development.js');
const axios = require('axios');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/finance', (req, res) => {
  axios.get(`https://api.hgbrasil.com/finance?key=${ENV.HG_BRASIL_API.KEY}`).then(({ data }) => {
    res.send(data);
  }, err => {
    res.status(status).send(err);
  });
});

app.listen(3000, () => {
  console.log('Local API Running on port 3000...');
});
