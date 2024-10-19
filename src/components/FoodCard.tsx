import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import { IFood } from "../interfaces";
 
 
export const FoodCard = ({ food }: { food: IFood })  => {
  const Navigate = useNavigate();
 
  return (
    <section className="home-section">
      {food &&
        <section className="card">
          <>
            <img src={food.image} alt={food.image} className="img-card" />
            <aside className="aside-card">
 
              <h2 className="drink-name">{food.best_before_date}</h2>
              <button
                onClick={() => Navigate(`/food/${food.food_item}`)}
                className="see-more-btn"
              >
                {food.best_before_date}
              </button>
            </aside>
          </>
        </section>
      }
    </section>
  )
};
 
export default FoodCard;
 