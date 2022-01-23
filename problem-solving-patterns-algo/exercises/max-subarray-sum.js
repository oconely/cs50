// Sliding window pattern:
/* 
  Given an array of integers and a number, write a function
  called "muxSubarraySum", which finds the maximum sum
  of a subarray with the length of the number passed to the function.
  Note that a subarray must consist of consecutive elements from 
  the original array.
*/

function maxSubarraySum(arr, range) {
  if (arr.length < range) {
    return null;
  }

  let max = 0;
  let prevMax = 0;
  let left = 0;

  for (let i = 0; i < range; i++) {
    prevMax += arr[i];
  }

  for (let j = range; j < arr.length; j++) {
    prevMax = prevMax + arr[j] - arr[left];

    if (prevMax > max) {
      max = prevMax;
    }

    left++;
  }

  return max;
}

console.assert(
  maxSubarraySum([100, 200, 300, 400], 2) === 700,
  'should be 700'
);
console.assert(
  maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) === 39,
  'should be 39'
);
console.assert(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) === 5, 'should be 5');
console.assert(
  maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) === 5,
  'should be 5'
);
console.assert(maxSubarraySum([2, 3], 3) === null, 'should be null');
