const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      const header = lines[0].split(',');
      const fieldIndex = header.indexOf('field');
      const firstnameIndex = header.indexOf('firstname');

      const students = lines.slice(1);
      console.log(`Number of students: ${students.length}`);

      const fields = {};

      for (const line of students) {
        const record = line.split(',');
        const field = record[fieldIndex];
        const firstname = record[firstnameIndex];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }

      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
