// server.js
const express = require('express');
const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

// Load the required environment variables
const APP_ID = process.env.GITHUB_APP_ID;
const PRIVATE_KEY = process.env.GITHUB_PRIVATE_KEY;
const INSTALLATION_ID = process.env.GITHUB_INSTALLATION_ID;

// Function to generate a JWT
function generateJWT() {
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iat: now,               // Issued at time
    exp: now + 10 * 60,       // JWT valid for 10 minutes
    iss: APP_ID             // GitHub App ID
  };

  // Generate the JWT signed with your private key using RS256 algorithm
  const token = jwt.sign(payload, PRIVATE_KEY, { algorithm: 'RS256' });
  return token;
}

// Function to use the JWT to get an installation token from GitHub
async function getInstallationToken() {
  const jwtToken = generateJWT();
  const url = `https://api.github.com/app/installations/${INSTALLATION_ID}/access_tokens`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        // Use the JWT for authentication
        'Authorization': `Bearer ${jwtToken}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!response.ok) {
      // Log detailed error info in case of failure
      const errorDetails = await response.text();
      throw new Error(`GitHub API error: ${response.status} ${response.statusText} - ${errorDetails}`);
    }

    const data = await response.json();
    return data.token; // This is the installation token
  } catch (error) {
    console.error('Error obtaining installation token:', error);
    throw error;
  }
}

// Define an endpoint that will trigger the token generation
// In a real-world scenario, you would secure this endpoint so only authorized parties can use it.
app.get('/installation-token', async (req, res) => {
  try {
    const token = await getInstallationToken();
    res.json({ token });
  } catch (err) {
    res.status(500).send("Error generating installation token");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
