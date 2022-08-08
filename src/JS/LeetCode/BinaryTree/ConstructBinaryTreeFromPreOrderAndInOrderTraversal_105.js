// preorder Root -> Left -> Right
// inorder Left -> Root -> Right
const buildTree = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) return null

  let root = new TreeNode(preorder[0])
  let mid = inorder.indexOf(root.val)

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

  return root
}

const preorder = [3, 9, 20, 15, 7]
const inorder = [9, 3, 15, 20, 7]
