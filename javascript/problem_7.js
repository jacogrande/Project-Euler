// What is the 10,001st prime number?

// upper bound: 1.26*n*log(n)
// solved using the Sieve of Eratosthenes

const Timer = require("./timer.js");

// main function
const findPrime = (n) => {
  let max = Math.ceil(1.26*n*Math.log(n));

  // initialize an array of length n and set each value to true
  let primes = new Array(max).fill(true);
  primes[0] = false, primes[1] = false;

  // remove all multiples of 2
  primes = sieve(primes, 2, max);

  // iterate through all odd numbers in the array and then remove all of their multiples if prime
  for(let i = 3; i < max; i+=2){
    primes = sieve(primes, i, max);
  }

  let truePrimes = primes.reduce((truePrimes, prime, i) => {
    if(prime) truePrimes.push(i);
    return truePrimes;
  }, []);

  return truePrimes[n-1];

}

// sieving module
const sieve = (arr, n, max) => {

  // if n is prime
  if(arr[n]){
    // loop through multiples of n in the given array (starting from the square of n b/c everything smaller will already be marked)
    for(let i = Math.pow(n, 2); i < max; i+=n){
      arr[i] = false;
    }
  }

  return arr;

}

let timer = new Timer();
timer.start();
console.log(findPrime(10001));
console.log(`Time elapsed: ${timer.end()}`);

// solved: 104743
// ~ 20 ms
