const count = (() => {
  let counter = 0

  const localFunc = () => {
    return ++counter
  }

  localFunc.reset = () => {
    counter = 0
  }
  return localFunc
})()

console.log(count())
console.log(count())
console.log(count())
count.reset()
console.log(count())
console.log(count())
console.log(count())
