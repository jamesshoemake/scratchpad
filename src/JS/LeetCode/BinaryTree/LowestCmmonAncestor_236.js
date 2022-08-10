// T:O(n) single search of Tree
// S:O(n)
// have variables but not larger than size of tree, recursive calls stack
// balanced tree: O(log n) worse case S:O(n)
const lowestCommonAncestor = (root, p, q) => {
  if (!root) return null

  let lca = null

  const dfs = (node) => {
    if (node === null) return false

    let left = dfs(node.left)
    let right = dfs(node.right)

    let cur = node === p || node === q

    if (left + right + cur >= 2) lca = node

    return left || right || cur
  }

  dfs(root)

  return lca
}
