// good if array is partially sorted T:O(1)
// if array is not sorted T:O(N^2) similar to bubble

const sortArray = (nums) => {
  if (!nums) return []

  for (let i = 0; i < nums.length; i++) {
    let j = i
    while (j > 0 && nums[j] < nums[j - 1]) {
      ;[nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
      j--
    }
  }
  return nums
}

const nums = [5, 1, 1, 2, 0, 0]
const nums2 = [0, 1, 1, 0, 2, 5]

console.log(`nums ${nums}`, sortArray(nums))
console.log(`nums2 ${nums2}`, sortArray(nums2))
