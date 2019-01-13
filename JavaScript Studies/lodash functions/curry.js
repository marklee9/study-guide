// Currying 

var abc = function (a, b, c) {
  return [a, b, c];
};

var curried = curry(abc);
// curried(1)(2)(3); // => [1, 2, 3]
// curried(1, 2)(3); // => [1, 2, 3]
// curried(1, 2, 3); // => [1, 2, 3]
// Curried with placeholders.
// curried(1)(_, 3)(2); // => [1, 2, 3]

// -------------------------------------------------------------------------------------
// Starting the very basic

function curry (...args) {
  console.log(args);
  return curry.bind(this, ...args);
}

curry(1)(2); 
//=> will console.log [1,2]
// and return you a function curry

// this is okay, but will never stop!


// -------------------------------------------------------------------------------------
// Stopping curring function

let stopAt = 5;

function curry(...args) {
  if (args.length < stopAt) {
    console.log(args);
    return curry.bind(this, ...args);
  } else {
    console.log("already collected 5!", args);
    return null;
  }
}

curry(1)(2)(3)(4)(5); //=> will console.log "already collected.."
curry(1, 2, 3, 4, 5); //=> will console.log "already collected.."

// Now we have to execute the function we want with the collected arguments.
// and Try not to hard code "stopAt"



// -------------------------------------------------------------------------------------
// We can check how many arguments that the func take
// by checking func.length;

function curry(func, ...args) {
  let stop = func.length;

  return function fn() {
    if (arguments.length < stop) {
      return fn.bind(this, ...arguments);
  
    } else {
      return func(...arguments);
    }
  };
}


// Simplifying this idea => By using total to keep track of all arguments,
// we can make this a bit more DRYer and dont keep track of the arguments.

function curry(func, ...args) {
  let stop = func.length;
  let total = [];

  return function fn() {
    total.push(...arguments);
    
    if (total.length < stop) {
      return fn;

    } else {
      return func.apply(this, total);
    }
  };
}
