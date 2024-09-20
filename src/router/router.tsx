import App from "../App";
import { OtherMovies } from "../components/OtherMovies";
import { ErrorPage } from "../views/errorPage";
import { LoginForm } from "../views/Login";
import { createBrowserRouter} from "react-router-dom";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: 
        <ErrorPage/>,
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/viewAll",
      element: <OtherMovies/>,
    },
  ]);