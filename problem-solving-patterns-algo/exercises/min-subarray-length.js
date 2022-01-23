// Sliding window pattern
/* 
  Write a function called "minSubArrayLen" which accepts two parameters
  an array of positive integers and a positive integer.
  This function should return the minimal length of a contiguous subarray
  of which the sum is greater than or equal to the integer passed to the function
  If there isn't one, return 0 instead. 
*/

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0; // start of window
  let end = 0; // end of window
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum - move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window add up at least the sum given then shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    } else {
      // current total less than required total but we reach the end
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
                                              e
console.assert(minSubArrayLen([2, 3, 1, 2, 4, 3], 7) === 2, 'should be 2');
                                           s
console.assert(
  minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) === 1,
  'should be 1'
);
