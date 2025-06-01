const express = require('express');

const app = express(); // Create the express app
const port = 1245; // Use port 1245 as specified

// Define the route for '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

module.exports = app; // Export the app as required
