// Divided and conguer algo with recursion
// T:O(n log n) height of the tree with n operations per tier

const merge = (left, right) => {
  const result = []
  let i = 0
  let j = 0

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }

  while (i < left.length) {
    result.push(left[i])
    i++
  }
  while (j < right.length) {
    result.push(right[j])
    j++
  }

  return result
}

const sortArray = (nums) => {
  if (nums.length <= 1) return nums

  let mid = Math.floor(nums.length / 2)

  let left = sortArray(nums.slice(0, mid))
  let right = sortArray(nums.slice(mid))

  return merge(left, right)
}

const nums = [5, 1, 1, 2, 0, 0]
const nums2 = [0, 1, 1, 0, 2, 5]

console.log(`nums ${nums}`, sortArray(nums))
console.log(`nums2 ${nums2}`, sortArray(nums2))
