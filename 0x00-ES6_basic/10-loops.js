export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const one of array) {
    newArray.push(appendString + one);
  }

  return newArray;
}
