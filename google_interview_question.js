let arr1 = [1, 2, 5, 9];
let arr2 = [1, 2, 4, 4];
let sum = 8;

// naive solution
//! O(n^2): time complexity
//! O(1): space complexity
function hasPairWithSum(array, sum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == sum) {
        return true;
      }
    }
  }
  return false;
}

// console.log(hasPairWithSum(arr2, sum));

// refined solution
function hasPairWithSum1(array, sum) {
  let comp = new Set();
  for (let el of array) {
    if (comp.has(el)) return true;
    else comp.add(sum - el);
  }
  return false;
}

console.log(hasPairWithSum1(arr1, sum));
