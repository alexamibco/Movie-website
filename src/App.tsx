import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { LoginForm } from "./views/Login";
import { OtherMovies } from "./components/OtherMovies";
import { ErrorPage } from "./views/errorPage";

//import { UserContextProvider } from "./context/UserContextProvider.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<LoginForm></LoginForm>}></Route>
        <Route path="/viewAll" element={<OtherMovies></OtherMovies>}></Route>
        <Route path="/*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
