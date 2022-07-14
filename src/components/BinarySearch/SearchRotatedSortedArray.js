import React from 'react'

const SearchRotatedSortedArray = () => {
  const searchArray = (arr, target) => {
    let left = 0
    let right = arr.length
    let mid = 0

    console.log(left, right, mid)

    while (left <= right) {
      mid = Math.floor((right + left) / 2)
      if (arr[mid] === target) return mid

      // if left
      if (arr[left] <= arr[mid]) {
        if ((target > arr[mid]) | (target < arr[left])) {
          left = mid + 1
        } else {
          right = mid - 1
        }
      } else {
        if ((target < arr[mid]) | (target > arr[right])) {
          right = mid - 1
        } else {
          left = mid + 1
        }
      }
    }

    return -1
  }

  return <div>{searchArray([4, 5, 6, 7, 0, 1, 2], 5)}</div>
}

export default SearchRotatedSortedArray
