const FizzBuzz = (limit) => {
  if (limit < 0) return "Enter limit greater than 100"

  let str = ""
  let fizzCounter = 0
  let buzzCounter = 0
  let fizzbuzzCounter = 0
  for (let i = 1; i < limit; i++) {
    if (i % 3 === 0) {
      str += "Fizz "
      fizzCounter++
    }

    if (i % 5 === 0) {
      str += "Buzz "
      buzzCounter++
    }

    if (str.length >= 8) {
      fizzbuzzCounter++
    }

    if (str.length > 0) {
      str += `${i}`
      console.log(str)
    }

    str = ""
  }

  console.log(
    `
    Fizz ${fizzCounter} 
    Buzz ${buzzCounter} 
    FizzBuzz ${fizzbuzzCounter}
    `
  )
}

FizzBuzz(100)
