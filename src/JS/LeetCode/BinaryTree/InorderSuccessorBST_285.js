// T:O(n) if balanced O(log n)
// S:O(1) no need space relative to size of input
const inorderSuccessor = (root, p) => {
  // check if p has right subtree
  if (p.right) {
    let cur = p.right
    let prev = null

    while (cur) {
      prev = cur
      cur = cur.left
    }

    return prev
  }

  // if p does not have a right subtree
  let cur = root
  let prev = null

  while (cur !== p) {
    if (p.val < cur.val) {
      prev = cur
      cur = cur.left
    } else {
      cur = cur.right
    }
  }

  return prev
}
