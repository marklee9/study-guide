/*

Group Anagrams: 

Write a method to sort an array of strings so that all the 
anagrams are next to each other.

*/

function groupAnagrams(array) {
  let hash = {}, anagrams = [];
    
  for (let el of array) {
    let word = el.split('').sort(); 
    hash[word] = hash[word] || []; 
    hash[word].push(el);
  }
  return Object.values(hash); 
}