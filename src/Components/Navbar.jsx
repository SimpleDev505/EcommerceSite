import { Link } from "react-router";
import "../Styles/Navbar.css";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-links">
          <Link to="/" className="navbar-linkitem">
            <div className="navbar-logo">
              <img src="../src/Images/Logo.png" width="50px"></img>
              <span>Home</span>
            </div>
          </Link>
          <Searchbar></Searchbar>
          <Link to="/" className="navbar-linkitem">
            <>
              <h style={{ fontSize: ".8em" }}>SignIn&</h>
              <br />
              <p style={{ fontWeight: "bold" }}>Accounts</p>
            </>
          </Link>
          <Link to="/" className="navbar-linkitem">
            <>
              <h style={{ fontSize: ".8em" }}>Returns&</h>
              <br />
              <p style={{ fontWeight: "bold" }}>Orders</p>
            </>
          </Link>
          <Link to="/" className="navbar-linkitem">
            <div className="navbar-cart">
              <img src="../src/Images/cart_icon.png"></img>
              <span style={{ fontWeight: "bold", margin: "5px" }}>Cart</span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
