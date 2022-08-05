// Stack Solution
const preorderTraversal = (root) => {
  if (!root) return []
  const result = []

  const preOrder = (node) => {
    if (!node) return null

    result.push(node.val)
    if (node.left) preOrder(node.left)
    if (node.right) preOrder(node.right)
  }

  preOrder(root)
  return result
}
