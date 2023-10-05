import { Link } from "react-router-dom";
import "./nav-bar.style.css";

const NavBar = () => {
  return (
    <nav className="top-navbar">
      <ul className="navbar-links">
        <Link className="nav-link" to={"/"}>
          Home
        </Link>
        <Link className="nav-link" to={"/about"}>
          About
        </Link>
        <Link className="nav-link" to={"/skills"}>
          Skills
        </Link>
        <Link className="nav-link" to={"/contact"}>
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
