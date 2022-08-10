// bottom up recursion
// T:O(n) - visits all nodes 1 time
// S:O(n) - no new space, but contains call stack
// balanced tree S:O(log n)
const countUnivalSubtrees = (root) => {
  if (!root) return 0

  let count = 0

  const dfs = (node) => {
    if (root.left === null && root.right === null) {
      count++
      return true
    }

    let isUnival = true

    if (node.left) {
      let left = dfs(node.left)
      isUnival = left && isUnival && node.val === node.left.val
    }

    if (node.right) {
      let right = dfs(node.right)
      isUnival = right && isUnival && node.val === node.right.val
    }

    if (isUnival) count++
    return isUnival
  }

  dfs(root)
  return count
}
