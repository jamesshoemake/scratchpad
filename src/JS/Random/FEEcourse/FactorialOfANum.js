const factorial = (num) => {
  if (num === 1 || num === 0) return 1

  return num * factorial(num - 1)
}

console.log(factorial(1))
console.log(factorial(0))
console.log(factorial(4))
console.log(factorial(5))
