function mergeSort(A, l, r) {
  if (l < r) {
    // the mid index
    let q = Math.floor((l + r) / 2)
    // recursively call mergesort on the two halves
    mergeSort(A, l, q)
    mergeSort(A, q + 1, r)
    // merge the two halves
    merge(A, l, q, r)
  }
}

function merge(A, l, q, r) {
  // Create L ← A[p..q] and R ← A[q+1..r] the two temporary subarrays
  let nL = q - l + 1
  let nR = r - q

  let L = new Array(nL)
  let R = new Array(nR)

  // initialize the temporary subarrays
  for (let i = 0; i < nL; i++) {
    L[i] = A[l + i]
  }
  for (let j = 0; j < nR; j++) {
    R[j] = A[q + 1 + j]
  }

  // initialize the indices for subarrays
  let i = 0
  let j = 0
  // initialize the index for the merged array
  let k = l

  //# start sorting and merging
  while (i < nL && j < nR) {
    if (L[i] < R[j]) {
      A[k] = L[i]
      i++
    } else {
      A[k] = R[j]
      j++
    }
    k++
  }

  //# copy elements remaining from an array into the original array, here, only one loop will be executed
  while (i < nL) {
    A[k] = L[i]
    i++
    k++
  }
  while (j < nR) {
    A[k] = R[j]
    j++
    k++
  }
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 6, 87, 283, 4, 0]
mergeSort(numbers, 0, numbers.length - 1)
console.log(numbers)
