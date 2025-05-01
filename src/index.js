// src/index.js
require('dotenv').config(); // Loads variables from .env into process.env

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, Node.js with dotenv and a build script!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
