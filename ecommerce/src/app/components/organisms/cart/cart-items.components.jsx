import React from "react";
import bull from "../../../assets/img/Image.jpg";
import {
  ItemsDiv,
  ImageDiv,
  TextHead,
  TextSubHead,
  CartPrice,
  Sized,
  Color,
  Click,
  SubDiv1,
  SubDiv2,
  SubDiv3,
  SubDiv4,
  SubDiv5,
  HoverClick,
  ButtonPlus,
  Number,
  ButtonMinus,
  SubRightDiv,
  IncrementButton,
  DecrementButton,
  GeneralDiv,
  Img,
  CardImage,
  SubDivi,
} from "./cart-items.styles";

const CartItems = () => {
  return (
    <GeneralDiv>
      <ItemsDiv>
        <SubDiv1>
          <TextHead>Apollo</TextHead>
          <TextSubHead>Running short</TextSubHead>
        </SubDiv1>
        <SubDiv2>
          <CartPrice>$50.00</CartPrice>
        </SubDiv2>
        <SubDiv3>
          <Sized>SIZE:</Sized>
          <SubDivi>
            <HoverClick>XS</HoverClick>
            <HoverClick>S</HoverClick>
            <HoverClick>M</HoverClick>
            <HoverClick>l</HoverClick>
          </SubDivi>
        </SubDiv3>
        <SubDiv5>
          <Color>COLOUR:</Color>
          <SubDivi>
            <Click id="color1"></Click>
            <Click id="color2"></Click>
            <Click id="color3"></Click>
          </SubDivi>
        </SubDiv5>
      </ItemsDiv>
      <ImageDiv>
        {/* <Click></Click> */}
        <SubRightDiv>
          <ButtonPlus>
            <IncrementButton>+</IncrementButton>
          </ButtonPlus>
          <Number>
            <span>1</span>
          </Number>
          <ButtonMinus>
            <DecrementButton>-</DecrementButton>
          </ButtonMinus>
        </SubRightDiv>
        <>
          <CardImage>
            <Img url={bull} altName="product Image" />
          </CardImage>
        </>
      </ImageDiv>
    </GeneralDiv>
  );
};

export default CartItems;
