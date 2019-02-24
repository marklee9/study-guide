// implement an algorithm to determine if the string has all unique characters.

// you can argue that TC and SC is both O(1) since both will not exceed 26.

function isUnique(str) {
  let set = new Set();
  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
        return false;
    } else {
        set.add(str[i]);
    }
  }

  return true;
}


