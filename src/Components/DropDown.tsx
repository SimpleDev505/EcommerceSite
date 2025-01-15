import { useState } from "react";
import "../Styles/DropDown.css";
interface props {
  items?: string[];
  heading?: string;
}
function DropDown({ items, heading }: props) {
  const [isopen, SetOpen] = useState(false);
  const handleOpen = () => {
    SetOpen(!isopen);
  };

  return (
    <div className="dropdown">
      <button onClick={handleOpen} className="dropdown-button">
        <div className="dropdown-heading">
          <div style={{ color: "grey", textAlign: "center", margin: "auto" }}>
            {heading}
          </div>
          <div className="dropdown-icon"></div>
        </div>
      </button>
      {/* {isopen ? {} : null}
      {isopen ? <div>Is Open</div> : <div>Is Closed</div>} */}
    </div>
  );
}

export default DropDown;
