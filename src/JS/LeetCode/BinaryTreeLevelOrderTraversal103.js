// usng que
// T:0(n) 2 whiles, but only touch node 1x each
// S:0(n)
const zigzagLevelOrder = (root) => {
  if (!root) return []

  const queue = [root]
  const result = []
  let count = 0

  while (queue.length) {
    let len = queue.length
    if (count % 2 === 0) {
      result.push(queue.map((node) => node.val))
    } else {
      result.push(queue.map((node) => node.val).reverse())
    }
    count++
    while (len--) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return result
}
