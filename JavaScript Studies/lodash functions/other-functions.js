// Chunk

// chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

// chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

function chunk(array, length) {
  let result = [];

  let newArray = array.slice(0);
  while (newArray.length) {
    result.push(newArray.slice(0, length));
    newArray = newArray.slice(length);
  }

  return result;
}

// -------------------------------------------------------------------------------------
// _.compact(array)
// Creates an array with all falsey values removed.The values false, null, 0, "", undefined, and NaN are falsey.

function compact(array) {
  let result = [];

  array.forEach((el) => {
    if (el) result.push(el);
  });

  return result;
}
// -------------------------------------------------------------------------------------
// _.concat(array, [values]);

// var array = [1];
// var other = _.concat(array, 2, [3], [[4]]);

// console.log(other);
// => [1, 2, 3, [4]]

// console.log(array);
// => [1]

function concat(array, ...args) {
  let result = array;

  args.forEach((arg) => {
    if (arg instanceof Array) {
      result = result.concat(arg);
    } else {
      result.push(arg);
    }
  });

  return result;
}

// -------------------------------------------------------------------------------------
// flatten

// flatten once, or x many times.
function flatten(array, times = 1) {
  if (times <= 0) return array;
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let el = array[i];

    if (el instanceof Array) {
      result = result.concat(flatten(el, times - 1));
    } else {
      result.push(el);
    }
  }

  return result;
}
// [1, [2]];

function flattenDeep(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      result = result.concat(flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

// -------------------------------------------------------------------------------------
// fromPairs

// fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }

function fromPairs(array) {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    obj[array[i][0]] = array[i][1];
  }
  
  return obj; 
}

// -------------------------------------------------------------------------------------
// assign

var foo = { a: "a property" };
var bar = { b: 4, c: "an other property" };

var res = assign({ a: "an old property" }, foo, bar);
// res => { a: 'a property', b: 4, c: 'an other property' }

function assign(...args) {
  let first = args.shift();

  for (let i = 0; i < args.length; i++) {
    let obj = args[i];
    for (let key in obj) {
      first[key] = obj[key];
    }
  }

  return first;
}

// -------------------------------------------------------------------------------------
// times

function getRandomInteger() {
  return Math.round(Math.random() * 100);
}

var res = times(5, getRandomInteger);
// res => [64, 70, 29, 10, 23]

function times (number, func) {
  let result = [];

  let i = number;
  while (i > 0) {
    result.push(func());
    i--;
  }

  return result;
} 

// -------------------------------------------------------------------------------------
// find

var users = [
  { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
  { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];

var user1 = find(users, { lastName: "Doe", gender: "male" });
// user1 -> { firstName: "John", lastName: "Doe", age: 28, gender: "male" }

var underAgeUser = find(users, function (user) {
  return user.age < 18;
});
// underAgeUser -> { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" }


function find(array, comp) {
  for (let i = 0; i < array.length; i++) {
    let el = array[i];

    if (comp instanceof Function) {
      if (comp(el)) return el;
    } else {
      if (check(el, comp)) return el;
     }
  }
  return -1;
    
  function check(obj1, obj2) {
    for (let key in obj2) {
      if (obj1[key] !== obj2[key]) return false;
    }
    return true;
  }
}

// -------------------------------------------------------------------------------------
// Reduce

var users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 28 },
    { name: "Bill", age: 65 },
    { name: "Emily", age: 17 },
    { name: "Jack", age: 30 }
];

var reducedUsers = reduce(users, function(result, user) {
    if (user.age >= 18 && user.age <= 59) {
        (result[user.age] || (result[user.age] = [])).push(user);
    }
  
    return result;
}, {});

// reducedUsers -> { 
//     28: [{ name: "Jane", age: 28 }], 
//     30: [{ name: "John", age: 30 }, { name: "Jack", age: 30 }] 
// }

function reduce(collection, iteratee, accumulator) {
  const func = Array.isArray(collection) ? arrayReduce : baseReduce
  const initAccum = arguments.length < 3
  return func(collection, iteratee, accumulator, initAccum, baseEach)
}

function arrayReduce(array, iteratee, accumulator, initAccum) {
  let index = -1
  const length = array == null ? 0 : array.length

  if (initAccum && length) {
    accumulator = array[++index]
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array)
  }
  return accumulator
}

function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, (value, index, collection) => {
    accumulator = initAccum ?
      (initAccum = false, value) :
      iteratee(accumulator, value, index, collection)
  })
  return accumulator
}