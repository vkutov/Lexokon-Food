import { useContext,useState,useEffect } from 'react';
import FoodCard from "./FoodCard";
import { IFood } from "../interfaces";

import { FoodContext } from "../context/FoodProvider";
import { sortByBestBefore } from "../services/api";
import { Await } from 'react-router-dom';

const SortedSupply = () => {
  const { food } = useContext(FoodContext);
  const [best, setBest] = useState<IFood[]>([]);
      try {
            let foodArr: { best_before_date: string }[] = Object.values(food);
            foodArr = sortByBestBefore(foodArr);
            const bestBefore = foodArr[0].best_before_date;
            let filtered = food.filter( (supply) => supply.best_before_date === bestBefore);

            useEffect(() => {
              setBest(filtered);
            }, []); 
      // alert(data[0].best_before_date); ok
    } catch (error) {
      console.error('Error fetching the cocktail:', error);
    } 
  
  
  // const best = foodArr[0].best_before_date;
  // let filtered = food.filter( (supply) => supply.best_before_date === best);
  // alert(filtered)
  // const best = sortByBestBefore(food);
  // let oldest = localStorage.getItem("best");
  // let old = JSON.parse(oldest);
  // alert(oldest);
   
  return (
    <>
      {best.map((foodObj, i) => <FoodCard key={i} food={foodObj} />)}
    </>
  );
};
 
export default SortedSupply;
  
