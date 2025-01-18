// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// You can assume that all values are integers. Do not mutate the input array.

//create a loop for the array
//store the number in a variable
//if loop is positive, make negative
//else if loop is negative, make positive

function invert(array) {
  for (i = 0; i < array.length; i++) {
    let integer = array[i];
    array[i] = -array[i];
  }
  return array;
}

return array;

const Test = require("@codewars/test-compat");

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Invert array values", () => {
  const norm = (arr) => arr.map((n) => (n === -0 ? 0 : n));
  it("Basic Tests", () => {
    assert.deepEqual(norm(invert([1, 2, 3, 4, 5])), [-1, -2, -3, -4, -5]);
    assert.deepEqual(norm(invert([1, -2, 3, -4, 5])), [-1, 2, -3, 4, -5]);
    assert.deepEqual(norm(invert([])), []);
    assert.deepEqual(norm(invert([0])), [0]);
  });
});
