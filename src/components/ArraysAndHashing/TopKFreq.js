import React from 'react'

const TopKFreq = () => {
  const topKFreq = (nums) => {
    let map = {}

    for (let i = 0; i < nums.length; i++) {
      map[nums[i]] = 1
    }

    console.log(map)

    return 'k'
  }

  return <div>TopKFreq {topKFreq([1, 1, 1, 2, 2, 3, 5], 2)}</div>
}

export default TopKFreq
