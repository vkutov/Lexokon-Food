import { useContext, useEffect, useState } from 'react';
import FoodCard from "../components/FoodCard";
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
        setDetailed(detail.length > 0 ? detail[0] : null); // Only set if detail exists
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
      {/* <main className='food-container'> */}
        {/* Render FoodDetails only when detailed is not null */}
        <FoodDetails  food={detailed} />
      {/* </main> */}
    </>
  );
};

export default SupplyDetails;