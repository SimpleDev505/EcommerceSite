import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Home.css";
import Sidebar from "../Components/Sidebar";
import TopOffers from "../Components/TopOffers";
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
      <TopOffers />
    </>
  );
}

export default Home;
