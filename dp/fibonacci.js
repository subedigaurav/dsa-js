let slowCalculations = 0
let fastCalculations = 0
let btmUpCalculations = 0
function fibonacci(n) {
  slowCalculations++
  if (n < 2) return n
  else return fibonacci(n - 1) + fibonacci(n - 2)
}

// fibonacci with memoization
// O(n): time complexity
// O(n): space complexity
function fibonacciMaster() {
  let cache = {}
  return function fib(n) {
    fastCalculations++
    if (n in cache) {
      return cache[n]
    } else {
      if (n < 2) return n
      else {
        cache[n] = fib(n - 1) + fib(n - 2)
        return cache[n]
      }
    }
  }
}

// fibonacci with dp [bottom-up approach]
function fibonacciMaster2(n) {
  let answer = [0, 1]
  for (let i = 2; i <= n; i++) {
    btmUpCalculations++
    answer.push(answer[i - 2] + answer[i - 1])
  }
  return answer.pop()
}

console.log('SLOW:', fibonacci(30))
console.log('calculations:', slowCalculations)
const fasterFib = fibonacciMaster()
console.log('DP:', fasterFib(30))
console.log('calculations:', fastCalculations)
console.log('DP [bottom-up]:', fibonacciMaster2(50))
console.log('calculations:', btmUpCalculations)
