const getStudentsByLocation = (getListStudents, city) => getListStudents.filter(
  (item) => item.location === city,
);

export default getStudentsByLocation;
