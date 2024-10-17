import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import { Home } from "./pages/Home";
import FoodList from "./pages/FoodList";
import Missing from "./pages/Missing";
import Expiring from "./pages/Expiring";


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
      {
        path: "/expiring",
        element: <Expiring />,
      },
      {
        path: "/missing",
        element: <Missing />,
      },
     ],
   },
]);
