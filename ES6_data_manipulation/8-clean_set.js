const cleanSet = (set, startString) => {
  const arr = Array.from(set);
  const modifiedString = arr.map((element) => {
    if (startString && element.startsWith(startString)) {
      return element.slice(element.indexOf(startString) + startString.length);
    }
    return '';
  }).filter((element) => element);
  if (modifiedString) { return modifiedString.join('-'); }
  return null;
};

export default cleanSet;
