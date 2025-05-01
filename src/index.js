// src/index.js
require('dotenv').config(); // Loads variables from .env into process.env

const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.get('/', (req, res) => {
    //res.send('Hello, Node.js with dotenv and a build script!');
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
