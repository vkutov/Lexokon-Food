import { useContext,useState,useEffect } from 'react';
import FoodCard from "./FoodCard";
import { IFood } from "../interfaces";

import { FoodContext } from "../context/FoodProvider";
import { sortByBestBefore } from "../services/api";
import { Await } from 'react-router-dom';

const SortedSupply = () => {
  const { best } = useContext(FoodContext);

  
  
  // const best = foodArr[0].best_before_date;
  // let filtered = food.filter( (supply) => supply.best_before_date === best);
  // alert(filtered)
  // const best = sortByBestBefore(food);
  // let oldest = localStorage.getItem("best");
  // let old = JSON.parse(oldest);
  // alert(oldest);
   
  return (
    <>
      {best.map((bestObj, i) => <FoodCard key={i} food={bestObj} />)}
    </>
  );
};
 
export default SortedSupply;
  
