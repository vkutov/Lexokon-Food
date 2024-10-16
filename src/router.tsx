import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import { Home } from "./pages/Home";

 import FoodList from "./pages/FoodList";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      // home page
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/storage",
        element: <FoodList />,
      },
      
   
     ],
   },
]);
