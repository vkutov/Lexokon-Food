import { useContext, useState, useEffect } from 'react';
import FoodCard from "../components/FoodCard";
import { IFood } from "../interfaces";
import { FoodContext } from "../context/FoodProvider";
import { getMissing } from "../services/api";
 
const MissingSupply = () => {
  const { food } = useContext(FoodContext);
  const [missing, setMissing] = useState<IFood[]>([]);
 
  useEffect(() => {
    const fetcMissingFood = async () => {
      try {
        const missing = getMissing(food); 
        // Uppdatera state med det filtrerade resultatet
        setMissing(missing);
      } catch (error) {
        console.error('Error fetching the food supply:', error);
      }
    };
 
    // Kör den asynkrona funktionen
    fetcMissingFood();
  }, [food]); 
  return (
    <>
     <main className='food-container'>
       {missing.map((missingObj, i) => <FoodCard key={i} food={missingObj} />)}
     </main>
    </>
  );
};
 
export default MissingSupply;
  