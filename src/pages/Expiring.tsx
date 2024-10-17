import { useContext, useState, useEffect } from 'react';
import FoodCard from "../components/FoodCard";
import { IFood } from "../interfaces";
import { FoodContext } from "../context/FoodProvider";
import { getExpiring } from "../services/api";
 
const ExpiringSupply = () => {
  const { food } = useContext(FoodContext);
  const [best, setBest] = useState<IFood[]>([]);
 
  useEffect(() => {
    const fetchBesforeFood = async () => {
      try {
        const expiring = getExpiring(food); 
        // Uppdatera state med det filtrerade resultatet
        setBest(expiring);
      } catch (error) {
        console.error('Error fetching the food supply:', error);
      }
    };
 
    // Kör den asynkrona funktionen
    fetchBesforeFood();
  }, [food]); // useEffect beroende av food
  return (
    <>
      {best.map((bestObj, i) => <FoodCard key={i} food={bestObj} />)}
    </>
  );
};
 
export default ExpiringSupply;
  