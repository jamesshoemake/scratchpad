// DFS
// keep array slate
// balanced tree T:O(n log n)
// T:O(n^2)
// balanced tree S:O(n log n)
// S:O(n^2)
const pathSum = (root, targetSum) => {
  if (!root) return []
  const paths = []

  const dfs = (node, sum, slate) => {
    if (node.left === null && node.right === null) {
      if (sum === node.val) {
        slate.push(node.val)
        paths.push(slate.slice())
        slate.pop()
      }
    }

    if (node.left) {
      slate.push(node.val)
      dfs(node.left, sum - node.val, slate)
      slate.pop()
    }

    if (node.right) {
      slate.push(node.val)
      dfs(node.right, sum - node.val, slate)
      slate.pop()
    }
  }

  dfs(root, targetSum, [])
  return paths
}
