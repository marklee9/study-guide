// Rest Operator

// "I want `rest` of the argument in an Array"
// "Converting Commas into an Array"

function restOperator (one, two, ...rest) {
  console.log(rest);
}

restOperator(1, 2, 3, 4, 5, 6, 7);
// => [3, 4, 5, 6, 7];

// -------------------------------------------------------------------------------------

// Spread Operator

// "`Spread` out the array"
// "Converting Array into Commas"

function spreadOperator (array) {
  console.log(...array);
}

spreadOperator([1, 2, 3, 4]);
// => 1 2 3 4
