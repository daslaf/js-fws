import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send(`Hello kit`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
