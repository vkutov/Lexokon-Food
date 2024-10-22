import { useContext, useEffect, useState } from 'react';
import { FoodContext } from "../context/FoodProvider";
import { useParams } from 'react-router-dom';
import FoodDetails from '../components/FoodDetails';
import { IFood } from "../interfaces";

const SupplyDetails = () => {
  const { food } = useContext(FoodContext); // Get food data from context
  const { id } = useParams(); // Get id from route params
  const [detailed, setDetailed] = useState<IFood | null>(null); // Changed to IFood | null

  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        // Filter the food array based on the id parameter
        const detail = food.filter(supply => supply.id == id);
        if (detail.length > 0) {
          // Check if the image is null, and if so, assign a default image
          const foodWithImage = {
            ...detail[0],
            image: detail[0].image ? detail[0].image : "../img/supply.png", // Assign fallback image if null
          };
          setDetailed(foodWithImage);
        } else {
          setDetailed(null); // Set null if no detail is found
        }
      } catch (error) {
        console.error('Error fetching the food supply:', error);
      }
    };

    if (food && id) {
      // Fetch food details if food and id are available
      fetchFoodDetails();
    }
  }, [food, id]); // Add dependencies to useEffect

  if (!detailed) {
    return <div>Loading...</div>; // Handle the loading state
  }

  return (
    <>
      {/* Render FoodDetails only when detailed is not null */}
      <FoodDetails food={detailed} />
    </>
  );
};

export default SupplyDetails;



