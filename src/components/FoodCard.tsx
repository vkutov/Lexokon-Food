import "../styles/Navbar.css";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import BestBefore, {IFood} from "./Home.tsx";
import { useLocation } from 'react-router-dom';
import { FoodContext } from "../context/FoodProvider";

// import foodCard from "./FoodDetails.tsx";

export const FoodCard = ({food}:any) => {
// alert(food[0].best_before_date);
const [loading, setLoading] = useState<boolean>(true);
const Navigate = useNavigate(); // direct to another page
// const [loading, setLoading] = useState<boolean>(true);
// alert(food[0].best_before_date);§1
const location = useLocation();
// alert(location.pathname);
// const supply = useContext(food);
// console.log(supply);

// if(location.pathname =="/storage"){
//     alert("test");
// }


    return(

        <section className="home-section">
      {/* <button className="random-btn" onClick={fetchFood}>
        old food
       </button> */}
      <section className="card">
        {loading ? (
          <div>Loading...</div>
        ) : food ? (
          <>
            <img src={food.image} alt={food.image} className="img-card" />
            <aside className="aside-card">

              <h2 className="drink-name">{food.best_before_date}</h2>
              <button
                onClick={() => Navigate(`/food/${food.quantity}`)}
                className="see-more-btn"
              >
                {food.best_before_date}
              </button>
            </aside>
          </>
        ) : (
          <div>No supply found.</div>
        )}
      </section>
    </section>
    )
};

export default FoodCard;