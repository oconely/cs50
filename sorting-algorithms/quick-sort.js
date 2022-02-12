// quick sort
/* 
  Exploits the fact that arrays of 0 and 1 element are always sorted
*/

// swaps the value in the passed array
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIdx = start; // how many things are less then pivot

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // swap the starting element with the pivot index
  swap(arr, start, swapIdx);
  return swapIdx;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]);

// // merge two sorted array inpo one sorted array
// function merge(arr1, arr2) {
//   console.log(arr1, arr2);
//   const result = [];

//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] > arr2[j]) {
//       result.push(arr2[j]);
//       j++;
//     } else {
//       result.push(arr1[i]);
//       i++;
//     }
//   }

//   console.log(result, i, j);

//   while (i < arr1.length) {
//     result.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     result.push(arr2[j]);
//     j++;
//   }

//   return result;
// }

// // merge([x, x, x, x], [x, x, x, x, x]);

// // console.log(merge([90, 91, 92, 93], [1, 90, 92, 105]));

// // multiple pointers

// function sumZero(arr) {
//   if (!arr.length) {
//     return undefined;
//   }

//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     const sum = arr[left] + arr[right];

//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     }

//     if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }

//   return undefined;
// }

// // console.log(sumZero([-9, -7, -3, 0, 1, 3, 8]));
// // console.log(sumZero([-2, 0, 1, 4]));

// function countUniqueValues(arr) {
//   let countUnique = 0;

//   let start = 0;

//   for (let next = 1; next < arr.length; next++) {
//     if (arr[start] !== arr[next]) {
//       countUnique++;
//       start = next;
//     }
//   }

//   return countUnique + 1;
// }
// //  s
// // console.log(countUniqueValues([1, 1, 1, 1, 1, 3, 4, 4, 5, 6]));
// // n

// function bubbleSort(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     for (let j = 0; j <= i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort([9, 10, 1, 2, 99, 0, -1, 203]));
