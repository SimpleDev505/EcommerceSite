import { Link } from "react-router";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/" className="navbar-linkitem">
          Home
        </Link>
        <Link to="/" className="navbar-linkitem">
          Browse
        </Link>
        <Link to="/" className="navbar-linkitem">
          SignIn
        </Link>
        <Link to="/" className="navbar-linkitem">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
