import { useContext, useState, useEffect } from "react";
import { IFood } from "../interfaces";
import FoodDetails from "../components/FoodDetails";
import { FoodContext } from "../context/FoodProvider";
import { useNavigate } from "react-router-dom";
import { sortByIndex } from "../services/api";

const AddFood = () => {
  const [id, setId] = useState<string>("");
  const [food_item, setFoodItem] = useState<string>("");
  const [best_before_date, setBestBeforeDate] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [energy, setEnergy] = useState<string>("");

  const { addFood, food } = useContext(FoodContext); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let foodArr: { id: string }[] = Object.values(food);
        const max = sortByIndex(foodArr) + 1; // Get the max id and increment
        setId(max); // Convert to string since your id is set as string
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [food]);


    const addFoodObj: IFood = {
      id,
      food_item,
      best_before_date,
      image,
      quantity,
      energy,
    };


  return (
    <>         
      <FoodDetails food={addFoodObj} />
    </>
 );

}
export default AddFood;


 {/* <form className="add-movie" onSubmit={handleOnsubmit}>
           <input label="title" onChange={(e) => setFoodItem(e.target.value)
            (e.target.value)} type="text" value={food_item} />
           <input value="add" type="submit" />      
        </form> */}