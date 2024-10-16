import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/food.png";
export default function Header() {
    const location = useLocation(); //  the current route location
    let zone ="";
    switch(location.pathname){
         case "/":
             zone = "Prepared.";
            break;
          case "/storage":
             zone = "Supply.List.";
            break;
          case "/list":
             zone = "Sypply.List.";
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
             case "/remove":
            zone = "Remove.Supply.";
            break;
         default:
             zone = "Wrong.Page.";
            break;
        
    }
    return (
        <>
          <h1>{zone}</h1>
          <img src={logo} alt="food" />
        </>
    )

}