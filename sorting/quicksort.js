// helper function to swap the array elements
function swap(arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

// the partitioning function
function partition(A, l, h) {
  let pivot = A[l]
  // initialize the left and right markers (one step ahead or back since we are using do loop)
  let i = l - 1
  let j = h + 1
  while (i < j) {
    do {
      i++
    } while (A[i] <= pivot)
    do {
      j--
    } while (A[j] > pivot)
    // if both markers have not crossed each other
    if (i < j) {
      // swap the array elements at index i and j
      swap(A, i, j)
    }
  }
  // at this point, the markers have crossed each other and j is the position for the pivot
  swap(A, l, j)
  return j
}

function quickSort(A, l, h) {
  // if we have at least two elements
  if (l < h) {
    // get the partition index (the position at which partitioning is done)
    let pi = partition(A, l, h)
    // recursively perform quicksort on left and right sides
    quickSort(A, l, pi - 1)
    quickSort(A, pi + 1, h)
  }
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
quickSort(numbers, 0, numbers.length - 1)
console.log(numbers)
