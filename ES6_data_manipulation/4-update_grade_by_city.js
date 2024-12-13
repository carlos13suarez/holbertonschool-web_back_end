const updateStudentGradeByCity = (getListStudents, city, newGrades) => getListStudents
  .filter((student) => student.location === city)
  .map((student) => {
    const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);

    const studentGrade = {
      ...student,
      grade: gradeInfo ? gradeInfo.grade : 'N/A',
    };

    return studentGrade;
  });

export default updateStudentGradeByCity;
