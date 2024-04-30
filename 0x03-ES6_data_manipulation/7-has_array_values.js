

export default function hasValuesFromArray(set, array) {
  let arr_set = new Set(array);
  
  for (let item of arr_set) {
    if (!set.has(item)) {
      return false;
    }
  }
  return true;
}
