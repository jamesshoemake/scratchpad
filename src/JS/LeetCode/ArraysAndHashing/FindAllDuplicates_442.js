// T:O(n) where n is size of the area
// S:O(n) using hash;
// S:O(1) clue nums is in range of [1, n] where n is size of the array
const findDuplicates = (nums) => {
  const result = []

  for (let i = 0; i < nums.length; i++) {
    let idx = Math.abs(nums[i]) - 1
    let val = nums[idx]
    console.log(`val ${val} at idx ${idx}`)

    if (val < 0) {
      console.log('pushing', Math.abs(nums[idx]))
      result.push(Math.abs(nums[i]))
    } else {
      nums[idx] = -nums[idx]
    }
  }

  return result
}

const nums = [10, 2, 5, 10, 9, 1, 1, 4, 3, 7]
console.log(findDuplicates(nums))
