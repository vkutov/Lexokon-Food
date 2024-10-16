import { useEffect, useState,useContext } from 'react';
import FoodCard from "./FoodCard";
import { sortByBestBefore,getSupply } from "../services/api";
import { useNavigate } from 'react-router-dom';
import { FoodContext } from "../context/FoodProvider";




  // export function Home() {
  //   return (
  //     <main className="home-main">
  //       <FoodList />
  //       <Footer />
  //     </main>
  //   );
  // }


// const data = getSupply;
// const supply = localStorage.getItem('supply');
// const food = supply ? JSON.parse(supply) : null;
// const foodArr: { best_before_date: string }[] = Object.values(food);
// const sArr = sortByBestBefore(foodArr);
// console.log(sArr[0]);
// return (
//   <FoodDetails />
// )

// api tag
// export interface IFood {
//   id: string;
//   image: string;
//   qty: string;
//   best_before_date: string;
// }

const SortedSupply = () => {
  // const [best, setBest] = useState<Object | null>(null);
  // const [food, setFood] = useState<Object | null>(null);
  const [best, setBest] = useState<Object>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const Navigate = useNavigate(); // direct to another page
  const { food } = useContext(FoodContext);


  // Function to fetch 
  const fetchFood = async () => {
  const url = "././api/foods_data.json";

    setLoading(true);
    try {
      const response = await fetch(url);
      let data = await response.json();
      let foodArr: { best_before_date: string }[] = Object.values(data);
      foodArr = sortByBestBefore(foodArr);
      // setBest(foodArr[0]);
      //  setFood(data);
      setBest(foodArr[0]);
    } catch (error) {
      console.error('Error fetching the cocktail:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a supply when the component mounts
  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <FoodCard food={best}/>
  );
};

export default SortedSupply;
