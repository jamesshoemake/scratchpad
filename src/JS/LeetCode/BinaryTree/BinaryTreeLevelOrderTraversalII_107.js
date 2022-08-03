// uses queue to solve the problem
// Time 0(n)
// inner while loop is only traversing len
// space 0(n)
const levelOrderBottom = (root) => {
  if (!root) return []

  const queue = [root]
  const result = []

  while (queue.length) {
    let len = queue.length
    result.push(queue.map((node) => node.val))

    while (len--) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return result.reverse()
}
