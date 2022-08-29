const mergeSortedArray = (arr1, arr2) => {
  const newArr = []
  let arr1Pointer = 0
  let arr1Len = arr1.length - 1
  let arr2Pointer = 0
  let arr2Len = arr2.length - 1
  let currentIdx = 0
  let newArrLen = arr1Len + arr2Len + 1

  while (currentIdx <= newArrLen) {
    if (arr1[arr1Pointer] <= arr2[arr2Pointer]) {
      if (newArr[currentIdx - 1] !== arr1[arr1Pointer])
        newArr.push(arr1[arr1Pointer])
      arr1Pointer++
      currentIdx++
    } else if (arr2[arr2Pointer] < arr1[arr1Pointer]) {
      if (newArr[currentIdx - 1] !== arr2[arr2Pointer])
        newArr.push(arr2[arr2Pointer])
      arr2Pointer++
      currentIdx++
    } else {
      console.log('else')
      if (arr1Pointer <= arr1Len) {
        if (newArr[currentIdx - 1] !== arr1[arr1Pointer])
          newArr.push(arr1[arr1Pointer])
        arr1Pointer++
        currentIdx++
      }

      if (arr2Pointer <= arr2Len) {
        if (newArr[currentIdx - 1] !== arr2[arr2Pointer])
          newArr.push(arr2[arr2Pointer])
        arr2Pointer++
        currentIdx++
      }
    }
  }

  return newArr
}

const arr1 = [1, 2, 3, 5, 9, 10]
const arr2 = [2, 4, 6, 7, 8]

console.log(mergeSortedArray(arr1, arr2))
