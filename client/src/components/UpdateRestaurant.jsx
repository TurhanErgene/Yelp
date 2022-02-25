import React from 'react'
import {useParams} from 'react-router-dom'

const UpdateRestaurant = () => {
  const test = useParams()
  console.log(test);

  return (
    <div>
      <h1>Hi, test</h1>
    </div>
  )
}

export default UpdateRestaurant