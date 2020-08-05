// recursive function to reverse a string
function reverseStringR(str) {
  if (str.length == 1) return str
  return str[str.length - 1] + reverseStringR(str.slice(0, str.length - 1))
}

// iterative method to reverse a string
function reverseStringI(str) {
  let rStr = ""
  for (let i = str.length - 1; i >= 0; i--) {
    rStr = rStr + str[i]
  }
  return rStr
}

console.log(reverseStringR("Gaurav Subedi"))
console.log(reverseStringI("Gaurav Subedi"))
