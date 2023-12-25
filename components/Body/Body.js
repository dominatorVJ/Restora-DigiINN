import RestaurantCard from "./RestaurantCard/RestaurantCard.js";
import SearchBar  from "./SearchBar/SearchBar.js";
import "./Body.css"
const Body = ()=>{
    return (
      <div className="body">
        <SearchBar />
        <div className="res-container">
          <RestaurantCard resname={"Meghana Foods"} cuisine={"Meal, North India, Asian"} rating={4.4} deltime={38} />
          <RestaurantCard resname={"KFC"} cuisine={"Fast Food, Chinese"} rating={4.5} deltime={50}/>
        </div>
      </div>
    );
};

export default Body;