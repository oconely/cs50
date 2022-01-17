/* 
  Write a function called same which accepts two arrays. 
  The function should return true if every value in the array
  has it's corresponding value squared in the second array.
  The frequency of values must be the same.
*/

// naive approach O(n^2);
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let item of arr1) {
    const squeredItemIndex = arr2.indexOf(item ** 2);
    if (squeredItemIndex === -1) {
      return false;
    }
    arr2.splice(squeredItemIndex, 1);
  }

  return true;
}

// const result = same([1, 2, 3, 2], [9, 1, 4, 4]);
// console.log('result ', result);

// but we can do better - we can loop one time each array individualy
function same_refactor(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let item of arr1) {
    frequencyCounter1[item] = (frequencyCounter1[item] ?? 0) + 1;
  }

  for (let item of arr2) {
    frequencyCounter2[item] = (frequencyCounter2[item] ?? 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

// const result = same_refactor([1, 2, 3, 2], [9, 1, 4, 4]);
// console.log(result);

// Anagrams
/* 
  Given two strings, write a function validAnagram to determine if the second string is an anagram of the first.
  An anagram is a word, phrase, or name formed by rearranging the letters of another, 
  such as cinema, formed from iceman
*/

function validAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const frequencyCounter = {};

  for (let char of word1) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  for (let char of word2) {
    if (!frequencyCounter[char]) {
      return false;
    }
    frequencyCounter[char] -= 1;
  }

  return true;
}

// const result = validAnagram('anagram', 'nagaram');
// console.log(result);
