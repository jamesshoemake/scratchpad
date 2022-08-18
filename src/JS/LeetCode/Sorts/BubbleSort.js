// best case T:O(n^2) quadratic
// S:O(1) constant
const sortArray = (nums) => {
  if (!nums) return []
  let count = 0
  let swap = true

  while (swap) {
    swap = false
    for (let i = 0; i < nums.length - count; i++) {
      let j = i + 1
      if (nums[i] > nums[j]) {
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
        swap = true
      }
    }
    count++
  }

  return nums
}

const nums = [5, 2, 3, 1]
console.log(sortArray(nums))
