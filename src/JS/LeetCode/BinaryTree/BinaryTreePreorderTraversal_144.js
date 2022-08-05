// Stack Solution
// S: 0(n)
// T: 0(n)
const preorderTraversal = (root) => {
  if (!root) return []

  const stack = [root]
  const result = []

  while (stack.length) {
    let node = stack.pop()

    result.push(node.val)
    if (node.right) stack.push(node.right)

    if (node.left) stack.push(node.left)
  }

  return result
}
