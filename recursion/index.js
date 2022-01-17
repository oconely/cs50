// Writing factorial otertively

function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// console.log(factorial(19));

// Writing factorial recursively
function factorial_recurs(num) {
  if (num === 1) return 1;
  return num * factorial_recurs(num - 1);
}

// console.log(factorial_recurs(10));

// helper method recursion
function collectOddValues(arr) {
  const result = [];

  function helper(input) {
    if (!input.length) {
      return;
    }

    if (input[0] % 2 !== 0) {
      result.push(input[0]);
    }

    helper(input.slice(1));
  }

  helper(arr);

  return result;
}

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

// pure recursion
function collectOddValues_pure_recurs(arr) {
  let newArr = [];

  if (!arr.length) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues_pure_recurs(arr.slice(1)));

  return newArr;
}

console.log(collectOddValues_pure_recurs([1, 2, 3, 4, 5]));

