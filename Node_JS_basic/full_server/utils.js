import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter((line) => line !== '');
      const students = lines.slice(1);
      const result = {};

      students.forEach((line) => {
        const [firstName, , , field] = line.split(',');
        if (!result[field]) result[field] = [];
        result[field].push(firstName);
      });

      resolve(result);
    });
  });
}

export default readDatabase;
