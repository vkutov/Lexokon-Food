// import starIcon from '../assets/icons8-star-50.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// api tag
interface food {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

const foodCard = () => {
  const [food, setFood] = useState<food | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const Navigate = useNavigate(); // direct to another page

  // Function to fetch a random food
  const fetchFood = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://www.thefooddb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setFood(data.drinks[0]);
    } catch (error) {
      console.error('Error fetching the food:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a food when the component mounts
  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <section className="home-section">
      <button className="random-btn" onClick={fetchFood}>
        Random food
      </button>
      <section className="card">
        {loading ? (
          <div>Loading...</div>
        ) : food ? (
          <>
            <img src={food.strDrinkThumb} alt={food.strDrink} className="img-card" />
            <aside className="aside-card">

              <h2 className="drink-name">{food.strDrink}</h2>
              <button
                onClick={() => Navigate(`/food/${food.idDrink}`)}
                className="see-more-btn"
              >
                See more
              </button>
            </aside>
          </>
        ) : (
          <div>No food found.</div>
        )}
      </section>
    </section>
  );
};

export default foodCard;
