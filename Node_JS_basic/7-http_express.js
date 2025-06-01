// 7-http_express.js

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const database = process.argv[2]; // Get database path from command line

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  let responseText = 'This is the list of our students';

  try {
    const studentStats = await countStudents(database);
    responseText += `\n${studentStats}`;
    res.send(responseText);
  } catch (err) {
    res.status(500).send(`${responseText}\n${err.message}`);
  }
});

app.listen(port);

module.exports = app;
