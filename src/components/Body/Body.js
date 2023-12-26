import RestaurantCard from "./RestaurantCard/RestaurantCard.js";
import SearchBar from "./SearchBar/SearchBar.js";
import resList from "/src/utils/RestaurantData.js";
import { useState } from "react";
import "./Filter.css"

import "./Body.css";
const Body = () => {
  const [ResList, setResList] = useState(resList);
  return (
    <div className="body">
      <div className="body-top">
        {<SearchBar />}
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const fresList = resList.filter(
                (res) => res.data.avgRating > 4.0
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
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
