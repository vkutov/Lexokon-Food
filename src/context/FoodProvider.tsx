import { createContext, ReactElement, ReactNode, useState, useEffect } from "react";
import { useLocation} from "react-router-dom" 
import { IFood, IFoodContext } from "../interfaces";
import { sortByBestBefore, getSupply } from "../services/api";
interface IFoodProviderProps {
  children: ReactNode;
}
 
export const FoodContext = createContext<IFoodContext>({} as IFoodContext);
  

export function FoodProvider({ children }: IFoodProviderProps): any {
  const [food, setFood] = useState<IFood[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const addFood = (supply: IFood) => {
      setFood([supply, ...food]);
    };

    const removeFood = (movie: IFood): void => {
      // setFood(food.filter((f) => f !== food.id));
    };
  const fetchFood = async () => {
    const url = "././api/foods_data.json";
 
    setLoading(true);
    try {
      const response = await fetch(url);
      let data = await response.json();
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
 
  return <FoodContext.Provider value={{food, setFood, addFood, removeFood}}>{children}</FoodContext.Provider>;
}