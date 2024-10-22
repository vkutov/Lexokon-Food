import { createContext, ReactNode, useState, useEffect } from "react";
import { IFood, IFoodContext } from "../interfaces";

interface IFoodProviderProps {
  children: ReactNode;
}

export const FoodContext = createContext<IFoodContext>({} as IFoodContext);

export function FoodProvider({ children }: IFoodProviderProps): JSX.Element {
  const [food, setFood] = useState<IFood[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Add a new food supply
  const addFood = (supply: IFood) => {
    setFood([supply, ...food]); // Prepend the new food item
  };

  // Remove a food supply by its id
  const removeFood = (foodToRemove: IFood): void => {
    setFood(food.filter((f) => f.id !== foodToRemove.id)); // Filter out the item by id
  };

  // Fetch food supplies from a local JSON file
  const fetchFood = async () => {
    const url = "././api/foods_data.json";

    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setFood(data); // Set food with fetched data
    } catch (error) {
      console.error("Error fetching the food:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch food supplies when the component mounts
  useEffect(() => {
    fetchFood();
  }, []);

  // Pass food, setFood, addFood, and removeFood to the context provider
  return (
    <FoodContext.Provider value={{ food, setFood, addFood, removeFood }}>
      {children}
    </FoodContext.Provider>
  );
}