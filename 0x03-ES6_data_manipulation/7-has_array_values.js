export default function hasValuesFromArray(set, array) {
  const arrSet = new Set(array);

  for (const item of arrSet) {
    if (!set.has(item)) {
      return false;
    }
  }
  return true;
}
