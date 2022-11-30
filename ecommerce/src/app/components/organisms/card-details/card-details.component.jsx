import React from "react";
import sweat from "../../../assets/img/Image.jpg";
import {
  CartButton,
  ColorBtn,
  ColorButton,
  ColorTextDiv,
  ContainerLeft,
  ContainerRight,
  DetailHead,
  DetailsButton,
  DetailsSpec,
  DetailsContainer,
  DetailsDescription,
  DetailsHead,
  DetailsSubhead,
  DetailsText,
  DetailSubhead,
  DetailText,
  LargeImage,
  LargeImg,
  Price,
  PriceText,
  SizeBtn,
  Sizes,
  SizeTextDiv,
  SmallImage,
  SmallImages,
  SmallImg,
  ColorsBtn,
  SizeBtns,
  DescSpan,
} from "./card-details.styles";

const CardDetails = () => {
  return (
    <DetailsContainer>
      <ContainerLeft>
        <SmallImages>
          <SmallImage>
            <SmallImg url={sweat} />
          </SmallImage>
          <SmallImage>
            <SmallImg url={sweat} />
          </SmallImage>
          <SmallImage>
            <SmallImg url={sweat} />
          </SmallImage>
        </SmallImages>
        <LargeImage>
          <LargeImg url={sweat} />
        </LargeImage>
      </ContainerLeft>
      <ContainerRight>
        <DetailsText>
          <DetailsHead>
            <DetailHead>Apollo</DetailHead>
          </DetailsHead>
          <DetailsSubhead>
            <DetailSubhead>Running Short</DetailSubhead>
          </DetailsSubhead>
        </DetailsText>
        <DetailsSpec>
          <SizeTextDiv>
            <DetailText>SIZE:</DetailText>
          </SizeTextDiv>
          <Sizes>
            <SizeBtns>
              <SizeBtn>XS</SizeBtn>
            </SizeBtns>
            <SizeBtns>
              <SizeBtn>S</SizeBtn>
            </SizeBtns>
            <SizeBtns>
              <SizeBtn>M</SizeBtn>
            </SizeBtns>
            <SizeBtns>
              <SizeBtn>L</SizeBtn>
            </SizeBtns>
          </Sizes>
        </DetailsSpec>
        <DetailsSpec>
          <ColorTextDiv>
            <DetailText>COLOR:</DetailText>
          </ColorTextDiv>
          <ColorButton>
            <ColorsBtn>
              <ColorBtn id="color-1"></ColorBtn>
            </ColorsBtn>
            <ColorsBtn>
              <ColorBtn id="color-2"></ColorBtn>
            </ColorsBtn>
            <ColorsBtn>
              <ColorBtn id="color-3"></ColorBtn>
            </ColorsBtn>
          </ColorButton>
        </DetailsSpec>
        <DetailsSpec>
          <PriceText>
            <DetailText>PRICE:</DetailText>
          </PriceText>
          <Price>
            <span>$</span>50<span>.00</span>
          </Price>
        </DetailsSpec>
        <DetailsButton>
          <CartButton>ADD TO CART</CartButton>
        </DetailsButton>
        <DetailsDescription>
          <DescSpan>
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands
          </DescSpan>
        </DetailsDescription>
      </ContainerRight>
    </DetailsContainer>
  );
};

export default CardDetails;
