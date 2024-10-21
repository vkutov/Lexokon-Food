import { useContext } from 'react';
import FoodCard from "../components/FoodCard";
import { FoodContext } from "../context/FoodProvider";
 
const ListSupply = () => {
  const { food } = useContext(FoodContext);
  console.log(food);
 
  return (
    <>
      <main className='food-container'>
      {food.map((foodObj, i) => <FoodCard key={i} food={foodObj} />)}
      </main>
    </>
  );
};
 
export default ListSupply;
  