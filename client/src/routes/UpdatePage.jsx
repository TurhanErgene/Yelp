import React from 'react'
import UpdateRestaurant from '../components/UpdateRestaurant'
import { useNavigate } from "react-router-dom";


const UpdatePage = () => {
  let navigate = useNavigate('/')

  return (
    <div>
      <h1 className="text-center" onClick={() => navigate('/')}>Update Restaurant</h1>

      <UpdateRestaurant/>
    </div>
  )
}

export default UpdatePage