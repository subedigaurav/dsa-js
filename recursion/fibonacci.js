// 0 1 1 2 3 5 8 13 21 34 55 89 144 ...

//! O(n): time complexity
function fibonacciI(n) {
  if (n <= 2) return 1;
  let first = 1;
  let second = 1;
  for (let i = 2; i < n; i++) {
    let temp = first + second;
    first = second;
    second = temp;
  }
  return second;
}

//! O(2^n): time complexity i.e. exponential time
function fibonacciR(n) {
  if (n <= 2) return 1;
  return fibonacciR(n - 1) + fibonacciR(n - 2);
}

console.log(fibonacciI(40));
console.log(fibonacciR(40));
