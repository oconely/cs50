/* 
  Implement a function "areThereDuplicates" which accepts a variable number of arguments
  and checks whether there are any duplicates among the arguments passed.
  Solve it via frequency counter pattern OR the multiple pointers pattern.
*/

function areThereDuplicates(...args) {
  const frequencyCounter = {};

  for (let i = 0; i < args.length; i++) {
    const currentItem = args[i];

    frequencyCounter[currentItem] = (frequencyCounter[currentItem] || 0) + 1;

    if (frequencyCounter[currentItem] > 1) {
      return true;
    }
  }

  return false;
}

// using multiple pointer patters
function areThereDuplicates_mp(...args) {
  args.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });

  let i = 0;

  for (let j = 1; j < args.length; j++) {
    if (args[i] === args[j]) {
      return true;
    }
    i++;
  }

  return false;
}

// TESTS
console.assert(
  areThereDuplicates_mp(1, 3, 2) === false,
  'areThereDuplicates(1,2,3) result must be false'
);
console.assert(
  areThereDuplicates_mp(1, 2, 2),
  'areThereDuplicates(1,2,2) result must be true'
);
console.assert(
  areThereDuplicates_mp('a', 'b', 'c', 'a'),
  "areThereDuplicates('a','b','c','a') result must be true"
);
