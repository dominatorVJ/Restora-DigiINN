import "./RestaurantCard.css";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resData.data.cloudinaryImageId
        }
      />
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(", ")}</h4>
      <h4>{resData.data.avgRating} stars</h4>
      <h4>
        {resData.data.lastMileTravelString}{" | "}
        {resData.data.deliveryTime} minutes
      </h4>
      <h4>{resData.data.costForTwoString}</h4>
    </div>
  );
};

export default RestaurantCard;
