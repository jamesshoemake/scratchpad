// T:O(n * n log n)
// S:O(n)
const groupAnagrams = (strs) => {
  // create sorted strings array
  const sortedStrs = strs.map((word) => word.split('').sort().join(''))
  const hash = {}

  for (let i = 0; i < strs.length; i++) {
    if (!hash[sortedStrs[i]]) {
      hash[sortedStrs[i]] = [strs[i]]
    } else {
      hash[sortedStrs[i]].push(strs[i])
    }
  }

  return Object.values(hash)
}
