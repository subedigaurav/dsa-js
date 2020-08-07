const beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie']

// built-in method (uses linear search)
beasts.indexOf('Godzilla')

// another build-in method, return index
beasts.findIndex(function (item) {
  return item == 'Godzilla'
})

// returns the item if a match is found
beasts.find(function (item) {
  return item == 'Godzilla'
})

beasts.includes('Godzilla')

// naive implementation of linear search
let target = 'Godzilla'
let found = false
for (let i = 0; i < beasts.length; i++) {
  if (beasts[i] == target) {
    found = true
    break
  }
}
console.log(found)
