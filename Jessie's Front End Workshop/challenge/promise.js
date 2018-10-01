

function fakeAjax(data) {
  // making new promise

  const response = `Did you say you wanted ${data} donuts?`;
  return new Promise((resolve, reject) => {
    window.setTimeout(() => resolve(response), 5000);
  });
}

function promiseAll(array) {
  return new Promise((resolve, reject) => {

    let result = [];
    let errored = false;
    
    array.forEach((el) => {
      el.then((res) => {
        if (errored) return;
        result.push(res);
        if (result.length === array.length) {
          resolve(result);
        }
      }).catch(err => {
        errored = true;
        reject(err);
      });
    });
    // this is bad because of asynch, this resolve() will run before going through everything.
    // resolve(result);
  });
}



fakeAjax(3).then((res) => console.log(res));