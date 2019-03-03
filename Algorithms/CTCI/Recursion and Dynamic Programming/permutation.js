/*

Permutations with Duplicates: 

Write a method to compute all permutations of a string whose 
characters are not necessarily unique. The list of permutations 
should not have duplicates.

*/


// Without Dup
function permute(nums) {
  if (nums.length < 1) return [[]];
  
  let prev = permute(nums.slice(0, -1));
  let last = nums[nums.length - 1];
  let result = [];
  
  for (let i = 0; i < prev.length; i++) {
    
    let arr = prev[i];
    
    for (let j = 0; j <= arr.length; j++) {
      let front = arr.slice(0,j);
      let back = arr.slice(j);
      let sub = front.concat([last], back);
      result.push(sub);
    }
  }
  
  return result;
}

// WithDups
function permute2(nums) {
  let set = new Set();
  let arr = [];
  for (let el of nums) {
    if (!set.has(el)) {
      arr.push(el);
      set.add(el);
    }
  }

  return permute(arr);
}