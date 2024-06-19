const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('calculateNumber', () => {
  it('adds two numbers and rounds up to a full int', () => {
    assert.strictEqual(calculateNumber(1.2, 2.7), 4);
  });
});
