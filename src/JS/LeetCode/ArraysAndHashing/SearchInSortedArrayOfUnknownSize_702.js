// T:O(log n) using binary search: sorted array can I use binary search?
// S:O(1) no new space
const search = (reader, target) => {
  let l = 0
  let r = 1

  while (reader.get(r) < target) {
    l = r
    r = r * 2
  }

  while (l <= r) {
    let mid = Math.floor((l + r) / 2)

    if (reader.get(mid) === target) return mid

    if (reader.get(l) <= target && target < reader.get(mid)) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return -1
}
