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
              <span style={{ fontSize: ".8em" }}>SignIn&</span>
              <br />
              <span style={{ fontWeight: "bold" }}>Accounts</span>
            </>
          </Link>
          <Link to="/" className="navbar-linkitem">
            <>
              <span style={{ fontSize: ".8em" }}>Returns&</span>
              <br />
              <span style={{ fontWeight: "bold" }}>Orders</span>
            </>
          </Link>
          <Link to="/" className="navbar-linkitem">
            <div className="navbar-cart">
              <div className="navbar-cart-info">
                <span className="navbar-cart-img"></span>
                <span id="cart-amount">0</span>
              </div>
              <span style={{ fontWeight: "bold", margin: "5px" }}>Cart</span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
