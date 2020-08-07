const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(arr) {
  // start at the first element
  for (let i = 0; i < arr.length - 1; i++) {
    // find the minimum element from the subarray
    let min_index = i;
    // find the index of the minumum element
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    // place the miminum value in its correct position
    // ignore the semicolon, ok?
    [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
  }
}

selectionSort(numbers);
console.log(numbers);
