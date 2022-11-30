import React from "react";
import { cartItems } from "../../../assets/data/data";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import bull from "../../../assets/img/Image.jpg";
import {
  ItemsDiv,
  ImageDiv,
  ButtonPlus,
  Number,
  ButtonMinus,
  SubRightDiv,
  GeneralDiv,
  Img,
  CardImage,
  SubDivi,
  DetailsText,
  DetailsHead,
  DetailHead,
  DetailsSubhead,
  DetailSubhead,
  DetailsSpec,
  SizeTextDiv,
  DetailText,
  Sizes,
  SizeBtns,
  SizeBtn,
  ColorTextDiv,
  ColorButton,
  ColorsBtn,
  ColorBtn,
  Price,
  Horizon,
  HorizonRule,
  ImgDiv,
  ArrowDiv,
  Arrow,
  ActionButton,
} from "./cart-items.styles";

const CartItems = () => {
  return (
    <div>
      <Horizon>
        <HorizonRule />
      </Horizon>
      {cartItems.map((item, i) => {
        const {
          id,
          image,
          brand,
          name,
          price,
          size1,
          size2,
          size3,
          size4,
          color1,
          color2,
          color3,
          qty,
        } = item;
        return (
          <div>
            <GeneralDiv key={`${i}${id}`} className="item">
              <ItemsDiv>
                <DetailsText>
                  <DetailsHead>
                    <DetailHead>{brand}</DetailHead>
                  </DetailsHead>
                  <DetailsSubhead>
                    <DetailSubhead>{name}</DetailSubhead>
                  </DetailsSubhead>
                </DetailsText>
                <DetailsSpec>
                  <Price>
                    <span>
                      $<span>{price}</span>
                    </span>
                  </Price>
                </DetailsSpec>
                <DetailsSpec>
                  <SizeTextDiv>
                    <DetailText>SIZE:</DetailText>
                  </SizeTextDiv>
                  <Sizes>
                    <SizeBtns>
                      <SizeBtn>{size1}</SizeBtn>
                    </SizeBtns>
                    <SizeBtns>
                      <SizeBtn>{size2}</SizeBtn>
                    </SizeBtns>
                    <SizeBtns>
                      <SizeBtn>{size3}</SizeBtn>
                    </SizeBtns>
                    <SizeBtns>
                      <SizeBtn>{size4}</SizeBtn>
                    </SizeBtns>
                  </Sizes>
                </DetailsSpec>
                <DetailsSpec>
                  <ColorTextDiv>
                    <DetailText>COLOR:</DetailText>
                  </ColorTextDiv>
                  <ColorButton>
                    <ColorsBtn>
                      <ColorBtn
                        id="color-1"
                        backgroundColor={color1}
                      ></ColorBtn>
                    </ColorsBtn>
                    <ColorsBtn>
                      <ColorBtn
                        id="color-2"
                        backgroundColor={color2}
                      ></ColorBtn>
                    </ColorsBtn>
                    <ColorsBtn>
                      <ColorBtn
                        id="color-3"
                        backgroundColor={color3}
                      ></ColorBtn>
                    </ColorsBtn>
                  </ColorButton>
                </DetailsSpec>
              </ItemsDiv>
              <ImageDiv>
                {/* <Click></Click> */}
                <SubRightDiv>
                  <ButtonPlus>
                    <ActionButton>+</ActionButton>
                  </ButtonPlus>
                  <Number>
                    <span>{qty}</span>
                  </Number>
                  <ButtonMinus>
                    <ActionButton>-</ActionButton>
                  </ButtonMinus>
                </SubRightDiv>
                <ImgDiv>
                  <CardImage>
                    <Img url={image} altName="item Image" />
                  </CardImage>
                  <ArrowDiv>
                    <Arrow id="arrow--left">
                      <IoIosArrowBack />
                    </Arrow>
                    <Arrow id="arrow--right">
                      <IoIosArrowForward />
                    </Arrow>
                  </ArrowDiv>
                </ImgDiv>
              </ImageDiv>
            </GeneralDiv>
            <Horizon>
              <HorizonRule />
            </Horizon>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
