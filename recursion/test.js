let counter = 0
function inception() {
  if (counter > 3) {
    return "done!"
  }
  counter++
  return inception()
}

console.log(inception())
