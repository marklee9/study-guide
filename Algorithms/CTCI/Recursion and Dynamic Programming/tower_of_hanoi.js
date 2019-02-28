/*

Towers of Hanoi: 

In the classic problem of the Towers of Hanoi, you have 3 towers 
and N disks of different sizes which can slide onto any tower.
The puzzle starts with disks sorted in ascending order of size 
from top to bottom (Le., each disk sits on top of an even larger one).

You have the following constraints:
  (1) Only one disk can be moved at a time.
  (2) A disk is slid off the top of one tower onto another tower.
  (3) A disk cannot be placed on top of a smaller disk.

Write a program to move the disks from the first tower to the last using Stacks.

*/

function towerOfHanoi(num) {
  let stack = [[],[],[]];
  let start = [...Array(num)].map((e, i) => i + 1).reverse();
  stack[0].push(...start);

  function move(from, to) {
    if (last(to) < last(from)) return false;
    let el = stack[from].pop();
    stack[to].push(el);
  }

  function last(tower) {
    return stack[tower][stack[tower].length - 1];
  }

  function moveDisks(n ) {

  }
}