// Find the shortest matching substring in which:
// Given a dictionary, each element of the dictionary is found, in order.
// eg:
// var string = 'acbaeeecefdeaebced';
// var dict = ['a', 'b', 'c', 'd'];
// returns 'aebced';

function shortestMatching(string, dict) {
  let shortest = false;

  for (let i = 0; i < string.length; i++) {
    let ch = string[i];

    if (ch === dict[0]) {
      let str = helper(i);
      if (str) {
        if (!shortest) {
          shortest = str;
        } else {
          if (str.length < shortest.length) shortest = str;
        }
      }
    }
  }

  return shortest;

  function helper(i) {
    let result = "";
    let sI = i;
    let dI = 0;

    while (sI < string.length && dI < dict.length) {
      while (dict[dI] === string[sI]) dI++;
      result += string[sI];
      sI++;
    }

    if (dI < dict.length) return false;
    return result;
  }
}