// stack
//
const isValid = (s) => {
  if (!s) return false

  const stack = []
  const parens = {
    '[': ']',
    '{': '}',
    '(': ')'
  }

  for (let char of s) {
    console.log('char', char)
    const curr = char
    if (parens[char]) {
      console.log('parens[char]', parens[char])
      stack.push(parens[char])
    } else {
      if (curr !== stack.pop()) return false
    }
  }

  return stack.length === 0
}

const s1 = '(]'
console.log('s1', isValid(s1))
const s2 = '()'
console.log('s2', isValid(s2))
const s3 = '(){}[]'
console.log('s3', isValid(s3))
