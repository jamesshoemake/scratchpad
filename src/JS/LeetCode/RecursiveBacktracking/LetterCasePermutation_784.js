// backtracking dfs recursive
// T: O(2^n * n) tree options increase by 2 each step with n saved to results
// S: O(2^n * n) create space for all results * new space for results
const letterCasePermutation = (s) => {
  const result = []

  const dfs = (i, s, slate) => {
    // base case
    if (i === s.length) {
      // used join to create string since its a string input
      result.push(slate.join(""))
      return
    }

    // dfs recursive case
    let char = s[i]

    if (!Number.isInteger(parseInt(char))) {
      // uppercase
      slate.push(char.toUpperCase())
      dfs(i + 1, s, slate)
      slate.pop()
      // lowercase
      slate.push(char.toLowerCase())
      dfs(i + 1, s, slate)
      slate.pop()
    } else {
      slate.push(char)
      dfs(i + 1, s, slate)
      slate.pop()
    }
  }

  dfs(0, s, [])

  return result
}

console.log(letterCasePermutation("a1b2"))
