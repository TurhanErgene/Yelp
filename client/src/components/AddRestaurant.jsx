import React, { useContext, useState } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantContext } from '../context/RestaurantsContext'
const AddRestaurant = () => {

  const {addRestaurants} = useContext(RestaurantContext)
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] = useState("Price Range")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange,
      })

      addRestaurants(response.data.data.restaurant)
      console.log(response);


    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mb-4 d-flex justify-content-around">
      <form action="">
        <div className="d-flex justify-content-around my-3">
          <div className="col-md-4 mx-3">
            <input value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="Name"/>
          </div>
          <div className="col-md-4 mx-3">
            <input value={location} onChange={e => setLocation(e.target.value)} type="text" className="form-control" placeholder="Location"/>
          </div>
          <div className="col mx-2">
            <select value={priceRange} onChange={e => setPriceRange(e.target.value)} className="custom-select my-1 mr-sm-2"> 
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button onClick={handleSubmit} type="submit" className="btn btn-primary mx-2">Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddRestaurant