// T:O(m+n) worse case reduces to O(n)
// S:O(1) if no auxilary array
const merge = (nums1, m, nums2, n) => {
  let first = m - 1
  let second = n - 1
  let i = m + n - 1

  while (second >= 0) {
    let fVal = nums1[first]
    let sVal = nums2[second]

    if (fVal > sVal) {
      nums1[i] = fVal
      i--
      first--
    } else {
      nums1[i] = sVal
      i--
      second--
    }
  }
}
