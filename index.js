// index.js
require('dotenv').config(); // Load variables from .env into process.env

console.log('Your secret key is:', process.env.SECRET_KEY);
console.log('Running on port:', process.env.PORT);

// Your application code here…
