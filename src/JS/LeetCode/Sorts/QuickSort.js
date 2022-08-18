// T:O(n log n) divide and conquer, if swap is evenly split
// S:O(1) no new arrays created
const pivot = (nums, left, right) => {
  let p = right
  let j = left
  let i = left - 1

  while (j <= p) {
    if (nums[j] < nums[p]) {
      i++
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      j++
    } else {
      j++
    }
  }

  i++
  ;[nums[i], nums[p]] = [nums[p], nums[i]]

  return i
}

const sortArray = (nums, left = 0, right = nums.length - 1) => {
  if (left < right) {
    let pIdx = pivot(nums, left, right)
    sortArray(nums, left, pIdx - 1)
    sortArray(nums, pIdx + 1, right)
  }
  return nums
}

const nums = [5, 2, 3, 1]
console.log(`nums ${nums}`, sortArray(nums))
