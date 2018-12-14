// Debounce

// Common Use cases :
//      1. Managing data traffic
//      2. save / auto save functionality
//      3. debouncing API calls
// -------------------------------------------------------------------------------------
// How setTimeout works :
//   SetTimeout will take in a callback and execute that after specified number (ms);
//   it will return the setTimeout id;

setTimeout(() => alert("Hello"), 3000); 

//=> 6;
// returns setTimeout ID;

// after 3 seconds it will alert with a text "hello"

// -------------------------------------------------------------------------------------

// How clearTimeout works :
//   if you want to clear the setTimeout, you need to put in the id of the setTimeout.

let id = setTimeout(() => alert("Hello"), 3000);

clearTimeout(id);

// alert will not be executed;

// -------------------------------------------------------------------------------------
// Using two methods above, we can make a debounce function.

// Pseudo code :

function psudoDebounce(func, wait) {
  let timeout;

  // passing in arguments.
  return (...args) => {
    // args => [1, 2, 3];
    clearTimeout(timeout);  // => clear the previous setTimeout.

    timeout = setTimeout(() => func(...args), wait);  //setting the new setTimeout.
  };
}

// This is a working solution but `this` is still bound to the global scope.
// It will not work for case like this :

const mark = {
  name: 'mark',
  sayHi: debounce(function(){
    // console.log(this);      //=> Window.
    console.log(this.name);   //=> undefined.
  }, 1000)
};



mark.sayHi(); //=> `this` is defined 

// -------------------------------------------------------------------------------------
// We need to bind this to the context of which this debounce is being called

function debounce(func, wait) {
  let timeout;

  return function(){
    let args = arguments;
    let context = this;
    
    clearTimeout(timeout); 

    // binding the context with the function.
    timeout = setTimeout(() => func.apply(context, args), wait); 
  };
}



