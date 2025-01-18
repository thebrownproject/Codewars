// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// Calculate total number in array
// divide total number in array by total

function findAverage(array) {
  const total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  if (array.length > 0) {
    return total / array.length;
  } else {
    return 0;
  }
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(findAverage([1, 1, 1]), 1);
    assert.strictEqual(findAverage([1, 2, 3]), 2);
    assert.strictEqual(findAverage([1, 2, 3, 4]), 2.5);
  });
});
