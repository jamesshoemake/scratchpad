const isBalanced = (root) => {
  if (!root) return true
  let balanced = true

  const dfs = (node) => {
    if (!node) return 0

    let lDepth = dfs(node.left)
    let rDepth = dfs(node.right)

    if (Math.abs(lDepth - rDepth) > 1) {
      balanced = false
    }
    return Math.max(lDepth + 1, rDepth + 1)
  }

  dfs(root)
  return balanced
}
