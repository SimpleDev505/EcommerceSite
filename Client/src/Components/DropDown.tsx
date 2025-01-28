import React, { useState } from "react";
import "../Styles/DropDown.css";
interface MenuItem {
  label: string;
  onClick?: () => void;
  subItems?: MenuItem[];
}

interface DropdownProps {
  heading: string;
  items: MenuItem[];
  backgroundType?: string;
  dropdownbuttonbg?: string;
  dropdownbutton_border?: string;
  border_radius?: string;
  heading_color?: string;
  width?: string;
  height?: string;
  scrollable?: boolean;
  list_height?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  border_radius = "0.3em 0 0 0.3em",
  dropdownbutton_border = "none",
  dropdownbuttonbg = "rgb(189, 189, 189)",
  backgroundType = "white",
  heading,
  items,
  heading_color = " rgb(91, 91, 91)",
  width = "fit-content",
  height = "100%",
  scrollable = false,
  list_height = "fit-content",
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);
  const [dropdownlabel, setdropdownlabel] = useState(heading);

  const handleItemClick = (item: MenuItem) => {
    // item.onClick && item.onClick();

    // console.log(item.label);
    setdropdownlabel(item.label);
    setOpen(false);
  };

  const handleHover = (item: MenuItem) => {
    setHoveredItem(item);
  };

  return (
    <div
      className={`dropdown-container ${open ? "open" : ""}`}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <button
        className="dropdown-toggle"
        onMouseEnter={() => setOpen(true)}
        style={{
          backgroundColor: `${dropdownbuttonbg}`,
          border: `${dropdownbutton_border.trim()}`,
          borderRadius: `${border_radius}`,
          color: `${heading_color}`,
          width: `${width}`,
          height: `${height}`,
        }}
      >
        {dropdownlabel}
      </button>

      {open && (
        <ul
          className={scrollable ? "dropdown-menu scrollable" : "dropdown-menu"}
          style={{ height: list_height }}
          onMouseLeave={() => setOpen(false)}
        >
          {items.map((item, index) => (
            <li
              key={index}
              className="dropdown-item"
              style={{
                backgroundColor: `${backgroundType}`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#1967D2")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = `${backgroundType}`)
              }
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleItemClick(item);
                }}
                onMouseEnter={() => handleHover(item)}
                className="item-label"
              >
                {item.label}
                {item.subItems && <div className="arrow" />}
              </div>

              {hoveredItem === item && item.subItems && (
                <ul className="submenu">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} onClick={() => handleItemClick(subItem)}>
                      {subItem.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
