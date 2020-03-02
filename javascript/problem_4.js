// Find the largest palindrome made from the product of two 3-digit numbers.

// Function for determining whether or not a number is a palindrome
const isPalindrome = (number) => {
  let arr = Array.from(number.toString());

  for(let i = 0; i < arr.length;i++){
    if(arr[i] !== arr[arr.length-(1+i)]) {
      return false;
    }
  }

  return true;

}

// Function for finding the largest palindrome
// digits: the digit range (in this case: 3)
const findPalindrome = (digits) => {


  let palindromes = [];
  // set max and min values: max = (1 * 10^digit) - 1, min = 1*10^(digit-1)*9
  let max = (1 * Math.pow(10, digits))-1;
  let min = (1 * Math.pow(10, digits-1)) * 9; // this reduces the range to ensure that only the highest factors are used.

  // loop through the min-max range, testing out the highest factors
  for(let i = max; i >= min; i--){
    for(let k = max; k >= min; k--){
      if(isPalindrome(i*k)){
        palindromes.push(i*k);
      }
    }
  }
  if(palindromes.length > 0){
    return palindromes.reduce((largest, elem) => elem > largest ? elem : largest);
  }

  return null;

}


const Timer = require("./timer.js");
Timer.start();
console.log(findPalindrome(3));
Timer.end();

// solved in ~ 20.7 ms
