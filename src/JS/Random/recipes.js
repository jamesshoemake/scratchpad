const recipe = { milk: 100, butter: 50, cheese: 10 }
const avaiable = { milk: 198, butter: 52, cheese: 10 }

const batches = (recipe, avaiable) => {
  console.log(...Object.keys(recipe).map((k) => avaiable[k] / recipe[k] || 0))

  return Math.floor(
    Math.min(...Object.keys(recipe).map((k) => avaiable[k] / recipe[k] || 0))
  )
}

console.log(batches(recipe, avaiable))
