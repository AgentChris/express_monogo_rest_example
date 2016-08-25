'use strict';
// dependencies
const express = require('express');
const bodyParser = require('body-parser');

// const router = express.Router(); // get an instance of the express Router

// create an instance of express
const app = express();

//unsafe
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// configure body-parser to accept
// urlencoded bodies and json data
app.use(bodyParser.urlencoded({ extended: true }))
   .use(bodyParser.json());

// connection to the database
require('./configs/database');

// route registration
app.use('/api', require('./routes/pirate'));

// error handling

// 404 errors
app.use((req, res, next) => {
  res.status(404).json({ message: 'Resource not found' });
});

// 500 errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

// set the port to use
const port = parseInt(process.env.PORT, 10) || 3000;

// start the server
const server = app.listen(port, () => {
  console.log(`App is running at: localhost:${server.address().port}`);
});
