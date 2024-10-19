import { useContext, useState, useEffect } from 'react';
import FoodCard from "./FoodCard";
import { IFood } from "../interfaces";
import { FoodContext } from "../context/FoodProvider";
import { sortByBestBefore } from "../services/api";
 
const SortedSupply = () => {
  const { food } = useContext(FoodContext);
  const [best, setBest] = useState<IFood[]>([]);
 

  useEffect(() => {
    const fetchBestFood = async () => {
      try {
        // Omvandla food till en array om det behövs
        let foodArr: { best_before_date: string }[] = Object.values(food);
 
        // Sortera matvarorna efter "best before"-datum
        foodArr = sortByBestBefore(foodArr);
        const bestBefore = foodArr[0].best_before_date;
 
        // Filtrera matvarorna efter det första "best before"-datumet
        const filtered = food.filter(supply => supply.best_before_date === bestBefore);
 
        // Uppdatera state med det filtrerade resultatet
        setBest(filtered);
      } catch (error) {
        console.error('Error fetching the food supply:', error);
      }
    };
 
    // Kör den asynkrona funktionen
    fetchBestFood();
  }, [food]); // useEffect beroende av food
  return (
    <>
      {best.map((bestObj, i) => <FoodCard key={i} food={bestObj} />)}
    </>
  );
};
 
export default SortedSupply;
  
