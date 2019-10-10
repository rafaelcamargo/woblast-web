const ENV = require('../../environments/development.js');
const axios = require('axios');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/finance', (req, res) => {
  axios.get(`https://api.hgbrasil.com/finance?key${ENV.HG_BRASIL_API.KEY}`).then(({ data }) => {
    res.send(data);
  }, err => {
    const { data: { status } } = err.response;
    res.status(status).send(data);
  })
});

app.listen(3000, () => {
  console.log(`Local API Running on port 3000...`);
});
