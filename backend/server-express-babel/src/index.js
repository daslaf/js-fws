import express from 'express';
const endpoint = require('@js-fws/endpoints');

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send(`Hello kit`);
});

app.get(endpoint.counter, (req, res) => {
  res.set('Content-Type', 'application/json');

  res.send({ counters: [] });
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
