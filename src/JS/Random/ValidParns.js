const isValid = (str) => {
  if (!str) return false

  const stack = []
  const hash = {
    '{': '}',
    '[': ']',
    '(': ')',
    '<': '>'
  }

  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      stack.push(hash[str[i]])
    } else {
      if (str[i] !== stack.pop()) return false
    }
  }

  return stack.length === 0
}

const str = '{}[]()<>'

console.log(isValid(str))
