/* 
  Write a function "factorial" which accepts a number and returns the factorial of that number. 
  A factorial is the product of an integer and all the integers below it; e.g., factorial 
  four 4! is equal to 24, because 4 * 3 * 2 * 1 equals 24. 
  factorial zero (0!) is always 1.
*/

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}


console.assert(factorial(1) === 1, 'should be 1');
console.assert(factorial(2) === 2, 'should be 2'); // 2
console.assert(factorial(4) === 24, 'should be 24'); // 24
console.assert(factorial(7) === 5040, 'should be 5040'); // 5040
