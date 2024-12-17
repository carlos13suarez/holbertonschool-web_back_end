const hasValuesFromArray = (set, array) => array.map((item) => set.has(item)).every((item) => item === true);

export default hasValuesFromArray;
