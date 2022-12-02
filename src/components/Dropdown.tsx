import React, { useState } from "react";
import "./Dropdown.css";

const data = [
  { id: "0", title: "Notebook" },
  { id: "1", title: "Pencil" },
  { id: "2", title: "Apple" },
  { id: "3", title: "Orange" },
  { id: "4", title: "Keyboard" },
  { id: "5", title: "TV" },
];

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleCreateOrder = () => {};

  const handleItemClick = (id: any) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedItem
            ? items?.find((item: any) => item?.id === selectedItem)?.title
            : "Select product"}
          <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
        </div>
        <div className={`dropdown-body ${isOpen && "open"}`}>
          {items.map((item) => (
            <div
              className="dropdown-item"
              onClick={(e: any) => handleItemClick(e.target.id)}
              id={item.id}
            >
              <span
                className={`dropdown-item-dot ${
                  item.id === selectedItem && "selected"
                }`}
              >
                •{" "}
              </span>
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <button className={"create-order-button"} onClick={handleCreateOrder}>
        Create Order
      </button>
    </>
  );
};

export default Dropdown;
