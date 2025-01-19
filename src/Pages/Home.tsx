import { useState } from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Home.css";
import Sidebar from "../Components/Sidebar";
function Home() {
  const [darkoverlay, setdarkoverlay] = useState(false);
  const [sidemenu, setsidemenu] = useState(false);
  const showdarkoverlay = () => {
    setdarkoverlay(true);
  };
  const hidedarkoverlay = () => {
    setdarkoverlay(false);
  };

  const opensidemenu = () => {
    setsidemenu(true);
  };
  const closesidemenu = () => {
    setsidemenu(false);
  };
  return (
    <>
      <>{sidemenu ? <Sidebar onclosesidebar={closesidemenu} /> : null}</>
      <Navbar
        onsearchbarfocus={showdarkoverlay}
        onsearchbarfoucslost={hidedarkoverlay}
        opensidemenu={opensidemenu}
      />
      <div className={darkoverlay ? "dark-overlay" : ""}></div>
      <div className="offers-bg"></div>
    </>
  );
}

export default Home;
