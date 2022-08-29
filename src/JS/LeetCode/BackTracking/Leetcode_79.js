var exist = function (board, word) {
  const ROW = board.length
  const COL = board[0].length
  if (!word.length) return false

  function dfs(r, c, pos) {
    console.log(board)
    if (r < 0 || c < 0 || r >= ROW || c >= COL || board[r][c] != word[pos])
      return false
    if (pos == word.length - 1) return true

    // if found mark in place
    board[r][c] = "*"

    const found =
      dfs(r + 1, c, pos + 1) ||
      dfs(r - 1, c, pos + 1) ||
      dfs(r, c + 1, pos + 1) ||
      dfs(r, c - 1, pos + 1)

    board[r][c] = word[pos]

    return found
  }

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
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
