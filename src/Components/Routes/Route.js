import { createBrowserRouter } from "react-router-dom";
import Screen from "../../Layout/Screen";
import Home from "../Home/Home";
import HomeMain from "../HomeMain/HomeMain";
// import HomeMain from "../HomeMain/HomeMain";
import Login from "../Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Screen></Screen>,
    children: [
      {
        path: "/",
        element: <HomeMain></HomeMain>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
