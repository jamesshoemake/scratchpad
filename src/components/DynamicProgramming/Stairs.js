import React from 'react'

const Stairs = () => {
  const climb = (n) => {
    let one = 1
    let two = 1

    for (let i = 0; i < n; i++) {
      let temp = one
      one = one + two
      two = temp
      console.log(i, one, two)
    }

    return `There are ${two} solutions to climb ${n} steps`
  }

  return <div>{climb(6)}</div>
}

export default Stairs
