import { NavLink } from "react-router-dom";
import { Search } from "./Search";

export const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">Genre</li>
        <li className="navbar-item">Country</li>
        <li className="navbar-item">
          <Search></Search>
        </li>
        <li className="navbar-item">Movies</li>
        <li className="navbar-item">Series</li>
        <li className="navbar-item">Animation</li>
        <li className="navbar-item">
          <NavLink to='/login'>Login/SingUp</NavLink>
        </li>
        <li className="navbar-item"><i className="fa-solid fa-bell"></i></li>
      </ul>
    </nav>
  );
};
