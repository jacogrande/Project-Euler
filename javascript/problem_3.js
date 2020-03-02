// What is the largest prime factor of the number 600851475143 ?

// ––––––– solved ––––––––
// finds the largest prime factors of the target number
const largestPrime = (target) => {

  // config
  let prime_factors = [];
  let finished = false;
  let dividend = target / 2;

  // loop until all prime factors are found
  while(!finished){
    finished = true;

    // check each number to see if its a factor of the dividend
    for( let i = 2; i < dividend; i++){
      if (dividend % i === 0){
        if( prime_factors.indexOf(i) === -1) prime_factors.push(i);
        dividend = dividend / i;
        finished = false;
        break;
      }
    }
  }
  console.log("epic");

  // the remaining quotient must be prime
  if( prime_factors.indexOf(dividend) === -1) prime_factors.push(dividend);

  let largest = prime_factors.reduce( (sum, elem) => elem > sum ? elem : sum);
  console.log(largest);

}

const Timer = require("./timer.js");
Timer.start();
largestPrime(600851475143);
Timer.end();
