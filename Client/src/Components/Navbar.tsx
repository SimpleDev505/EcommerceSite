import { Link } from "react-router";
import "../Styles/Navbar.css";
import Searchbar from "./Searchbar";
import { useEffect, useState } from "react";

interface prop {
  onsearchbarfocus?: () => void;
  onsearchbarfoucslost?: () => void;

  opensidemenu?: () => void;
}

function Navbar({
  onsearchbarfocus,
  onsearchbarfoucslost,
  opensidemenu,
}: prop) {
  const [scrolled, setscroll] = useState(false);
  const [mobiledevice, setmobiledevice] = useState(true);

  const onscrollnavbar = () => {
    const offset = window.scrollY;
    if (offset > 2) {
      setscroll(true);
    } else {
      setscroll(false);
    }

    console.log(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onscrollnavbar);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 480) {
        setmobiledevice(true);
      } else {
        setmobiledevice(false);
      }
    });
    window.addEventListener("load", () => {
      if (window.innerWidth < 480) {
        setmobiledevice(true);
      } else {
        setmobiledevice(false);
      }
    });
  });
  return (
    <>
      <div className={scrolled ? "navbar-pos scrolled" : "navbar-pos"}>
        <nav className="navbar-container">
          <div className="navbar-links">
            <Link
              to="/"
              className="navbar-linkitem"
              style={{ textDecoration: "none", maxWidth: "5em" }}
            >
              <div className="navbar-logo">
                <img src="../src/Images/Logo.png"></img>
                <span>Home</span>
              </div>
            </Link>
            <div className="navbar-location">
              <div
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "12px",
                  color: "#CCCCC1",
                  marginLeft: "12px",
                }}
              >
                Deliver To Chennai 600088
              </div>
              <span>
                <span className="navbar-location-icon"></span>
                UpdateLocation
              </span>
            </div>
            <Searchbar
              onSearchFocus={onsearchbarfocus}
              onSearchFoucsLost={onsearchbarfoucslost}
              mobiledevice={mobiledevice}
            ></Searchbar>
            <div className="navbar-lang">
              <button></button>
              <span>EN</span>
            </div>
            {mobiledevice ? null : (
              <Link
                to="/"
                className="navbar-linkitem"
                style={{ textDecoration: "none" }}
              >
                <>
                  <p
                    style={{
                      color: "white",
                      fontSize: ".75em",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Hello,SignIn&
                  </p>
                  <span>Accounts</span>
                </>
              </Link>
            )}
            {mobiledevice ? null : (
              <Link
                to="/"
                className="navbar-linkitem"
                style={{ textDecoration: "none" }}
              >
                <>
                  <p
                    style={{
                      color: "white",
                      fontSize: ".75em",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Returns
                  </p>
                  <span>&Orders</span>
                </>
              </Link>
            )}
            {
              <Link
                to="/"
                className="navbar-linkitem"
                style={{ textDecoration: "none" }}
              >
                <div className="navbar-cart">
                  <div className="navbar-cart-info">
                    <span className="navbar-cart-img"></span>
                    <span id="cart-amount">0</span>
                  </div>
                  {mobiledevice ? null : (
                    <span
                      style={{
                        fontWeight: "bold",
                        margin: "auto",
                        marginRight: "5px",
                      }}
                    >
                      Cart
                    </span>
                  )}
                </div>
              </Link>
            }
          </div>
        </nav>
        {/* Nav Banner */}
        {scrolled && mobiledevice ? null : (
          <div className="banner">
            <ul className="banner-list">
              <li onClick={opensidemenu}>
                <span className="banner-menuicon"></span>
                <span>
                  <button>All</button>
                </span>
              </li>
              <li>Fresh</li>
              <li>MXPlayer</li>
              <li>Sell</li>
              <li>BestSellers</li>
              <li>Today'sDeals</li>
              <li>Mobiles</li>
              <li>Electronics</li>
              <li>Prime</li>
              <li>CustomerService</li>
              <li>Home&Kitchen</li>
              <li>AmazonPay</li>
              <li>NewReleases</li>
              <li>Fashion</li>
              <li>Computers</li>
              <li>Car&Motorbike</li>
              <li>Books</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
