import { createContext, ReactElement, ReactNode, useState, useEffect } from "react";
import { IFood, IFoodContext } from "../interfaces";
import { sortByBestBefore, getSupply } from "../services/api";
interface IFoodProviderProps {
  children: ReactNode;
}
 
export const FoodContext = createContext<IFoodContext>({} as IFoodContext);
 
export function FoodProvider({ children }: IFoodProviderProps): any {
  const [food, setFood] = useState<IFood[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [best, setBest] = useState<IFood[]>([]);

  const fetchFood = async () => {
    const url = "././api/foods_data.json";
 
    setLoading(true);
    try {
      const response = await fetch(url);
      let data = await response.json();
       let foodArr:  { best_before_date: string }[] = await Object.values(data);
       foodArr = await sortByBestBefore(foodArr);
       const bestBefore = await foodArr[0].best_before_date;
       let filtered = data.slice();
        filtered = filtered.filter( (supply) => supply.best_before_date === bestBefore);

      setBest( await filtered);
       setFood(await data);
    } catch (error) {
      console.error('Error fetching the food:', error);
    } finally {
      setLoading(false);
    }
  };
 
  // Fetch a supply when the component mounts
  useEffect(() => {
    fetchFood();

  }, []);
 
 
  // const data: IFoodContext = {
  //   food
  // };
 
  return <FoodContext.Provider value={{food, setFood, best, setBest}}>{children}</FoodContext.Provider>;
}