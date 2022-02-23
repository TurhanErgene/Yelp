import React, { useState } from 'react'

const AddRestaurant = () => {

  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [price_range, setPriceRange] = useState("Price Range")


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
            <select value={price_range} onChange={e => setName(e.target.value)} className="custom-select my-1 mr-sm-2"> 
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button className="btn btn-primary mx-2">Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddRestaurant