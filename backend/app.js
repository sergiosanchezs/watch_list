const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const adminRoute = require('./routes/admin');
require('dotenv').config();

const app = express();

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', './src/pages');

app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static(path.join(`${__dirname}/public`)));

// Old Code
// app.get('/', (req, res) => res.send('Home Route'));
// New Code
app.use('/', adminRoute);

const port = process.env.PORT || 8080;

// console.log(`HOST: ${process.env.DB_HOST}`);
// console.log(`PORT: ${process.env.PORT}`);
// console.log(`USER: ${process.env.DB_USER}`);
// console.log(`PASS: ${process.env.DB_PASS}`);

mongoose
  .connect(process.env.DB_HOST, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(port, () => console.log(`Server and Database running on ${port}, http://localhost:${port}`));
  })
  .catch((err) => {
    console.log(`Error on conneting to mongoDB\n${err}`);
  })