/*
  Write a function calle "sameFrequency". Given two positive integers, find out if the two numbers
  have the same frequency of digits
*/

// time complexity O(N)

function sameFrequency(num1, num2) {
  if (String(num1).length !== String(num2).length) return false;

  const arr1 = String(num1).split('');
  const arr2 = String(num2).split('');

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let i = 0; i < arr1.length; i++) {
    frequencyCounter1[arr1[i]] = (frequencyCounter1[arr1[i]] || 0) + 1;
    frequencyCounter2[arr2[i]] = (frequencyCounter2[arr2[i]] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

console.assert(sameFrequency(182, 281), '(182, 281) must be true');
console.assert(sameFrequency(34, 14) === false, '(34, 14) must be false');
console.assert(
  sameFrequency(3589578, 5879385),
  '(3589578, 5879385) must be true'
);
console.assert(sameFrequency(22, 222) === false, '(22, 222) must be false');
