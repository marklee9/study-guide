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

// Optimal solution.
function shortestMatch(word1, words) {
  if (word1.length < words.length) return "";
  let map = {};

  for (let i = 0; i < word1.length; i++) {
    let ch = word1[i];
    if (!map[ch]) map[ch] = [];
    map[ch].push(i);
  }

  let s, e;
  let shortest = Infinity;

  while (map[words[0]].length) {
    let start = map[words[0]].shift();
    let end = start;

    for (let i = 1; i < words.length; i++) {
      let ch = words[i];

      if (map[ch].length) {
        while (map[ch][0] < end) {
          map[ch].shift();
          if (!map[ch].length) break;
        }
        end = map[ch][0];
      } else {
        break;
      }
    }

    if (shortest > end - start) {
      shortest = end - start;
      e = end;
      s = start;
    }
  }

  return word1.substring(s, e + 1);
}