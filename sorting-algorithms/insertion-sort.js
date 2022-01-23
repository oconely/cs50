// INSERTION SORT

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    // move backwards
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
console.log(insertionSort([1, 2, 3, 4, -1]));
console.log(insertionSort([4, 3, 2, 1, -1]));

// Array.apply(null, { length: 10 }).map(Function.call, Math.random);
