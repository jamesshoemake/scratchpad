const isSameTree = (p, q) => {
  if (!p || !q) return p === q

  if (p.val !== q.val) return false

  let leftCheck = isSameTree(p.left, q.left)
  let rightCheck = isSameTree(p.right, q.right)

  return leftCheck && rightCheck
}
