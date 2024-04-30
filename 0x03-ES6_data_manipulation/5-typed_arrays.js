export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new RangeError('Position outside of range');
  }
  const buffer = new ArrayBuffer(length);

  const view = new Int8Array(buffer);
  view[position] = value;
  return new DataView(buffer);
}
