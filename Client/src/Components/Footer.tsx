import { Link } from "react-router";
import "../Styles/Footer.css";
import Dropdown from "./DropDown";
import { FooterMenuItems } from "../Pages/Menus/FooterMenu";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="backtotop">Back To Top</div>
        <div className="footer-grid">
          <div>
            <div className="footer-info-grid">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                {" "}
                Get to know us
              </Link>
              <div>About</div>
              <div>Careers</div>
              <div>Press Releases</div>
              <div>Amazon Science</div>
            </div>
          </div>
          <div>
            <div className="footer-info-grid">
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "white", top: "0" }}
              >
                {" "}
                Connect with us
              </Link>
              <div>Facebook</div>
              <div>Twitter</div>
              <div>Instagram</div>
            </div>
          </div>
          <div>
            <div className="footer-info-grid">
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "white", top: "0" }}
              >
                {" "}
                Make Money with Us
              </Link>
              <div>Sell on Amazon</div>
              <div>Sell under Amazon Accelerator</div>
              <div>Protect and Build Your Brand</div>
              <div>Amazon Global Selling</div>
              <div>Supply to Amazon</div>
              <div>Become an Affiliate</div>
              <div>Fulfillment by Amazon</div>
              <div>Advertise Your Products</div>
              <div>Amazon Pay on Merchants</div>
            </div>
          </div>
          <div>
            <div className="footer-info-grid">
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "white", top: "0" }}
              >
                {" "}
                Let Us Help You
              </Link>
              <div>Your Account</div>
              <div>Returns Centre</div>
              <div>Recalls and Product Safety Alerts</div>
              <div>100% Purchase Protection</div>
              <div>Amazon App Download</div>
              <div>Help</div>
            </div>
          </div>
        </div>
        <div className="footer-logo">
          <span className="footer-logo-img"></span>
          <Dropdown
            dropdownbutton_border="1px solid grey"
            dropdownbuttonbg="transparent"
            heading="English"
            heading_color="#DDD"
            border_radius="none"
            items={FooterMenuItems}
          ></Dropdown>
        </div>
      </div>
      <div className="footer-end">
        <div
          className="footer-end-item"
          style={{ color: "white", fontSize: "12px" }}
        >
          <p>AbeBooks</p>
          <ul style={{ listStyle: "none", color: "grey", width: "5.5em" }}>
            <li>Books art & collectibles</li>
          </ul>
        </div>

        <div
          className="footer-end-item"
          style={{ color: "white", fontSize: "12px" }}
        >
          <p>Web Services</p>
          <ul style={{ listStyle: "none", color: "grey", width: "7em" }}>
            <li>Scalable Cloud Computing Services</li>
          </ul>
        </div>

        <div
          className="footer-end-item"
          style={{ color: "white", fontSize: "12px", width: "5.5em" }}
        >
          <p>Audible</p>
          <ul style={{ listStyle: "none", color: "grey" }}>
            <li>Download Audio Books</li>
          </ul>
        </div>

        <div
          className="footer-end-item"
          style={{ color: "white", fontSize: "12px" }}
        >
          <p>IMDb</p>
          <ul style={{ listStyle: "none", color: "grey", width: "5.5em" }}>
            <li>Movies TV & Celebrities</li>
          </ul>
        </div>

        <div
          className="footer-end-item"
          style={{ color: "white", fontSize: "12px" }}
        >
          <p>Business</p>
          <ul style={{ listStyle: "none", color: "grey", width: "5.5em" }}>
            <li>Everything For Your Business</li>
          </ul>
        </div>

        <div
          className="footer-end-item"
          style={{ color: "white", fontSize: "12px" }}
        >
          <p>Prime Now</p>
          <ul style={{ listStyle: "none", color: "grey", width: "7em" }}>
            <li>2-Hour Delivery on Everyday Items</li>
          </ul>
        </div>

        <div
          className="footer-end-item"
          style={{ color: "white", fontSize: "12px" }}
        >
          <p>Music</p>
          <ul style={{ listStyle: "none", color: "grey", width: "11em" }}>
            <li>100 million songs ad-free</li>
            <li>Over 15 million podcast episodes</li>
          </ul>
        </div>
      </div>
      <div className="footer-CR">
        <div className="footer-CR-cnt">
          <p>Conditions of Use & Sale</p>
          <p>Privacy Notice</p>
          <p>Interest-Based Ads</p>
        </div>
        <span>© 1996-2025, AtoZ.com Inc. or its affiliates</span>
      </div>
    </>
  );
}

export default Footer;
