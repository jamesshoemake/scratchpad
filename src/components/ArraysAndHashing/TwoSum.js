import React from 'react'

const TwoSum = () => {
  const twoSum = (target, nums) => {
    let map = {}

    for (let i = 0; i < nums.length; i++) {
      if (target - nums[i] in map) {
        return [map[target - nums[i]], i]
      } else {
        map[nums[i]] = i
      }
    }

    return []
  }
  return <div>{twoSum(9, [2, 31, 30, 7])}</div>
}

export default TwoSum
