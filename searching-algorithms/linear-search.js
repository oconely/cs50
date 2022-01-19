/* 
  Write a function called "linearSearch"
  ...
*/

// linear search is the best we can do with unsorted data

function linearSearch(arr, val) {
  for (let [idx, item] of arr.entries()) {
    if (item === val) return idx;
  }
  return -1;
}

console.log(linearSearch([10, 12, 34], 12));
