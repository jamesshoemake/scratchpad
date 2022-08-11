// T:O(n)
// balanced tree T:O(log n)
// S:O(1) - no new space equal to tree size
const insertIntoBST = (root, val) => {
  const newNode = new TreeNode(val)
  if (!root) return newNode

  let cur = root
  let prev = null

  while (cur) {
    if (val > cur.val) {
      prev = cur
      cur = cur.right
    } else {
      prev = cur
      cur = cur.left
    }
  }

  if (val < prev.val) prev.left = newNode
  else prev.right = newNode

  return root
}
