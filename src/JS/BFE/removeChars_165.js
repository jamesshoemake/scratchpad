/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  // your code here
  const stack = []

  for (let i = 0; i < input.length; i++) {
    const char = input[i]
    if (stack.length && char === "c" && stack[stack.length - 1] === "a") {
      stack.pop()
    } else if (char !== "b") {
      stack.push(char)
    }
  }

  return stack.join("")
}

console.log(removeChars("ab")) // 'a'
console.log(removeChars("abc")) // ''
console.log(removeChars("cabbaabcca")) // 'caa'
