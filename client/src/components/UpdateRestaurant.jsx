import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useNavigate } from "react-router-dom";

const UpdateRestaurant = (props) => {
  const { id } = useParams(); //uses to access id in the api
  const { restaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [priceRange, setPriceRange] = useState();
  let navigate = useNavigate()

  useEffect(() => {
      const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      console.log(response.data.data);

      setName(response.data.data.restaurant.name);
      setLocation(response.data.data.restaurant.location);
      setPriceRange(response.data.data.restaurant.price_range);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    navigate('/')
  };

  return (
    <div>
      <div className="d-flex col-md-4 mx-3">
        <form action="">
          <div className="form-group row mb-md-3">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group row mb-md-3">
            <label htmlFor="location">Location</label>
            <input
              className=""
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              id="location"
              placeholder="Location"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price_range">Price Range</label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="form-control row mb-md-3"
              id="price_range"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateRestaurant;
