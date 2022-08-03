// all lower case characters
// . matches any character
function TrieNode() {
  this.children = {}
  this.completeWord = false
}

function WordDictionary() {
  this.root = new TrieNode()
}

WordDictionary.prototype.insert = function (word) {
  if (word === null || word.length === 0) return
  let node = this.root

  for (let i = 0; i < word.length; i++) {
    const c = word[i]
    if (!(c in node.children)) {
      node.children[c] = new TrieNode()
    }

    node = node.children[c]
  }

  node.completeWord = true
}

WordDictionary.prototype.search = function (word) {
  if (word === null || word.length === 0) return

  const dfs = (index, node) => {
    let curr = node

    for (let i = index; i < word.length; i++) {
      const c = word[i]

      if (c === '.') {
        const childValues = Object.values(curr.children)

        for (let j = 0; j < childValues.length; j++) {
          const child = childValues[j]
          if (dfs(i + 1, child)) {
            return true
          }
        }
        return false
      } else {
        if (!(c in curr.children)) {
          return false
        }
        curr = curr.children[c]
      }
    }
    return curr.completeWord
  }

  return dfs(0, this.root)
}

const myDict = new WordDictionary()

myDict.insert('bad')
myDict.insert('dad')
myDict.insert('mad')
myDict.insert('pad')
console.log('search bad', myDict.search('bad'))
console.log('search .ad', myDict.search('.ad'))
