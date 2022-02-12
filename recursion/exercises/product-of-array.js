/* 
  Write a function called "productOfArray" which takes 
  in an array of numbers and returns the product of them all
*/

function productOfArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] * productOfArray(arr.slice(1));
}

console.assert(productOfArray([1, 2, 3]) === 6, 'should be 6'); // 6
console.assert(productOfArray([1, 2, 3, 10]) === 60, 'should be 60'); // 60
