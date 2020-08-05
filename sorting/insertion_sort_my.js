const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function insertionSort(arr) {
  // consider the first item is fully sorted
  for (let i = 1; i < arr.length; i++) {
    // find the correct position of the newly seen element
    let current = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > current) {
      // shift the elements to the right
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = current
  }
}

insertionSort(numbers)
console.log(numbers)
