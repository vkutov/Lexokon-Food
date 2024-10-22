import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/food.png";

export default function Header() {
  const location = useLocation(); // Get the current route location
  let zone = "";

  // Handle dynamic routes and simplify checks
  if (location.pathname.includes("foodDetails")) {
    zone = "Food.Details.";
  } else if (location.pathname.includes("remove")) {
    zone = "Remove.Supply.";
  } else {
    switch (location.pathname) {
      case "/":
        zone = "Prepared.";
        break;
      case "/storage":
        zone = "Supply.List.";
        break;
      case "/list":
        zone = "Supply.List.";
        break;
      case "/expiring":
        zone = "Expiring.";
        break;
      case "/missing":
        zone = "Missing.";
        break;
      case "/add":
        zone = "Add.Supply.";
        break;
      default:
        zone = "Wrong.Page.";
        break;
    }
  }

  return (
    <>
      <h1>{zone}</h1>
      <img src={logo} alt="food" className="logo" />
    </>
  );
}
