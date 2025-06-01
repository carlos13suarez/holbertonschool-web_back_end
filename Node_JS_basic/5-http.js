const http = require('http');
const countStudents = require('./3-read_file_async');

const databaseFile = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(databaseFile)
      .then(() => {
        // countStudents already logs to console
        // We need to reconstruct it to respond to HTTP
        const fs = require('fs');
        fs.readFile(databaseFile, 'utf8', (err, data) => {
          if (err) {
            res.end('Cannot load the database');
            return;
          }

          const lines = data.split('\n').filter((line) => line.trim() !== '');
          const header = lines[0].split(',');
          const fieldIndex = header.indexOf('field');
          const firstnameIndex = header.indexOf('firstname');
          const students = lines.slice(1);

          let response = 'This is the list of our students\n';
          response += `Number of students: ${students.length}\n`;

          const fields = {};

          for (const line of students) {
            const record = line.split(',');
            const field = record[fieldIndex];
            const name = record[firstnameIndex];

            if (!fields[field]) fields[field] = [];
            fields[field].push(name);
          }

          for (const [field, names] of Object.entries(fields)) {
            response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
          }

          res.end(response.trim()); // trim last newline
        });
      })
      .catch(() => {
        res.end('This is the list of our students\nCannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
