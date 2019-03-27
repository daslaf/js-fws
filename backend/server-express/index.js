const express = require('express');
const bodyParser = require('body-parser');

const endpoint = require('@js-fws/endpoints');
const { getCounters } = require('./queries');

const port = process.env.PORT || 8888;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`Hello kitten`);
});

app.get(endpoint.COUNTER, getCounters);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
