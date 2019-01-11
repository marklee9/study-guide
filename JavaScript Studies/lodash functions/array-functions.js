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
