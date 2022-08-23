// T:O(n^2) brute force
// T:O(log mn) sorted matrix can use binary search
// S:O(1)
const searchMatrix = (matrix, target) => {
  let rows = matrix.length
  let cols = matrix[0].length
  let l = 0
  let r = rows * cols - 1

  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    let midVal = matrix[Math.floor(mid / cols)][mid % cols]
    if (midVal === target) return true
    if (target < midVal) {
      r = mid - 1
    } else [(l = mid + 1)]
  }

  return false
}

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
  ],
  target = 3

console.log(searchMatrix(matrix, target))

const matrix2 = [[1, 3]],
  target2 = 1
console.log(searchMatrix(matrix2, target2))
