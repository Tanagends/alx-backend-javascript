

export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new RangeError('Position outside of range');
  }
  let buffer = new ArrayBuffer(length);

  let view = new Int8Array(buffer);
  view[position] = value;
  return buffer;
}
