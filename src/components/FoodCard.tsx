import "../styles/FoodList.css";
import { useNavigate, Link } from "react-router-dom";
import { IFood } from "../interfaces";

export const FoodCard = ({ food }: { food: IFood }) => {
  const navigate = useNavigate();

  return (
    <section className="card">
      {/* Correct the `Link` to use curly braces for JSX */}
      <Link to={`/remove/${food.id}`}>
        <img src="/src/assets/delete.png" alt="Delete food item" className="img-delete" />
      </Link>

      {food && (
        <>
          {/* Display the food image */}
          <img src={food.image} alt={food.food_item} className="img-card" />

          {/* Display food details */}
          <aside className="aside-card">
            <h2>Qty: {food.quantity}</h2>
            <h2>Best before:</h2>
            <h2>{food.best_before_date}</h2>

            {/* Button to navigate to detailed food information */}
            <button
              onClick={() => navigate(`/foodDetails/${food.id}`)}
              className="see-more-btn"
            >
              {food.food_item}
            </button>
          </aside>
        </>
      )}
    </section>
  );
};

export default FoodCard;
