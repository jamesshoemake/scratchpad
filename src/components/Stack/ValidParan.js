import React from 'react'

const ValidParan = () => {
  const validParan = (s) => {
    let closeMap = {
      '}': '{',
      ')': '(',
      ']': '['
    }

    console.log(closeMap)

    let charStack = []

    if (!s) return false

    for (let i = 0; i < s.length; i++) {
      let curr = s.charAt(i)
      console.log('curr', curr)
      // check if closing bracket
      if (closeMap[curr]) {
        let topElement = charStack.length === 0 ? '#' : charStack.pop()
        if (topElement !== closeMap[curr]) {
          return false
        }
        // opening bracket case
      } else {
        charStack.push(curr)
        console.log(charStack)
      }
    }

    return `${charStack.length === 0}`
  }

  return (
    <div>
      ValidParan <br />
      {validParan('()')}
    </div>
  )
}

export default ValidParan
