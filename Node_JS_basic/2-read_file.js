const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) return;

    const header = lines[0].split(',');
    const fieldIndex = header.indexOf('field');
    const firstnameIndex = header.indexOf('firstname');

    const students = lines.slice(1); // skip header
    const totalStudents = students.length;

    console.log(`Number of students: ${totalStudents}`);

    const fields = {};

    for (const line of students) {
      const record = line.split(',');
      const field = record[fieldIndex];
      const name = record[firstnameIndex];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(name);
    }

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
