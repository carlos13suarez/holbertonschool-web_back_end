const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
};

export default createInt8TypedArray;
