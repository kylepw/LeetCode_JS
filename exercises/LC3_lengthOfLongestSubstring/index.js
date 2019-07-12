// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
  var longest = '';
  var current = '';
  for (let i = 0; i < s.length; i++) {
      if (current.includes(s[i])) {
        if (current.length > longest.length) {
          longest = current;
        }
        current = current.split(s[i])[1] += s[i];
        console.log(current)
      } else { current += s[i]; }
  }
  if (current.length > longest.length) {
    longest = current;
  }
  return longest.length;
}

module.exports = lengthOfLongestSubstring;
