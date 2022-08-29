const maxDepth = (root) => {
  if (!root) return 0

  let lDepth = maxDepth(root.left)
  let rDepth = maxDepth(root.right)

  return Math.max(lDepth, rDepth) + 1
}
