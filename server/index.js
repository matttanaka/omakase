const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const path = require('path');
// const router = require('./routes');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
// app.use('/', router);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(PORT, () => {
  console.log(`Listening on port${PORT}`);
});
