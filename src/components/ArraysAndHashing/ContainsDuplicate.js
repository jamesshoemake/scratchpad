import React from 'react'

const ContainsDuplicate = () => {
  const containsDuplicateSet = (nums) => new Set(nums).size !== nums.length

  return <div>{containsDuplicateSet([1, 2, 3, 1]) ? 'true' : 'false'}</div>
}

export default ContainsDuplicate
