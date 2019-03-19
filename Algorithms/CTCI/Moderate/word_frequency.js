/*

Word Frequencies: 

Design a method to find the frequency of occurrences of any given word 
in a book. What if we were running this algorithm multiple times?

*/

function wordFrequency(array, word) {
  let counter = 0;
  for (let el of array) if (el.toLowerCase() === word) counter++;
  return counter;
}

// if we are running this multiple times.
// use hashmap to store so you don't have to search 2nd time.

const map = {};

function buildMap(array) {
  return array.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, map);  
}

function wordFrequency2(word) {
  return map[word];
}