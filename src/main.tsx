import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LoginForm } from "./Login.tsx";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { OtherMovies } from "./components/OtherMovies.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div>
        {" "}
        <h2> '“Straight ahead you can't go very far.”' </h2>
        <p> That is a Little Prince quote, this is a 404 error 😅</p>
      </div>
    ),
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
