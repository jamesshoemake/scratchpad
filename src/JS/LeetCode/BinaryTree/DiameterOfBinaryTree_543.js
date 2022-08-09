// T:O(n)
// if balanced tree S:O(log n)
// if left or right side only tree S:O(n)
const diameterOfBinaryTree = (root) => {
  if (!root) return 0

  let max = 0

  const dfs = (node) => {
    if (!node) return 0

    let left = dfs(node.left)
    let right = dfs(node.right)

    max = Math.max(left + right, max)

    return Math.max(left, right) + 1
  }

  dfs(root)

  return max
}
