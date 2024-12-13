const updateStudentGradeByCity = (getListStudents, city, newGrades) => getListStudents
	.filter(student => student.location === city)
	.map(student => {
		const studentGrade = {
			...student,
			grade: newGrades.filter(grade => grade.studentId === student.id).at(0) ?? "N/A"
		}
		return studentGrade;
	})

export default updateStudentGradeByCity;
