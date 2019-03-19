// check if prime 
function isPrime(num) {
  if (num < 2) return false;
  let i = 2;
  while (i < num) {
    if (num % i === 0) return false;
    i++;
  }
  return true;
}



// find prime factor of num.
function primeFactor(num) {
  let result = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i) && num % i === 0) result.push(i);
  }

  return result;
}



// find all the prime numbers up to N.
function findAllPrimes(num) {
  let result = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) result.push(i);
  }
  return result;
}



// find all prime factors of all numbers up to N.
function sieve(num) {
  let obj = {};

  for (let i = 2; i <= num; i++) obj[i] = [];

  for (let i = 2; i <= num; i++) {
    if (!obj[i].length) {
      let p = i + i;
      while (p <= num) {
        obj[p].push(i);
        p += i;
      }
    }
  }

  return obj;
}
