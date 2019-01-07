window.$l = function(selector) {
  if (selector instanceof HTMLElement) {
    return new DOMNodeCollection([selector]);
  } else {
    return new DOMNodeCollection(selector);
  }
};


// -------------------------------------------------------------------------------------

class DOMNodeCollection {
  constructor(array) {
    this.store = array;
  }
}

DOMNodeCollection.prototype.html = function(arg) {
  if (arg) {
    this.store.forEach((el) => {
      el.innerHTML = arg;
    });
  }
};