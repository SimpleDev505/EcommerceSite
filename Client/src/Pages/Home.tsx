import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Home.css";
import Sidebar from "../Components/Sidebar";
function Home() {
  const [homedarkoverlay, sethomedarkoverlay] = useState(false);
  const [sidemenu, setsidemenu] = useState(false);
  const showhomedarkoverlay = () => {
    sethomedarkoverlay(true);
  };
  const hidehomedarkoverlay = () => {
    sethomedarkoverlay(false);
  };

  const opensidemenu = () => {
    setsidemenu(true);
  };
  const closesidemenu = () => {
    setsidemenu(false);
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = sidemenu ? "hidden" : "auto";
    }
  }, [sidemenu]);
  return (
    <>
      <>{sidemenu ? <Sidebar onclosesidebar={closesidemenu} /> : null}</>
      {sidemenu ? <div className="homedark-overlay"></div> : null}
      <Navbar
        onsearchbarfocus={showhomedarkoverlay}
        onsearchbarfoucslost={hidehomedarkoverlay}
        opensidemenu={opensidemenu}
      />
      {homedarkoverlay ? <div className="homedark-overlay"></div> : null}
      <div className="offers-bg">
        <div className="offer-left"></div>
        <div className="offer-right"></div>
      </div>
      <div className="offers-grid">
        <div className="offers">
          <div className="offer-bg">
            <p>Revamp Your Home</p>
            <div className="offer-collection">
              <div className="offer-img"></div>
              <div className="offer-img"></div>
              <div className="offer-img"></div>
              <div className="offer-img"></div>
            </div>
          </div>
        </div>
        <div className="offers">
          <div className="offer-bg">
            <p>Starting At 499 | Headphones</p>
            <div className="offer-collection">
              <div className="offer-img"></div>
              <div className="offer-img"></div>
              <div className="offer-img"></div>
              <div className="offer-img"></div>
            </div>
          </div>
        </div>
        <div className="offers">
          <div className="offer-bg">
            <p>Appliances For Your Home</p>
            <div className="offer-collection">
              <div className="offer-img"></div>
              <div className="offer-img"></div>
              <div className="offer-img"></div>
              <div className="offer-img"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
