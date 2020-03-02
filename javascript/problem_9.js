// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// Pythagorean triplet: a^2 + b^2 = c^2 and a < b < c
// Euclid's Formula: given an arbitrary pair of integers m and n with m > n > 0,
//    a = m^2 - n^2, b = 2mn, c = m^2+n^2

// a + b + c = 1000
// (m^2-n^2) + (2mn) + (m^2 + n^2) = 1000
// 2m^2 + 2mn = 1000
// m^2 + mn = 500
// m(m+n) = 500

// function that returns an appropriate m and n based on the targetSum parameter
const findTriplet = (targetSum) => {

  // set max iteration range to the square root of the target sum / 2 (this represents the highest value of m or n)
  let maxIteration = Math.sqrt(targetSum/2);

  // increment m until it reaches the maxIteration
  for(let m = 1; m < maxIteration; m++){
    // increment n until it reaches m (since m > n > 0)
    for(let n = 1; n < m; n++){
      // check if m and m form the desired triplet using the variation of Euclid's Formula derived above
      if(m*(m+n) === targetSum/2){
        return [m,n]
      }
    }
  }

  return [0,0];

}

// function that returns the product of the Pythoagorean triple that adds up to the targetSum
const findSum = (targetSum) => {
  // fetch the appropriate m and n constants
  let [m,n] = findTriplet(targetSum);

  // define Pythagorean triple
  let a = Math.pow(m,2) - Math.pow(n,2);
  let b = 2*m*n;
  let c = Math.pow(m,2) + Math.pow(n,2);

  // return the sum
  return a*b*c;
}

const Timer = require("./timer.js");
Timer.start();
console.log(findSum(1000));
Timer.end();
// solved in ~ 3.3 ms
