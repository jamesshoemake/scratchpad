function moveZeros(list) {
  // your code here
  let zeroCount = 0
  for (let i = 0; i < list.length; i++) {
    const num = list[i]
    if (num === 0) {
      zeroCount++
      list.splice(i, 1)
      i--
    }
  }
  for (let i = 0; i < zeroCount; i++) {
    list.push(0)
  }

  console.log(list)
}

const list = [1, 0, 0, 2, 3]

moveZeros(list)
