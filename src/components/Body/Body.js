import RestaurantCard from "./RestaurantCard/RestaurantCard.js";
import { useState, useEffect } from "react";
import { API_URL } from "../../utils/constants.js";
import "./Filter.css";
import "./Body.css";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [ResList, setResList] = useState([]);
  const [filterResList, setFilterResList] = useState([]);
  const [searchText, setSearchText] = useState("");
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
    setFilterResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return ResList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="body-top">
        <div className="search-bar">
          <input
            className="search"
            type="text"
            placeholder="Search Restaurants here"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="button"
            onClick={() => {
              const filterResList = ResList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterResList(filterResList);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filterResList = ResList.filter(
                (res) => res.info.avgRating > 4.0
              );
              setFilterResList(filterResList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="filter-nearby-btn"
            onClick={() => {
              const filterResList = ResList.filter(
                (res) => res.info.sla.lastMileTravelString < "4.0"
              );
              setFilterResList(filterResList);
            }}
          >
           Nearby Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filterResList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
