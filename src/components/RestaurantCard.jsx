import React from "react";
const RestaurantCard = ({
  name,
  tags,
  imageUrl,
  price
}) => <div className="restaurant">
    <div className="restaurant__image--container">
      <img className="restaurant__image" src={imageUrl} alt={`food from ${name}`} />
    </div>
    <h2 className="restaurant__name font__stratos">{name}</h2>
    <p className="restaurant__tags font__adelle">
      {tags.map(tag => <span key={tag}>
          {tag}
          <i className="restaurant__tags--seperator" />
        </span>)}
      {price}
    </p>
  </div>;
export default RestaurantCard;