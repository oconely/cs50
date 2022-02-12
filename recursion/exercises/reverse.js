/* 
  Write a recurssve function called "reverse" which accepts
  a string and returns a new string in reverse 
*/

function reverse(str) {
  let reversedStr = '';

  function helper(str) {
    if (str.length === 0) {
      return;
    }

    reversedStr += str[str.length - 1];

    helper(str.slice(0, -1));
  }

  helper(str);

  return reversedStr;
}

console.assert(reverse('awesome') === 'emosewa', 'shoulb be "emoseva"');
console.assert(
  reverse('rithmschool') === 'loohcsmhtir',
  'should be "loohcsmhtir"'
);
