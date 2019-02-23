// Write a function that takes two strings s1 and s2,
// and returns a longest common subsequence of s1 and s2.

// "ABAZDC", "BACBAD" => "ABAD"
// "AGGTAB", "GXTXAYB" => "GTAB"


// "", "asdf" => ""
// "asdf", "" => ""

// Recursive.
function lcs(s1, s2) {
  let result = "";
  helper(s1.length - 1, s2.length - 1, "");
  return result;

  function helper(n, m, string) {
    if (n < 0 || m < 0) {
      if ( result.length < string.length ) result = string;
      return;
    }

    if (s1[n] === s2[m]) {
      helper(n - 1, m - 1, string + s1[n]);
    } else {
      helper(n - 1, m, string);
      helper(n, m - 1, string);
    }
  }
}