// Throttle

// Common Use cases :
//      1. Preventing spam click
//      2. mousemove eventlisteners.
//      3. throttling API calls
// -------------------------------------------------------------------------------------
// Psudeo code :

function pseudoThrottle (func, time) {
  let timeout = true;

  return () => {
    if (timeout) {
      // if timeout is truthy. Execute the function.
      func();

      // set timeout to false, not allowing any function calls.
      timeout = false;

      // change back the timeout to be truthy after `time` seconds so func can be executed again.
      setTimeout(() => timeout = true, time);
    }
  };
}

// -------------------------------------------------------------------------------------


function throttle (func, time){
  let timeout;

  return function () {
    const args = arguments;
    const context = this;

    if (timeout) {

      func.apply(context, args);
      timeout = false;
      
      setTimeout(() => timeout = true, time);
    }
  };
}