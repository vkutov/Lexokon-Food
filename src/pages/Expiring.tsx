import { useContext, useState, useEffect } from 'react';
import FoodCard from "../components/FoodCard";
import { IFood } from "../interfaces";
import { FoodContext } from "../context/FoodProvider";
import { getExpiring } from "../services/api";
 
const ExpiringSupply = () => {
  const { food } = useContext(FoodContext);
  const [best, setBest] = useState<IFood[]>([]);
 
  useEffect(() => {
    const fetchBestforeFood = async () => {
      try {
        const expiring = getExpiring(food); 
        // Uppdatera state med det filtrerade resultatet
        setBest(expiring);
      } catch (error) {
        console.error('Error fetching the food supply:', error);
      }
    };
 
    // Kör den asynkrona funktionen
    fetchBestforeFood();
  }, [food]); // useEffect beroende av food
  return (
    <>
      <main className='food-container'>
         {best.map((bestObj, i) => <FoodCard key={i} food={bestObj} />)}
      </main>
    </>
  );
};
 
export default ExpiringSupply;
  



