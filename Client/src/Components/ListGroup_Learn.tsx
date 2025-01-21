import { useState } from "react";

//inputs to componets <listgroup heading =  or items array = >
interface props {
  items: string[];
  heading: string;
}

function Listgroup({ items, heading }: props) {
  //---------------------
  // {items.map(item => <li key={item.id or item -> name itself}>{item}</li>)}  -> create element
  //   on fly or or in need
  // by this {condition to run}
  //key ->->-> is used to track different elements when
  // when have to create,delete
  // key can be used to delete item
  //---------------------
  items.forEach((item, index) => {
    if (item == "first") {
      return (items[index] = "0000");
    } else {
      return (items[index] = item);
    }
  });

  //let selectedIndex = -1; //default none
  //useState;               //hook to let varible change state or values at runtime
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0] -> value
  //arr[1] -> update function
  //const handleClick = (event: MouseEvent) => console.log(event.target); //onClick={handleClick}

  return (
    <>
      <h1>{heading}</h1>
      {}
      <ul className="list-group">
        {items.map((item, index, totalarray) => (
          <li
            className={
              selectedIndex === index ? "list-group selected" : "list-group"
            }
            key={item + Math.random()}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
    //onClick={(event) => console.log(item, index, event.target)
    //event -> .target or .currenttarget -> full <li> inside </li>
    //event -> positions x y , movement x y, page x y
    //event -> .shiftkey while click with hold shift
    //event -> .viwe -> current windows prop

    // '<>' and '</>' -> fragment : which is instead of
    //    additional div to
    //    have multiple lines
    //    of elemets
  );
}

export default Listgroup;
