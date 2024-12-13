const createInt8TypedArray = (length, position, value) => {
	const buffer = new ArrayBuffer(length);
	new DataView(buffer).setInt8(position, value);
	return buffer;
}

export default createInt8TypedArray;
