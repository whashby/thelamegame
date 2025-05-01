"use strict";

// src/index.js
require('dotenv').config(); // Loads variables from .env into process.env

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.send('Hello, Node.js with dotenv and a build script!');
});
app.listen(port, function () {
  console.log("Server is running on port ".concat(port));
});