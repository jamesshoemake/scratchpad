const fib = (num) => {
  if (num < 2) {
    return num
  }

  return fib(num - 1) + fib(num - 2)
}

const printFibonacci = (num) => {
  for (let i = 0; i < num; i++) {
    console.log(fib(i))
  }
}

printFibonacci(2)
printFibonacci(7)
