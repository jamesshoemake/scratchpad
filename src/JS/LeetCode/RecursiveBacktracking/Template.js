function main(input) {
  result = [] // somethign to hold results

  const dfs = (i, input, slate) => {
    // back track case

    //base case
    if (i === input.length) {
      //copy current slate into result
      result.push(slate.slice())

      return
    }

    //dfs recursive case
    char = input[i]
    if (char === number) {
      slate.push(char)
      dfs(i++, input, slate)
      slate.pop()
    }

    if (char !== number) {
      // uppercase
      slate.push(char.toUpperCase())
      dfs(i++, input, slate)
      slate.pop()

      // lowercase
      slate.push(char.toLowerCase())
      dfs(i++, input, slate)
      slate.pop()
    }
  }
}
