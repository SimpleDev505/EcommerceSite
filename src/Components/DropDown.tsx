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
}

const Dropdown: React.FC<DropdownProps> = ({ heading, items }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);

  const handleItemClick = (item: MenuItem) => {
    item.onClick && item.onClick();
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
      <button className="dropdown-toggle" onMouseEnter={() => setOpen(true)}>
        {heading}
      </button>

      {open && (
        <ul className="dropdown-menu" onMouseLeave={() => setOpen(false)}>
          {items.map((item, index) => (
            <li key={index} className="dropdown-item">
              <div
                onClick={() => handleItemClick(item)}
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
