// T:O(2^n*n)
// S:O(2^n*n)
const subsetsWithDup = (nums) => {
  if (!nums) return []

  const result = []
  nums.sort((a, b) => a - b)

  // dfs recusive helper
  const dfs = (i, nums, slate) => {
    // base case
    if (i === nums.length) {
      result.push(slate.slice())
      return
    }

    // start recursion
    // exclude
    dfs(i + 1, nums, slate)

    // include
    slate.push(nums[i])
    dfs(i + 1, nums, slate)
    slate.pop()
  }

  dfs(0, nums, [])

  const hash = {}

  for (let el of result) {
    if (hash[el]) continue
    hash[el] = el
  }

  return Object.values(hash)
}

const nums = [1, 2, 2]

console.log(subsetsWithDup(nums))
