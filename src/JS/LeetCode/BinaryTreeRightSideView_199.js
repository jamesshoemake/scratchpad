// T:0(n), only ever hits nodes 1x
// S:O(h) if balanced tree 0(log n)
const rightSideView = (root) => {
  if (!root) return []

  const queue = [root]
  const result = []

  while (queue.length) {
    let len = queue.length
    result.push(queue[queue.length - 1].val)

    while (len--) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return result
}
