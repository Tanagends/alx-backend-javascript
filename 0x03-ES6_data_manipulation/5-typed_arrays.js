export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new RangeError('Position outside of range');
  }
  const buffer = new ArrayBuffer(length);

  const view = new Int8Array(buffer);
  view.set(position, value);
  return new DataView(buffer);
}

console.log(createInt8TypedArray(10, 2, 89));
