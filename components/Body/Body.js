import RestaurantCard from "./RestaurantCard/RestaurantCard.js";
import SearchBar from "./SearchBar/SearchBar.js";
import resList from "./RestaurantCard/RestaurantData.js";
import "./Body.css";
const Body = () => {
  return (
    <div className="body">
      <SearchBar />
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key = {restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
