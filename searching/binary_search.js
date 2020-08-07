/**
 * ! ITERATIVE IMPLEMENTATION OF BINARY SEARCH
 * @param {array} A the array
 * @param {integer} t the element to be searched
 */
function binarySearchI(A, target) {
  const n = A.length
  let l = 0
  let r = n - 1

  let m = null

  while (l <= r) {
    m = Math.floor((l + r) / 2)
    if (A[m] < target) {
      l = m + 1
    } else if (A[m] > target) {
      r = m - 1
    } else {
      return true
    }
  }
  return false
}

/**
 * ! RECURSIVE IMPLEMENTATION OF BINARY SEARCH
 * @param {array} A the array
 * @param {integer} t the element to be searched
 * @param {integer} left the left pointer
 * @param {integer} right the right pointer
 */
function binarySearchR(A, l, r, t) {
  if (l <= r) {
    let mid = Math.floor((l + r) / 2)

    //# if the middle element is the one to be searched
    if (A[mid] == t) {
      return true
    }

    //# if the element is smaller than the mid, it is present in the left subarray
    else if (A[mid] > t) {
      return binarySearchR(A, l, mid - 1, t)
    }

    //# else the element is presnet in the right subarray
    else return binarySearchR(A, mid + 1, r, t)
  }

  //# we reach here if the element is not present in the array
  return false
}

const numbers = [5, 12, 45, 78, 98, 123, 125, 188, 240, 250]
let foundI = binarySearchI(numbers, 55)
let foundR = binarySearchR(numbers, 0, numbers.length - 1, 55)
console.log(foundI, foundR)
