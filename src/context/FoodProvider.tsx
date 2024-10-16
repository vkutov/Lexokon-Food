import { createContext, ReactElement, ReactNode, useState, useEffect } from "react";
import { IFood, IFoodContext} from "../interfaces";
import { sortByBestBefore,getSupply } from "../services/api";
interface IFoodProviderProps {
  children: ReactNode;
}

export const FoodContext = createContext<IFoodContext>({} as IFoodContext);

export function FoodProvider({ children }: IFoodProviderProps): any {
  const [food, setFood] = useState<IFood[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchFood = async () => {
  const url = "././api/foods_data.json";
 
    setLoading(true);
    try {
      const response = await fetch(url);
      let data = await response.json();
          // alert(data[0].best_before_date); ok

      let foodArr: { best_before_date: string }[] = Object.values(data);
      foodArr = sortByBestBefore(foodArr);
      // setBest(foodArr[0]);
      setFood(data);
      alert(food?.length);
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
 

  // const data: IFoodContext = {
  //   food
  // };

  // return <FoodContext.Provider value={data}>{children}</FoodContext.Provider>;
}

