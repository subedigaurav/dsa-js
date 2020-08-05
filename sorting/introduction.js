let letters = ['z', 'b', 'a', 'j', 'q', 't']
const basket = [2, 65, 34, 2, 1, 7, 8]
const nepaliwords = ['बिदा', 'नमस्ते', 'ठीक', 'छैन', 'आएको']

console.log(letters.sort())

// in place sorting using a compare function
basket.sort(function (a, b) {
  return a - b
})

// sort using locale compare
nepaliwords.sort(function (a, b) {
  return a.localeCompare(b, 'np')
})

console.log(basket)
console.log(nepaliwords)
