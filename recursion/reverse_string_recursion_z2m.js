// iterative approach to reverse a string
function reverseStringI(str) {
  let arrayStr = str.split('')
  let reversedArray = []
  // we are using closure here so that we don't add the above variables to the global scope
  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(array.pop())
      addToArray(array)
    }
    return
  }
  addToArray(arrayStr)
  return reversedArray.join('')
}

function reverseStringR(str) {
  if (str == '') return ''
  // append the first character to the end of the return string and decrease the length of the string
  else return reverseStringR(str.substr(1)) + str.charAt(0)
}

console.log(reverseStringI('hello'))
console.log(reverseStringR('hello'))
