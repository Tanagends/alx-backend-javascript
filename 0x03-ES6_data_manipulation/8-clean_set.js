export default function cleanSet(set, startString) {
  if (startString === '' || startString === undefined) {
    return '';
  }
  return (([...set]
    .filter((el) => el !== undefined ? el.startsWith(startString)) : '')
    .map((ele) => ele !== undefined ? ele.slice(startString.length)))
    .join('-');
}

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
