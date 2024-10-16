import { useContext } from 'react';
import FoodCard from "../components/FoodCard";
import { FoodContext } from "../context/FoodProvider";
 
const ListSupply = () => {
  const { food } = useContext(FoodContext);
  console.log(food);
 
  return (
    <>
      {food.map((foodObj, i) => <FoodCard key={i} food={foodObj} />)}
    </>
  );
};
 
export default ListSupply;
  