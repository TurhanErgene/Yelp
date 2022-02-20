import React from 'react'

const AddRestaurant = () => {
  return (
    <div className="mb-4 d-flex justify-content-around">
      <form action="">
        <div className="d-flex justify-content-around my-3">
          <div className="col-md-4 mx-3">
            <input type="text" className="form-control" placeholder="Name"/>
          </div>
          <div className="col-md-4 mx-3">
            <input type="text" className="form-control" placeholder="Location"/>
          </div>
          <div className="col mx-2">
            <select className="custom-select my-1 mr-sm-2"> 
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