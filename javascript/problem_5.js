// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// function for finding the smallest positive number divisible by all numbers from 1 to rangeMaximum (20)
const findDividend = () => {

  // anything divisible by 16 is divisible by 8, 4, and 2
  // 18 -> 9, 6, 3, and 2
  // 20 -> 10
  // 15 -> 5 and 3
  // 14 -> 7 and 2
  // Factors that need checking: 11 - 19

  let dividend = 0;
  let i = 2520;

  // iterate through all products of 20 (starting from 2520) until a product is found to be divisible by 11 through 19
  while(dividend === 0){
    i+=20;
    for(let j = 19; j > 10; j--){
      if(i % j !== 0){
        break;
      }
      if(j === 11){
        dividend = i;
      }
    }
    if(dividend !== 0){
      return dividend;
    }
  }

  return 0;

}


const Timer = require("./timer.js");
Timer.start();
console.log(findDividend());
Timer.end();
// solved in ~ 53 ms
