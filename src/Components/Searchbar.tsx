import { useEffect, useState } from "react";
import "../Styles/Searchbar.css";
import DropDown from "./DropDown";
import { searchbarMenuItems } from "../Pages/Menus/SearchbarMenu";

interface prop {
  onSearchFocus?: () => void;
  onSearchFoucsLost?: () => void;
}

function Searchbar({ onSearchFocus, onSearchFoucsLost }: prop) {
  const [isfocused, Setisfocused] = useState(false);
  const [isbfocused, Setisbfocused] = useState(false);

  useEffect(() => {
    if (onSearchFocus && onSearchFoucsLost) {
      if (isfocused == true) {
        onSearchFocus();
      } else {
        onSearchFoucsLost();
      }
    }
  }, [isfocused]);

  const setborderonfocus = () => {
    Setisfocused(true);
  };
  const setborderonloosefocus = () => {
    Setisfocused(false);
  };

  const setbuttonfocus = () => {
    Setisbfocused(true);
  };
  const setbuttonloosefocus = () => {
    Setisbfocused(false);
  };
  return (
    <>
      <div className="searchbar">
        <div
          className={
            isfocused
              ? "searchbar-container focus-border"
              : "searchbar-container"
          }
        >
          <DropDown heading="All" items={searchbarMenuItems}></DropDown>
          <input
            type="text"
            placeholder="Search.."
            autoFocus
            onFocus={setborderonfocus}
            onBlur={setborderonloosefocus}
            style={{ border: "none" }}
          ></input>
          <button
            className={
              isbfocused ? "searchbar-button focus-border" : "searchbar-button"
            }
            onFocus={setbuttonfocus}
            onBlur={setbuttonloosefocus}
          ></button>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
