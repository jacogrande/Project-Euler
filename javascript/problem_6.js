// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// Sum of the first n natural numbers = n(n+1)/2

// Sum of the n consecutive square numbers: n(n+1)(2n+1)/6

const findDifference = (n) => {
  let square_of_sum = Math.pow(n*(n+1)/2, 2);
  let sum_of_squares = n*(n+1) * (2*n+1) / 6;
  return Math.abs(sum_of_squares - square_of_sum);
}

const Timer = require("./timer.js");
Timer.start();
console.log(findDifference(100));
Timer.end();
// solved in ~ 3 ms
