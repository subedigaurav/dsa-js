function countingSort(A, digit, radix) {
  const n = A.length;
  // B <- Output Array, C <- Temporary Array
  const B = new Array(n).fill(0);
  const C = new Array(radix).fill(0);

  //# counts the number of occurrences of each digit in A
  for (let i = 0; i < n; i++) {
    let digit_of_Ai = Math.floor(A[i] / Math.pow(radix, digit)) % radix;
    C[digit_of_Ai]++;
  } // now C[i] is the value of numbers of elements in A equal to i

  // this loop changes C to show the cumulative # of digits upto that index in C
  for (let i = 1; i < C.length; i++) {
    C[i] += C[i - 1];
  } // here C is modified to have the number of elements <= i

  // to count down (go through A backwards)
  for (let i = n - 1; i >= 0; i--) {
    let digit_of_Ai = Math.floor(A[i] / Math.pow(radix, digit)) % radix;
    C[digit_of_Ai]--;
    B[C[digit_of_Ai]] = A[i];
  }
  return B;
}

let numbers = [5, 6, 9, 7, 8, 6, 1];
const sortedNumbers = countingSort(numbers, 0, 10);
console.log(sortedNumbers);
