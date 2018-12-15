import Promise from 'promise';

// Promise
// Common use case : Handling JavaScript Asynchronous operations.




// -------------------------------------------------------------------------------------
// Making simplest promise.

let simplePromise = new Promise((resolve, reject) => {
  
  //=> this value will be passed on when resolved. Most of the time, it will pass on JSON.
  resolve("Hi, nice to meet you");  
});

simplePromise.then((res) => console.log(res));  //=> this will give you "Hi, nice to meet you".





// Because Promise also handles asynchronicity, we can put a setTimeout as well.

simplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hi, nice to meet you");
  } , 1000);
});

simplePromise.then((res) => console.log(res)); 

//=> this will give you "Hi, nice to meet you", after 1 second.




// -------------------------------------------------------------------------------------
// Rejecting a Promise.

simplePromise = new Promise((resolve, reject) => {

  //=> this value will be passed on when resolved. Most of the time, it will pass on JSON.
  reject("Rejected!");
});




// You can pass in a second argument in .then like this :
simplePromise.then(
  (res) => console.log(res),
  (error) => console.log(error) //=> this will give you "Rejected".
); 

// Or use catch.
simplePromise
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej));  //=> this will give you "Rejected".


// -------------------------------------------------------------------------------------

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("resolved!"), 5000);  // resolve after 5 sec.
  setTimeout(() => reject("rejected!"), 1000);  // reject after 1 sec.
});

// in this case, because it will return rejected.
// Once the promise is either resolved or rejected, it can no longer change its state,
// meaning that it is done and will not trigger the other one.


// -------------------------------------------------------------------------------------
// Promise.all()

// Promise.all takes an array of promises, and it will wait until all of them are resolved.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("first Promise");
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("second Promise");
  }, 5000);
});

Promise.all( [promise1, promise2] )
  .then((data) => console.log(data)) //=> ["first Promise", "second Promise"];
  .catch((error) => console.log(error));  //=> if there is any error it will be catched here.

// this will return the array of all the resolves.


// how long will this take?
// because they are sent to webAPI, this will be handled asynchronously,
// which means that the promise.all above will take 5 seconds.



// -------------------------------------------------------------------------------------
// Promise.race()

// The Promise.race method returns a promise that resolves or rejects 
// as soon as one of the promises in the iterable resolves or rejects
//  with the value or reason from that promise.

const race1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("first Promise");
  }, 5000);
});

const race2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("second Promise");
  }, 2000);
});

Promise.race([race1, race2])
  .then((res) => console.log(res)); 
  
//=> this will print out "second Promise"
// Because race2 will be resolved before race1.



