import { ReactElement, useState,useContext } from "react";

import { FoodCard } from "../components/FoodCard";
import { FoodContext } from "../context/FoodProvider";


export default function MovieListPage(): ReactElement {
  const {food} = useContext(FoodContext);

  return (
    <section >
      {/* {food.map((f) => (
        <FoodCard key={f.best_before_date} movie={f} />
      ))} */}
    </section>
  );
}
