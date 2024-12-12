const getStudentIdsSum = (getListStudents) => getListStudents.reduce(
  (accumulator, item) => accumulator + item.id, 0,
);

export default getStudentIdsSum;
