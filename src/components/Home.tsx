import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import FoodCard from "./FoodCard";
import { IFood } from "../interfaces";
import { FoodContext } from "../context/FoodProvider";
import { sortByBestBefore } from "../services/api";
 import '../index.css';

const SortedSupply = () => {
  const { food } = useContext(FoodContext);
  const [best, setBest] = useState<IFood[]>([]);
  const [missing, setMissing] = useState<number>(0); 

 

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
        //number of missing
        let missingArr: { quantity: string }[] = Object.values(food);
        // Filtrera matvarorna efter det första "best before"-datumet
        const zeroQuantityItems = missingArr.filter(item => item.quantity == "0");

    // Get the number of such items
      const count = zeroQuantityItems.length;
      setMissing(count);
      } catch (error) {
        console.error('Error fetching the food supply:', error);
      }
    };
 
    // Kör den asynkrona funktionen
    fetchBestFood();
  }, [food]); // useEffect beroende av food
  return (
    <>
       <article className="home">
        <aside className="item1">
      {best.map((bestObj, i) => <FoodCard key={i} food={bestObj} />)}
       </aside>
       {missing !=0 &&
        <aside>
            <Link to="/missing"> <h2>{missing} item(s) missing!</h2></Link>
        </aside>
           }
      </article>  
   
    </>
  );
};
 
export default SortedSupply;
  
