import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import { Home } from "./pages/Home";
import FoodList from "./pages/FoodList";
import Missing from "./pages/Missing";
import Expiring from "./pages/Expiring";
import Add from "./pages/Add";
import FoodDetails from "./pages/FoodDetails.tsx";
import RemoveFood  from "./pages/RemoveFood.tsx";
import { NotFound } from "./pages/NotFound.tsx";




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
      {
        path: "/add",
        element: <Add />,
      },
       {
        path: "/foodDetails/:id",
        element: <FoodDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
     {
        path: "/remove/:id",
        element: <RemoveFood />,
      },
   
     ],
 
   },
]);
