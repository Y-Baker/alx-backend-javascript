export default function createInt8TypedArray(len, position, value) {
  if (position >= len) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(len);
  const dv = new DataView(buffer);
  dv.setInt8(position, value);

  return dv;
}
