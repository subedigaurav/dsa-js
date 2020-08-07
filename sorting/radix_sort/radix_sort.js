function countingSort(A, digit, radix) {
  const n = A.length
  const B = new Array(n).fill(0)
  const C = new Array(radix).fill(0)

  //# count the number of occurrences of each digit in A
  for (let i = 0; i < n; i++) {
    let digit_of_Ai = Math.floor(A[i] / Math.pow(radix, digit)) % radix
    C[digit_of_Ai]++
  }

  //# cumulative sum in C
  for (let i = 1; i < C.length; i++) {
    C[i] += C[i - 1]
  }

  // count down (go through A backwards) and store the result in B
  for (let i = n - 1; i >= 0; i--) {
    let digit_of_Ai = Math.floor(A[i] / Math.pow(radix, digit)) % radix
    C[digit_of_Ai]--
    B[C[digit_of_Ai]] = A[i]
  }
  return B
}

// function to get logarithm with a custom base since js doesn't have built-in method for it
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x)
}

//! THE RADIX SORT
function radixSort(A, radix) {
  // radix is the base of the number system
  //# k is the largest number in the list
  let k = Math.max(...A)
  //# output is the result list
  let output = A
  //# calculate the number of digits needed to represent k
  const digits = Math.floor(getBaseLog(radix, k) + 1)
  //# run counting sort starting from LSB all the way to MSB
  for (let i = 0; i < digits; i++) {
    output = countingSort(output, i, radix)
  }
  return output
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 6, 87, 283, 4, 0]
const sortedNumbers = radixSort(numbers, 10)
console.log(sortedNumbers)
