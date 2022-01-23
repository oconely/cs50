/* 
  Write a function called "averagePair". Given a sorted array of integers
  and a target average, determine if there is a pair of values in the array
  where the average of the pair equals the target average. There may be 
  more than one pair that matches the average target.
*/

function averagePair(arr, targetAverage) {
  if (!arr.length) {
    return false;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const average = (arr[left] + arr[right]) / 2;

    if (targetAverage === average) {
      return true;
    }
    if (average > targetAverage) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

console.assert(averagePair([1, 2, 3], 2.5));
console.assert(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.assert(averagePair([-1, 0, 3, 4, 5, 6], 4.1) === false);
console.assert(averagePair([], 4) === false);
