// T:O(2^n * n)
// S:O(2^n * n)
const subsets = (nums) => {
  const result = []

  // dfs recursive helper function
  const dfs = (i, nums, slate) => {
    // base case
    if (i === nums.length) {
      result.push(slate.slice())
      return
    }

    // dfs recursive case

    //  exclude i
    dfs(i + 1, nums, slate)

    //  include i
    slate.push(nums[i])
    dfs(i + 1, nums, slate)
    slate.pop()
  }

  dfs(0, nums, [])
  return result
}
