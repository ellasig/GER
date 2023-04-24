'use strict';
const express = require('express');
const app = express();

const port = 5000;

app.use(express.json());

app.get('/test', (req, res) => {
  res.send('testi toimii');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));