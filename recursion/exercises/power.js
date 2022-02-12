/* 
  Write a function called "power" which accepts a base and an exponent. 
  The function should return the power of the base to the exponent. 
  This function should mimic the functionality of Math.pow()
*/

function power(base, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp === 1) {
    return base;
  }

  return base * power(base, exp - 1);
}

console.assert(power(2, 0) === 1, 'should be 1'); // 1
console.assert(power(2, 2) === 4, 'should be 4'); // 4
console.assert(power(2, 4) === 16, 'should be 16'); // 16
