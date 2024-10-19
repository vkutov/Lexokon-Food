import "../styles/Navbar.css";
// import { IFood } from "../interfaces";
import { FormEventHandler, MouseEventHandler, useContext, useState,  } from "react";
import { FoodContext } from "../context/FoodProvider";
// import  AddSupply  from "../pages/Add";
import "../styles/Navbar.css";
 import { IFood } from "../interfaces";
 import { useNavigate } from "react-router-dom";

 
export const FoodDetails = ({ food }: { food: IFood })  => {
  const navigate = useNavigate();
  const [id, setId] = useState<string>("");
  const [food_item, setFoodItem] = useState<string>("");
  const [best_before_date, setBestforeDate] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [energy, setEnergy] = useState<string>("");
  const {addFood} = useContext(FoodContext);
  const handleOnsubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newFood: IFood = {
      id,
      food_item,
      best_before_date,
      image,
      quantity,
      energy,
    };

    addFood(newFood);
    navigate("/storage");
    console.log(newFood);
}
  return (

        <section className="card">
          <>
            <form className="add-food" onSubmit={handleOnsubmit}>
              <input label="title" onChange={(e) => setFoodItem(e.target.value) } type="text" value={food_item} />
                      <input
                              label="Best Before Date"
                              onChange={(e) => setBestforeDate(e.target.value)}
                              type="date"
                              value={best_before_date}
                            />
                            <input
                              label="Image"
                              onChange={(e) => setImage(e.target.value)}
                              type="text"
                              value={image}
                              placeholder="Image URL"
                            />
                            <input
                              label="Quantity"
                              onChange={(e) => setQuantity(e.target.value)}
                              type="text"
                              value={quantity}
                              placeholder="Quantity"
                            />
                            <input
                              label="Energy"
                              onChange={(e) => setEnergy(e.target.value)}
                              type="text"
                              value={energy}
                              placeholder="Energy (kcal)"
                            />
                            <button type="submit">Add Food</button>
             </form>             
          </>
        </section>
      
  )
};
 
export default FoodDetails;
 