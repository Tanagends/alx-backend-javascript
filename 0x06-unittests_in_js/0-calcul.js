function calculateNumber(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Both arguments must be valid numbers");
  }
  if (a+b > parseInt(a+b)) {
    return parseInt(a+b) + 1;
  }
  return parseInt(a + b);
}

module.exports = calculateNumber;
