/* 
  // Multiple pointers pattern
  Write a function called "isSubsequence" which takes in two strings
  and checks whether the characters in the first string form a subsequence
  of the characters in the second string. The function should check 
  whether the characters in the first string appear somewhere in the second string,
  without their order changing 
*/

'abcfh', 'akblcgfffh';

function isSubsequence(str1, str2) {
  let i = 0; // 5

  for (let j = 0; j < str2.length; j++) {
    if (str2[j] === str1[i]) {
      i++;
    }

    if (i === str1.length) {
      return true;
    }
  }

  return false;

  // if (!str1) return true; // ?

  // let i = 0;
  // let j = 0;

  // while (j < str2.length) {
  //   if (str2[j] === str1[i]) i++;

  //   if (i === str1.length) {
  //     return true;
  //   }

  //   j++;
  // }

  // return false;
}

console.assert(isSubsequence('hello', 'hello world'), 1);
console.assert(isSubsequence('sing', 'sting'), 2);
console.assert(isSubsequence('abc', 'abracadabra'), 3);
console.assert(isSubsequence('abc', 'acb') === false, 4);
console.assert(isSubsequence('abcfh', 'akblcgfffh'), '5');
