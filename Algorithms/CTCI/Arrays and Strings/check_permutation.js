// Given two stings, check if one is permutation to another.

function isPerm (str1, str2) {
  let obj = {};

  // by doing this you dont have to iterate through the object at the end.
  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    let el = str1[i];
    if (!obj[el]) obj[el] = 0;
    obj[el]++;
  }

  for (let i = 0; i < str2.length; i++) {
    let el = str2[i];

    if (obj[el]) {
      obj[el]--;
    } else {
      return false;
    }
  }

  /*
  for (let key in obj) {
    if (obj[jey]) return false;
  }
  */

  return true;
}