import { useContext, useEffect, useState, FormEventHandler } from 'react';
import { FoodContext } from "../context/FoodProvider";
import { useParams, useNavigate } from 'react-router-dom';
import { IFood } from "../interfaces";

const RemoveFood = () => {
  const { food  } = useContext(FoodContext); // Get food data from context
  console.log(food);
  const { removeFood  } = useContext(FoodContext); // Get food data from context
  const { id } = useParams(); // Get id from route params
  const [detailed, setDetailed] = useState<IFood | null>(null); // Store specific food details
  const navigate = useNavigate();

  useEffect(() => {        
    // let foodArr: { id: string }[] = Object.values(food);
   // Find the specific food item by its ID
    const detail = food.find(supply => supply.id == id);
        if (detail) {
           setDetailed(detail); // Set food details
    }
  }, [id, food]);

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (detailed) {
      removeFood(detailed); // Remove food by its ID
      navigate("/storage"); // Redirect back to storage after deletion
    }
  };

  if (!detailed) {
    return <div>Loading...</div>; // Display a loading state if no details are found
  }

  return (
    <article className="card-details">
      <form className="card-info" onSubmit={handleOnSubmit}>
        <h2>Are you sure you want to remove this item?</h2>
        <img src={detailed.image || "../img/supply.png"} alt={detailed.food_item} className="img-details" />
        <h2>{detailed.food_item}</h2>
        <h3>Best before: {detailed.best_before_date}</h3>
        <h3>Quantity: {detailed.quantity}</h3>
        <aside className="form-submit">
          <button className="see-more-btn" type="submit">Remove Food</button>
        </aside>
      </form>
    </article>
  );
};

export default RemoveFood;
