// T:O(log n)
// S:O(1)
const search = (nums, target) => {
  // trivial solution for javascript with T:O(n)
  // return nums.indexOf(target)

  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2)

    if (nums[mid] === target) return mid

    if (nums[l] <= nums[mid]) {
      // left side is sorted
      if (nums[l] <= target && target <= nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[r]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }

  return -1
}

let nums = [4, 5, 6, 7, 0, 1, 2]
let target = 0
console.log(search(nums, target))
