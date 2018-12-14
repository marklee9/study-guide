// Writing a debounce

// -------------------------------------------------------------------------------------
// How setTimeout works :
//   SetTimeout will take in a callback and execute that after specified number (ms);
//   it will return the setTimeout id;

setTimeout(() => alert("Hello"), 3000);

=> 6; // returns setTimeout ID;

// after 3 seconds it will alert with a text "hello"

// -------------------------------------------------------------------------------------

// How clearTimeout works :
//   if you want to clear the setTimeout, you need to put in the id of the setTimeout.

let timeout = setTimeout(() => alert("Hello"), 3000);

clearTimeout(timeout);

// alert will not be executed;

// -------------------------------------------------------------------------------------
// Using two methods above, we can make a debounce function.

function debounce(func, wait) {
  let timeout;

  // passing in arguments.
  return (...args) => {
    // args => [1, 2, 3];

    clearTimeout(timeout);  // => clear the previous setTimeout.
    timeout = setTimeout(() => func(...args), wait);  //setting the new setTimeout.
  };
}