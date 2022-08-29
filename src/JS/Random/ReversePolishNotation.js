const reversePolishNotation = (exp) => {
  let stack = []
  let num1, num2

  for (let i = 0; i < exp.length; i++) {
    // console.log(exp[i])

    if (Number.isInteger(+exp[i])) {
      stack.push(+exp[i])
    } else {
      num1 = stack.pop()
      num2 = stack.pop()
      // console.log(`doMath ${num2}, ${num1}, ${exp[i]}`)
      stack.push(doMaths(num2, num1, exp[i]))
    }
  }

  function doMaths(num1, num2, opperation) {
    let ans
    switch (opperation) {
      case '+':
        ans = num1 + num2
        break
      case '-':
        ans = num1 - num2
        break
      case '*':
        ans = num1 * num2
        break
      case '/':
        ans = Math.trunc(num1 / num2)
        break
    }
    // console.log('ans', ans)
    return ans
  }

  return stack[0]
}

const exp = ['2', '1', '+', '3', '*']
const exp2 = [
  '10',
  '6',
  '9',
  '3',
  '+',
  '-11',
  '*',
  '/',
  '*',
  '17',
  '+',
  '5',
  '+'
]
console.log(reversePolishNotation(exp))
console.log(reversePolishNotation(exp2))
