//! my implementation of bubble sort
// one of the elementary sort algorithms
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

let arr = [5, 6, 77, 11, 61, 6, 1];
bubbleSort(arr);
console.log(arr);
