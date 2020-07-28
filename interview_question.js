// 2 parameters - arrays - no size limit
// return true or false

//! O(a*b) time complexity : has nested for loops
//! O(1): space complexity
/* function containsCommonItem(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) return true;
    }
  }
  return false;
} */

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'b', 'r'];

// array1 ==> obj {
//   a: true,
//   b: true,
//   c: true,
//   x: true
// }

// array2.index === obj.properties ?

//! O(a+b) time complexity : has separate for loops and is better than O(a*b)
//! O(a) space complexity
function containsCommonItem2(arr1, arr2) {
  // 1. loop through the first array and create object where properties === items in the array
  // TODO: can we assume always two parameters in the function
  let map = new Map();
  for (let i = 0; i < arr1.length; i++) {
    // if the property doesn't exist in map, add it to the map
    if (!map.has(arr1[i])) {
      map.set(arr1[i], true);
    }
  }
  console.log(map);

  // 2. loop through the second array and check if the item in second array exists on created object.
  for (let j = 0; j < arr2.length; j++) {
    if (map.has(arr2[j])) {
      return true;
    }
  }
  return false;
}

// console.log(containsCommonItem2(array1, array2));

function containsCommonItem3(array1, array2) {
  return array1.some(item => array2.includes(item));
}

console.log(containsCommonItem3(array1, array2));
