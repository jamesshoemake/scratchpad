const exist = (board, word) => {
  let rows = board.length
  let cols = board[0].length
  if (!word) return false

  const dfs = (r, c, wordIdx) => {
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      board[r][c] !== word[wordIdx]
    ) {
      return false
    }

    if (wordIdx === word.length - 1) return true

    board[r][c] = "*"

    // call on neighbors
    let found =
      dfs(r, c + 1, wordIdx + 1) ||
      dfs(r, c - 1, wordIdx + 1) ||
      dfs(r + 1, c, wordIdx + 1) ||
      dfs(r - 1, c, wordIdx + 1)

    board[r][c] = word[wordIdx]

    return found
  }

  // brute force walk through 2d array
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) return true
    }
  }

  return false
}

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCCED"

console.log(exist(board, word))
