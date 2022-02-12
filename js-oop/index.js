/* 
  A class is a bluprint for creating objects with pre-defined properties
  and methods

  Implement data structures as classes


*/

function sumZero(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start + arr[end]] === 0) {
      return [arr[start], arr[end]];
    }
    if (arr[start] + arr[end] > 0) {
      end--;
    } else {
      start++;
    }
  }

  return undefined;
}

// console.log(sumZero([-3, -2, -1, 0, 0.1, 0.2, 0.3, 1.1, 2.1, 2.5, 4]));

function countUniqueValues(arr) {
  if (!arr.length) {
    return 0;
  }

  let current = 0;
  let unique = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[current]) {
      unique++;
      current = i;
    }
  }

  return unique + 1;
}

// console.log(
//   countUniqueValues([1, 1, 1, 1, 1, 2, 5, 6, 9, 9, 9, 9, 9, 9, 10, 12, 12, 15,18])
// ); // 8
function bubleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    console.log('pass');
    let noSwap = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        noSwap = false;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (noSwap) return arr;
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let next = i + 1; next < arr.length; next++) {
      if (arr[next] < arr[min]) {
        min = next;
      }
    }

    if (arr[i] !== arr[min]) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }

  return arr;
}

// console.log(selectionSort([0, -1, 8, 2, 4, 5, 6, 9, 10]));

// find longest sequence of unique characters
// move that window depending on condition
// find maximum subarray sum

// sliding window
function maxSubarraySum(arr, num) {
  let prevMax = 0;
  let maxSum = 0;
  let left = 0;

  for (let i = 0; i < num; i++) {
    prevMax += arr[i];
  }

  for (let j = num; j < arr.length; j++) {
    const newMax = prevMax + arr[j] - arr[left];
    prevMax = newMax;
    maxSum = Math.max(maxSum, newMax);
    left++;
  }

  return maxSum;
}

// console.log(maxSubarraySum([4, 3, 2, 5, 1, 7, 8, 0], 4)); // 15

function productOfArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 10])); // 60
