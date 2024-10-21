import "../styles/FoodDetails.css";
import { FormEventHandler, useContext, useEffect, useState } from "react";
import { FoodContext } from "../context/FoodProvider";
import "../styles/Navbar.css";
import { IFood } from "../interfaces";
import { useNavigate } from "react-router-dom";

export const FoodDetails = ({ food }: { food: IFood }) => {
  const navigate = useNavigate();
  const { addFood } = useContext(FoodContext);

  // State variables
  const [id, setId] = useState<string>(food.id);
  const [action, setAction] = useState<string>("Add food");
  const [food_item, setFoodItem] = useState<string>(food.food_item);
  const [best_before_date, setBestforeDate] = useState<string>(food.best_before_date);
  const [image, setImage] = useState<string>(food.image);
  const [quantity, setQuantity] = useState<string>(food.quantity);
  const [energy, setEnergy] = useState<string>(food.energy);

  // useEffect to set action based on whether we are updating or adding
  useEffect(() => {
    if (food.food_item !== "") {
      setAction("Update food");
    } else {
      setAction("Add food");
    }
  }, [food.food_item]);

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
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
  };

  return (
    <article className="card-details">
      <form className="card-info" onSubmit={handleOnSubmit}>
        <img src={image}  alt={food_item}  className="img-details"/>
        <input  
          onChange={(e) => setFoodItem(e.target.value)} 
          type="text" 
          value={food_item} 
          placeholder="Item Name"
        />
        <input 
          onChange={(e) => setBestforeDate(e.target.value)} 
          type="date" 
          value={best_before_date} 
          placeholder="Best before" 
        />
        <input 
          onChange={(e) => setImage(e.target.value)} 
          type="text" 
          value={image} 
          placeholder="Image URL" 
        />
        <input 
          onChange={(e) => setQuantity(e.target.value)} 
          type="text" 
          value={quantity} 
          placeholder="Quantity" 
        />
        <input 
          onChange={(e) => setEnergy(e.target.value)} 
          type="text" 
          value={energy} 
          placeholder="Energy (kcal)" 
        />
        <aside className="form-submit">
          <button className="see-more-btn" type="submit">{action}</button>
        </aside>
      </form>
    </article>
  );
};

export default FoodDetails;