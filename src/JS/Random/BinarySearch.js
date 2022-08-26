const guessingGame = (nums, guess) => {
  let left = 0
  let right = nums.length - 1
  let guessFound = false

  const binarySearch = (left, right, nums) => {
    let mid = Math.floor((left + right) / 2)

    if (guess === nums[mid]) {
      guessFound = true
      return
    }

    if (guess > nums[mid]) {
      left = mid + 1
      right = nums.length - 1
      binarySearch(left, right, nums)
    } else if (guess < nums[mid]) {
      left = 0
      right = mid
      binarySearch(left, right, nums)
    }
  }

  binarySearch(left, right, nums)
  return guessFound
}

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let guess = 9

console.log('correct Answer: ', guessingGame(nums, guess))
