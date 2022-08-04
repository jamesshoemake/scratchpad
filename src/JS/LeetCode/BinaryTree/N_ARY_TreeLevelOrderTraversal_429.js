// n-ary tree
// breath first search
// using queue
// T:O(n) only touches nodes 1 time
// S:O(n)
const levelOrder = () => {
  if (!root) return []

  const queue = [root]
  const result = []

  while (queue.length) {
    let len = queue.length
    result.push(queue.map((node) => node.val))

    while (len--) {
      let node = queue.shift()

      for (let child of node.children) {
        queue.push(child)
      }
    }
  }
  return result
}
