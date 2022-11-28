import React from "react";
import { storeItems } from "../../../assets/data/data";
import {
  MainDiv,
  CardDiv,
  CardImage,
  CardName,
  CardPrice,
  CardImageDiv,
  CardFeatureDiv,
  Img
} from './main.styles.jsx'

const Main = () => {
    const currency = "$"
  //   const { logo, setLogo } = useState(false);

  return (
    <MainDiv>
      {storeItems.map((item, i) => {
        const { id, image, name, price } = item;
        return(
        <CardDiv
          key={`${i}${id}`}
          className="images"
          onClick={(e) => {
            //   setLogo(true);
          }}
        >
          <CardImageDiv>
          <CardImage className="image"><Img url={image} altName="product Image" /></CardImage>
          </CardImageDiv>
          <CardFeatureDiv>
          <CardName className="name">{name}</CardName>
          <CardPrice className="price">{currency}{price}</CardPrice>
          </CardFeatureDiv>
          
        </CardDiv>)
      })}
    </MainDiv>
  );
};

export default Main;
