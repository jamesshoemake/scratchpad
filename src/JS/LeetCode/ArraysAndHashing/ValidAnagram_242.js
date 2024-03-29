const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false
  }

  let sMap = {}
  let tMap = {}
  for (let i = 0; i < s.length; i++) {
    if (sMap.hasOwnProperty(s[i])) {
      sMap[s[i]]++
    } else {
      sMap[s[i]] = 1
    }
    if (tMap.hasOwnProperty(t[i])) {
      tMap[t[i]]++
    } else {
      tMap[t[i]] = 1
    }
  }
  for (let k in sMap) {
    if (sMap[k] !== tMap[k]) {
      return false
    }
  }
  return true
}

const isAnagram2 = function (s, t) {
  let map = {}

  if (s.length != t.length) {
    return false
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++
    } else {
      map[s[i]] = 1
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) {
      map[t[i]]--
    } else {
      return false
    }
  }

  return true
}

const s1 = "anagram"
const t1 = "nagaram"
const s2 = "rat"
const t2 = "car"

console.log("isAragram")
console.log(`${s1} and ${t1}: ${isAnagram(s1, t1)}`)
console.log(`${s2} and ${t2}: ${isAnagram(s2, t2)}`)
console.log("")
console.log("isAragram2")
console.log(`${s1} and ${t1}: ${isAnagram2(s1, t1)}`)
console.log(`${s2} and ${t2}: ${isAnagram2(s2, t2)}`)
