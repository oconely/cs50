// Sliding window pattern

/* 
  Write a function called findLongestSubstring which accepts a string and returns
  the length of the longest substring with all distinct characters
*/

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {
    r: 1,
    i: 2,
    t: 3,
    h: 8,
    m: 5,
    s: 6,
    c: 7,
    o: 10,
    l: 11,
  };
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i]; // l
    if (seen[char]) {
      start = Math.max(start, seen[char]); // 4
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }

  return longest;
}

console.assert(findLongestSubstring('') === 0, 'should be 0');

console.assert(findLongestSubstring('rithmschool') === 7, 'should be 7');

console.assert(findLongestSubstring('thisisawesome') === 6, 'should be 6');
