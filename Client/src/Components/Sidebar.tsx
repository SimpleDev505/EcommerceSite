import { useState } from "react";
import "../Styles/Sidebar.css";
import { AnimatePresence, motion } from "motion/react";
interface props {
  onclosesidebar?: () => void;
}

function Sidebar({ onclosesidebar }: props) {
  const [anim, setanim] = useState("open");
  const onCloseSideBar = () => {
    if (anim == "close") {
      if (onclosesidebar) {
        onclosesidebar();
      }
    }
  };

  const variant = {
    open: { left: "0" },
    close: { left: "-100vh" },
  };
  return (
    <>
      <div style={{ width: "100%", height: "100%", background: "black" }}></div>
      <AnimatePresence>
        {
          <motion.div
            key="sidebar"
            className="sidebar"
            animate={anim}
            variants={variant}
            transition={
              anim == "close"
                ? { duration: "1", ease: "circOut" }
                : { duration: "1", ease: "circIn", bounce: "1" }
            }
            onAnimationComplete={onCloseSideBar}
          >
            <button onClick={() => setanim("close")}>X</button>
            <div className="sidebar-contents">
              <div className="sidebar-heading">
                <span></span>
                <p>Hello, sign in</p>
              </div>
              <div className="sidebar-contents-grid">
                <div className="sidebar-list">
                  <h3>Trending</h3>
                  <ul>
                    <li>Best Sellers</li>
                    <li>New Releases</li>
                    <li>Movers And Shakers</li>
                  </ul>
                </div>
                <div className="sidebar-list">
                  <h3>Digital Content and Devices</h3>
                  <ul>
                    <li>Amazon miniTV - FREE entertainment</li>
                    <li>Echo & Alexa</li>
                    <li>Fire TV</li>
                    <li>Kindle E-Readers & eBooks</li>
                    <li>Audible Audiobooks</li>
                    <li>Amazon Prime Video</li>
                    <li>Amazon Prime Music</li>
                  </ul>
                </div>
                <div className="sidebar-list">
                  <h3>Shop by Category</h3>
                  <ul>
                    <li>TV, Appliances, Electronics</li>
                    <li>Men's Fashion</li>
                    <li>Women's Fashion</li>
                    <li>See all</li>
                  </ul>
                </div>
                <div className="sidebar-list">
                  <h3>Programs & Features</h3>
                  <ul>
                    <li>Gift Cards & Mobile Recharges</li>
                    <li>Amazon Launchpad</li>
                    <li>Amazon Business</li>
                    <li>See all</li>
                  </ul>
                </div>
                <div className="sidebar-list">
                  <h3>Help & Settings</h3>
                  <ul>
                    <li>Profile</li>
                    <li>Orders</li>
                    <li>Settings</li>
                    <li>Sign out</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>
  );
}

export default Sidebar;
