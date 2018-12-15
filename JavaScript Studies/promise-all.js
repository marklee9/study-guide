import Promise from 'promise';

// -------------------------------------------------------------------------------------
// Initial approach.

function promiseall(array) {
  
  // Need to return a promise to chain .then and .catch
  return new Promise((resolve, reject) => {
    let result = [];

    // iterate through the array and store all the resolves into result;
    for (let i = 0; i < array.length; i++) {
      let promise = array[i];

      promise.then((res) => {

        // everytime it resolves, push it into the result array.
        result.push(res);

        // resolve the result array when everything is finished.
        if (result.length === array.length) {
          resolve(result);
        }

        // if any of the promises errors out, immediately reject it.
      }).catch((error) => {
        reject(error);
      });
    }
  });
}


// testing with promises

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("one");
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("two");
  }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("rejected");
  }, 3000);
});

let array = [ promise1, promise2, promise3 ];

promiseall(array)
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

// This will catch the error on promise3 after 3 seconds of execution.