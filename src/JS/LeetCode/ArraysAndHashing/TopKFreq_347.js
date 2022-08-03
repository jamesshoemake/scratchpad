const topKFreq = (nums) => {
  let map = {}

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = 1
  }

  console.log(map)

  return "k"
}

console.log(topKFreq([1, 1, 1, 2, 2, 3, 5], 2))
