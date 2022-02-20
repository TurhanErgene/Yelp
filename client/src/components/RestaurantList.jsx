import React from 'react'

const RestaurantList = () => {
  return (
    //!
    <div className="mx-auto">
      <table className="table table-hover">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody className="table-secondary">
          <tr>
            <td>McDonalds</td>
            <td>Malmö</td>
            <td>$$</td>
            <td>Ratings</td>
            <td><button className="btn btn-warning">Update</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>
          <tr>
            <td>Subway</td>
            <td>Lund</td>
            <td>$$$</td>
            <td>Ratings</td>
            <td><button className="btn btn-warning">Update</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>
        </tbody>
     </table>
  </div>
  )
}

export default RestaurantList