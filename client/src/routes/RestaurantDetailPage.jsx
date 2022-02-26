import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from '../apis/RestaurantFinder'


const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext)

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`)
      console.log(response);
      setSelectedRestaurant(response.data.data)
    }
    fetchData();
  },[])
  
  return <div>RestaurantDetailPage</div>;
};

export default RestaurantDetailPage;
