// Find the sum of all the primes below two million.

// function that returns the sum of all primes below the max number using a variation of the Sieve of Eratosthenes
const sumOfPrimes = (max) => {

  let sum = 3;
  let primes = [3];
  // override push method of prime array to add to sum
  primes.push = function(n) {
    Array.prototype.push.apply(this, arguments);
    sum+=n;
  }

  // loop through all odd numbers below the max number, adding the prime numbers to the primes array
  for(let i = 5; i < max; i+=2){
    primes = isPrime(i, primes);
  }

  // push 2 into array of primes
  primes.push(2);
  // return the sum of primes
  return sum;

}

// function that determines whether or not a number is prime
const isPrime = (i, primes, sum) => {
  // loops through the array of primes and breaks if the inputted number is a multiple of a prime
  for(let j = 0; j < primes.length; j++){
    if(i % primes[j] === 0){
      return primes;
    }
  }
  primes.push(i);
  return primes;
}

const Timer = require("./timer.js");
Timer.start();
console.log(sumOfPrimes(2000000));
Timer.end();
