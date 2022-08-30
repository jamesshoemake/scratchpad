function fib(n, memo = {}) {
  let result

  if (memo[n] !== undefined) return memo[n]

  if (n === 1 || n === 2) {
    result = 1
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo)
  }
  memo[n] = result
  console.log(memo)
  return result
}

// console.log('command args',process.argv)
let fibNum = process.argv[2]
console.log(`fib(${fibNum})`, fib(fibNum))
