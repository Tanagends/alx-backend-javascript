export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  return (([...set]
    .filter((el) => el.startsWith(startString)))
    .map((ele) => ele.slice(startString.length))).join('-');
}

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
