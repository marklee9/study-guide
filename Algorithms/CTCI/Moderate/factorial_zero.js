/*

Factorial Zeros: 

Write an algorithm which computes the number of trailing zeros in n factorial.

*/

function trailingZeros(n) {
  let count = 0;
  for (let i = 2; i <= n; i++) {
    count += factorOf5(i);
  }
  return count;

  function factorOf5(num){
    let counter = 0;
    while (num % 5) {
      counter++;
      num /= 5;
    } 
    return counter;   
  }
}

