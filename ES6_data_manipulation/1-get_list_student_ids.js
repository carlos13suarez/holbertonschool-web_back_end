const getListStudentIds = (objectArray) => {
  if (Array.isArray(objectArray)) {
    return objectArray.map((item) => item.id);
  }
  return [];
};

export default getListStudentIds;
