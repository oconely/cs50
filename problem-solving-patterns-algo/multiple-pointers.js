// MULTIPLE POINTERS PATTERN
/* 
  Creating pointers or values that correspond to an index or position and 
  move towards the beginning, end or middle based on a cetrain condition
  Very efficient for solving problems with minimal space complexity as well
*/

// Examples
/* 
  Write a funtion called "sumZero" with accepts a sorted array of integers.
  The function should find the first pair where the sum is 0.
  Return an array that includes both values that sum to zero or undefined if a pair doesn't exist.

  sumZero([-3,-2,-1,0,1,2,3]) => [-3,3]
  sumZero([-2,0,1,3]) => undefined
  sumZero([1,2,3]) => undefined
*/
// naive solution
// time complexity O(n^2)
// space complexity O(1)

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
}

// const result = sumZero([-4, -3, -2, -1, 0, 1, 5, 5]);
// console.log(result);

// refactored solution
// time complexity O(n)
// space complexity O(1)

function sumZero_refactor(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return undefined;
}

// const result = sumZero_refactor([-4, -3, -2, -1, 0, 1, 5, 5]);
// console.log(result);

// Count unique values
/* 
  Implement a function called "countUniqueValues", which accepts a sorted array, and counts
  the unique values in the array.
  There can be negative numbers in the array, but it will always be sorted.

  Examples
  countUniqueValues([1,1,1,1,1,2]) => 2
  countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) => 7
  countUniqueValues([]) => 0
  countUniqueValues([-2,-1,-1,0,1]) => 4
*/

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return false;
  }

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// countUniqueValues([1, 1, 1, 1, 1, 1, 5, 6, 6, 6, 6, 8, 9, 20, 24, 45]);
console.assert(
  countUniqueValues([1, 1, 1, 1, 1, 1, 5, 6, 6, 6, 6, 8, 9, 20, 24, 45]),
  'should be 8'
);
console.assert(countUniqueValues([1, 1, 1, 1, 1, 1]) === 0, 'should be 0');
