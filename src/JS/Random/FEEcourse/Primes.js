function isPrime(n) {
  let primeFlag = true
  // Sufficient to check till n/2
  for (let i = 2; i <= n / 2; i++) {
    // if n is divisible by any number then it is not prime
    if (n % i === 0) {
      primeFlag = false
      break
    }
  }
  if (primeFlag) {
    console.log(n)
  }
}

function printPrime(min, max) {
  for (let i = min; i <= max; i++) {
    // Skip 0 and 1
    if (i === 0 || i === 1) {
      continue
    }
    isPrime(i)
  }
}

printPrime(0, 20)
