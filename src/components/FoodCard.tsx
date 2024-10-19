import "../styles/FoodList.css";
import { useNavigate } from "react-router-dom";
import { IFood } from "../interfaces";
 
 
export const FoodCard = ({ food }: { food: IFood })  => {
  const Navigate = useNavigate();
 
  return (
      <section className="home-section">
      {food &&
        <section className="card">
          <>
            <img src={food.image} alt={food.food_item} className="img-card" />
            <aside className="aside-card">
              <h2 >Qty: {food.quantity}</h2>
              <h2 >Best before: {food.best_before_date}</h2>
              <button
                onClick={() => Navigate(`/food/${food.id}`)}
                className="see-more-btn"
              >
                {food.food_item}
              </button>
            </aside>
          </>
        </section>
      }
    </section>
  )
};
 
export default FoodCard;
 