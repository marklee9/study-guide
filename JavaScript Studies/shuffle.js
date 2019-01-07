// Math.random()
// Math.random() generates random number between 0 and 1;

Math.random(); //=> 0.45792241157502533

// This is a working solution but because we are using splice
// which shifts all the element in the array, runtime is O(n^2);
function shuffle1(array) {
  let result = [];
  let length = array.length;
  
  while(length) {
    let i = Math.floor(Math.random() * length);
    result.push(array.splice(i,1)[0]);
    length--;
  }

  return result;
}

// in-place O(n) approach;
function shuffle2(array) {
  let length = array.length;
  
  while (length) {
    let i = Math.floor(Math.random() * length--);

    let t = array[length];
    array[length] = array[i];
    array[i] = t;
  }
}

// This shuffle method is called Fisher–Yates shuffle.



