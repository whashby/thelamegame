"use strict";

// src/index.js
require('dotenv').config(); // Loads variables from .env into process.env

var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;
app.use(express["static"]('public'));
app.get('/', function (req, res) {
  //res.send('Hello, Node.js with dotenv and a build script!');
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(port, function () {
  console.log("Server is running on port ".concat(port));
});