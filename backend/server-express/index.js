const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const port = process.env.PORT || 8888;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

app.get('/', (req, res) => res.send('Hello from server-express'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
