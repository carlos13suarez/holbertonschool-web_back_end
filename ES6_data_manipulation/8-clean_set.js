const cleanSet = (set, startString) => {
  if (typeof startString !== 'string') { return ''; }
  const arr = Array.from(set);
  const modifiedString = arr.map((element) => {
    if (startString && element.startsWith(startString)) {
      return element.slice(element.indexOf(startString) + startString.length);
    }
    return '';
  }).filter((element) => element);
  if (modifiedString) { return modifiedString.join('-'); }
  return '';
};

export default cleanSet;
