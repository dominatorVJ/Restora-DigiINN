import RestaurantCard from "./RestaurantCard/RestaurantCard.js";
import SearchBar from "./SearchBar/SearchBar.js";
import { useState, useEffect } from "react";
import { API_URL } from "../../utils/constants.js";
import "./Filter.css";
import "./Body.css";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [ResList, setResList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL, {
      headers: {
        "x-cors-api-key": "temp_c9686ddca7b5c844e30ecf1906bd7007",
      },
    });
    const json = await data.json();
    //Optional Chaining
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return ResList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="body-top">
        {<SearchBar />}
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const fresList = ResList.filter(
                (res) => res.info.avgRating > 4.0
              );
              setResList(fresList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {ResList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
