// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

// Examples ( Input --> Output )
// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

// Problem
// if number is a perfect square, return the next square
// else return -1

//Psuedocode
//if statement - sq === square number
// return sq + the next square of that number
// if 121 (11) then add 23 (another square)

function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))) {
    let sqRoot = Math.sqrt(sq);
    let next = sqRoot + 1;
    return next * next;
  }
  return -1;
}

console.log(findNextSquare(121));
 