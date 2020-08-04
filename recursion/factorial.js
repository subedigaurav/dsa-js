//! O(n): time complexity
function findFactorialRecursive(number) {
  if (number == 1) return 1
  else return number * findFactorialRecursive(number - 1)
}

//! O(n): time complexity
function findFactorialIterative(number) {
  let factorial = 1
  for (let i = number; i > 0; i--) {
    factorial = factorial * i
  }
  return factorial
}

console.log(findFactorialIterative(5))
console.log(findFactorialRecursive(5))
