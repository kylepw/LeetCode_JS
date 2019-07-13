//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
  var longest = '';
  var current = '';

    function reverseString(s) {
      let tempArray = s.split("");
      tempArray = tempArray.reverse();
      return tempArray.join("");
    }

  for (let start = 0; start < s.length; start++) {
    current = '';
    for (let end = start; end < s.length; end++) {
      current += s[end];
      if (current == reverseString(current) && current.length > longest.length) {
        longest = current;
      }
    }
  }
  return longest;
}

module.exports = longestPalindrome;
