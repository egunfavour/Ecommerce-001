
import React from "react";
import { storeItems } from "../../../assets/data/data";

const Main = () => {
    const currency = "$"
  //   const { logo, setLogo } = useState(false);

  return (
    <div>
      {storeItems.map((item, i) => {
        const { id, image, name, price } = item;
        return(
        <div
          key={`${i}${id}`}
          className="images"
          onClick={(e) => {
            //   setLogo(true);
          }}
        >
          <div className="image"> {image}</div>
          <div className="name">{name}</div>
          <div className="price">{currency}{price}</div>
        </div>)
      })}
    </div>
  );
};

export default Main;
