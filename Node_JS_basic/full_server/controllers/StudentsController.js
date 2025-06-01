import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const path = process.argv[2];
    readDatabase(path)
      .then((data) => {
        let response = 'This is the list of our students';
        const fields = Object.keys(data).sort();
        for (const field of fields) {
          const list = data[field];
          response += `\nNumber of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
        }
        res.status(200).send(response);
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(req, res) {
    const path = process.argv[2];
    const {major} = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(path)
      .then((data) => {
        const list = data[major];
        res.status(200).send(`List: ${list.join(', ')}`);
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;
