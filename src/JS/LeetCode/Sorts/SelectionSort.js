// T:O(n^2)
// S:O(1)
const sortArray = (nums) => {
  if (!nums) return []

  for (let i = 0; i < nums.length; i++) {
    let minIdx = i
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIdx]) {
        minIdx = j
      }
    }

    ;[nums[i], nums[minIdx]] = [nums[minIdx], nums[i]]
  }

  return nums
}

const nums = [5, 1, 1, 2, 0, 0]
console.log(sortArray(nums))
