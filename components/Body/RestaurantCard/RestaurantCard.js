import "./RestaurantCard.css";

const RestaurantCard = ({ resname, cuisine, rating, deltime }) => {
  return (
    <div class="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/emlehbuwgsmryxhwzhvq"
      />
      <h3>{resname}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} stars</h4>
      <h4>{deltime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
