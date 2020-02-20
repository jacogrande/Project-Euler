// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// configuration
let max_fib = 4000000;
let sum = 2;

// ––––– solved ––––––
// answer function, takes the previous number in the sequence, and the current
const fibonacci = (last_n, n) => {

  // declare variable representing the sum of the two previous numbers.
  let new_number = last_n+n;

  // check for the base case ( current number is greater than the max number)
  if(new_number < max_fib){
    // if the current number is even, add it to the sum
    if(new_number % 2 == 0){
      sum += new_number;
    }

    // recursively iterate through the fibonacci sequence
    fibonacci(n, new_number);
  }

  // on base case, display the sum
  else {
    console.log(sum);
  }

}

fibonacci(1, 2);
