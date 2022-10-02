const sum = (arr) => {
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  let sum = 0

  for (let i = min; i <= max; i++) {
    sum += i
  }

  return sum
}

const arr1 = [1, 3]
const arr2 = [1, 4]

console.log(sum(arr1))
console.log(sum(arr2))
