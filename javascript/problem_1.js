/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

// –––– solved ––––––
const multiples = () => {

  // configuration
  let max_number = 1000;
  let sum = 0;

  // loop to max_number, adding all multiples of 3 or 5 to sum
  for ( let i = 3; i < max_number; i++ ) {
    if( i % 3 === 0 || i % 5 === 0){
      sum += i;
    }
  }

  console.log(sum);

}

multiples();
