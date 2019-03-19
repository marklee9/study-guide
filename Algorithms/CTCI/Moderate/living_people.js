/*

Living People: 

Given a list of people with their birth and death years, 
implement a method to compute the year with the most number 
of people alive. You may assume that all people were born 
between 1900 and 2000 (inclusive). If a person was alive 
during any portion of that year, they should be included 
in that year's count. For example, Person (birth = 1908, death = 1909) 
is included in the counts for both 1908 and 1909.

*/

function Person(s, e) {
  this.birth = s;
  this.death = e;
}

// brute force way
function livingPeople(people) {
  let max = 0;
  let maxYear = null;

  for (let year = 1900; year <= 2000; year++) {
    let alive = 0;
    for (let person of people) {
      if (person.birth >= year && person.death <= year) alive++;
    }
    if (alive > max) {
      max = alive;
      maxYear = year;
    }
  }

  return maxYear;
}

// optimal O(N log N)
function livingPeople2(people) {
  let birth = people.sort((a, b) => a.birth - b.birth);
  let death = people.sort((a, b) => a.death - b.death);

  //                    bi
  // birth: 01 10 10 12 13 20 23 75 83 90 
  // death: 15 72 82 90 94 98 98 98 98 99
  //        di

  let bi = 0, di = 0;
  let currAlive = 0;
  let maxAlive = 0;
  let maxAliveYear;

  while (bi < birth.length) {
    if (birth[bi] <= death[di]) {
      currAlive++;

      if (currAlive > maxAlive) {
        maxAlive = currAlive;
        maxAliveYear = birth[bi];
      }

      bi++;

    } else if (birth[bi] > death[di]) {
      currAlive--;
      di++;
    }
  }

  return maxAliveYear;
}
