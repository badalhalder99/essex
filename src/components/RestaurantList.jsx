import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const API_URL =
  "https://gist.githubusercontent.com/deliveroo-interviews/fc29b2ae38280bf30f4d022a68f96a86/raw/497f74503512fc1a873c9d9eb7d3a655ebadf138/web_restaurant_list.json";

const RestaurantList = () => {
   const [restaurants, setRestaurants] = useState([]);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchRestaurants = async () => {
         try {
            const response = await fetch(API_URL);

            if (!response.ok) {
               throw new Error("Something went wrong");
            }

            const data = await response.json();
            console.log(data.body.restaurants)
            setRestaurants(data.body.restaurants || []);
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };

      fetchRestaurants();
   }, []);

   if (loading) return <p>Loading restaurants...</p>;
   if (error) return <p>Error: {error}</p>;

   return (
      <div className="restaurants">
         <div className="container">
            <p className="restaurants__count">{restaurants.length} Restaurants</p>

            <div className="restaurants__list">
               {restaurants.map(restaurant => (
                  <RestaurantCard
                     key={restaurant.name}
                     name={restaurant.name}
                     tags={restaurant.tags}
                     imageUrl={restaurant.image}
                     price={restaurant.price}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default RestaurantList;
