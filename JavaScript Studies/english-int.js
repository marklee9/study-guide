// Given any integer, print English phrase that describe integer 
// ex. "One Thousand, Two Hundred Thirty Four".

const LESSTHAN20 = [ "Zero",
 "One", "Two", "Thee",
 "Four", "Five", "Six",
 "Seven", "Eight", "Nine",
 "Ten", "Eleven", "Twelve", "Thirteen", 
 "Fourteen", "Fifteen", "Sixteen", 
 "Seventeen", "Eighteen", "Nineteen"
];

const TYS = [
  "", "", "Twenty", "Thirty",
  "Forty", "Fifty", "Sixty",
  "Seventy", "Eighty", "Ninety"
];

// Considering upto two digits.
function twoDigits(number) {
  // Single digit values
  if (number < 20) return `${LESSTHAN20[number]}`;

  let tenth = Math.floor(number / 10);
  let one = Math.floor(number % 10);

  if (one === 0) return `${TYS[tenth]}`;
  return `${TYS[tenth]} ${LESSTHAN20[one]}`;
}

// Three digits
function threeDigits(number) {
  let hundred = Math.floor(number / 100);
  let rest = number - (hundred * 100);

  // Taking care of edge cases.
  if (rest === 0 && hundred) return `${LESSTHAN20[hundred]} Hundred`;
  if (hundred) return `${LESSTHAN20[hundred]} Hundred ${twoDigits(rest)}`;
  return `${twoDigits(rest)}`;
}

// using the helper function defined above.
function englishInt(number) {
  // taking hundredth
  let hundred = number % 1000;
  let thousand = Math.floor(number / (10 ** 3)) % 1000;
  let million = Math.floor(number / (10 ** 6)) % 1000;
  let billion = Math.floor(number / (10 ** 9)) % 1000;

  let hundredth = threeDigits(hundred);
  let thousandth = threeDigits(thousand);
  let millionth = threeDigits(million);
  let billionth = threeDigits(billion);

  billionth === "Zero" ? billionth = "" : billionth += " Billion ";
  millionth === "Zero" ? millionth = "" : millionth += " Million ";
  thousandth === "Zero" ? thousandth = "" : thousandth += " Thousand ";
  hundredth === "Zero" ? hundredth = "" : hundredth;

  return billionth + millionth + thousandth + hundredth;
}



