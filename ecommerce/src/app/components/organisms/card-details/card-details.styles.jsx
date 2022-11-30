import styled from "styled-components";
import Image from "../../../components/atoms/image/image.components";
import Button from "../../../components/atoms/button/button.component";
import Text, { Heading, Span } from "../../atoms/typography";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: Raleway;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LargeImage = styled.div`
  margin: 2rem;
`;
export const LargeImg = styled(Image)``;

export const SmallImages = styled.div``;
export const SmallImage = styled.div`
  margin: 2rem;
`;

export const SmallImg = styled(Image)`
  width: 100px;
  height: 100px;
`;
export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 8%;
`;
export const DetailsText = styled.div``;
export const DetailsHead = styled.div`
  align-items: left;
`;
export const DetailHead = styled(Heading)``;
export const DetailsSubhead = styled.div``;
export const DetailSubhead = styled(Heading)`
  font-weight: 400;
`;

export const DetailsSpec = styled.div`
  padding: 0.5rem 0;
`;

export const SizeTextDiv = styled.div``;

export const DetailText = styled(Text)`
  font-weight: 700;
  font-size: 18px;
`;

export const SizeBtns = styled.div`
  margin-right: 0.5rem;
`;

export const SizeBtn = styled(Button)`
  background-color: #fff;
  color: #000;
  width: 63px;
  height: 45px;
  border: 1px solid #1d1f22;

  &:hover{
    background-color: transparent;
    border: 1px solid #1d1f22;
  }
`;

export const Sizes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ColorTextDiv = styled.div``;

// export const ColorText = styled(Text)``;

export const ColorButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  #color-1 {
    background-color: #d3d2d5;
  }

  #color-2 {
    background-color: #2b2b2b;
  }

  #color-3 {
    background-color: #0f6450;
  }
`;

export const ColorsBtn = styled.div`
  margin-right: 0.5rem;
`;

export const ColorBtn = styled(Button)`
  width: 32px;
  height: 45px;

  &:hover {
    border: 1px solid #5ece7b;
  }
`;

export const PriceText = styled.div``;

// export const PriceTextDiv = styled(Text)``;

export const Price = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
`;

export const DetailsButton = styled.div`
  margin: 1.5rem 0 2.5rem 0;
`;

export const CartButton = styled(Button)`
  background-color: #5ece7b;
  width: 292px;
  height: 52px;
  padding: 16px 32px;
`;

export const DetailsDescription = styled.div`
width: 292px;
height: 103px;
`;

export const DescSpan = styled(Span)`
font-family: Roboto;
font-weight: 400;
font-size: 16px;
line-height: 25.59px;
`;

