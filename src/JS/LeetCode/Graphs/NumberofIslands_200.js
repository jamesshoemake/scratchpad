const numIslands = (grid) => {
  const visited = grid.map((row) => row.map((cell) => false))
  let islandCount = 0

  const getAdjNeighbors = (i, j, grid, visited) => {
    const adjNeighbors = []

    if (i > 0 && !visited[i - 1][j]) adjNeighbors.push([i - 1, j])
    if (i < grid.length - 1 && !visited[i + 1][j]) adjNeighbors.push([i + 1, j])

    if (j > 0 && !visited[i][j - 1]) adjNeighbors.push([i, j - 1])
    if (j < grid[0].length - 1 && !visited[i][j + 1])
      adjNeighbors.push([i, j + 1])

    return adjNeighbors
  }

  const dfs = (i, j, grid, visited) => {
    const stack = [[i, j]]
    let islandSize = 0

    while (stack.length) {
      let curNode = stack.pop()

      let [i, j] = curNode

      // is this in visited at [i,j]?
      if (visited[i][j]) continue
      visited[i][j] = true

      // check if cell is an island block
      if (grid[i][j] === 0) continue
      islandSize++

      let adjNeighbors = getAdjNeighbors(i, j, grid, visited)

      stack.push(...adjNeighbors)
    }

    return islandSize > 0 ? true : false
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (dfs(i, j, grid, visited)) islandCount++
    }
  }

  return islandCount
}

const grid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
]

const grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
]

console.log(numIslands(grid1))
