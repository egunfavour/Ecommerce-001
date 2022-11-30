import Text, { Heading } from "../../atoms/typography";
import styled from "styled-components";
import Button from "../../atoms/button/button.component";
import Image from "../../atoms/image/image.components";

export const GeneralDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 5%;
  height: 20rem;
`;

// export const ItemsDiv = styled.div`
// display: flex;
// flex-direction: column;
// // justify-content: space-between;
// align-items: flex-start;
// height: 100%;
// `;

export const ImageDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2rem;
`;

export const CardImage = styled.div``;
export const Img = styled(Image)`
  width: 200px;
  height: 288px;
`;


export const ButtonPlus = styled.div`
`;
export const Number = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  font-family: Raleway;
  padding-right: 20%;
`;
export const ButtonMinus = styled.div``;
export const SubRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ActionButton = styled(Button)`
  background-color: #ffffff;
  color: #000;
  font-size: 30px;
  border: 1px solid #000;
  width: 40px;
  height: 40px;
  margin-right: 1rem;
`;

//From Sam
export const ItemsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: Raleway;
`;
export const DetailsText = styled.div``;
export const DetailsHead = styled.div`
  align-items: left;
`;
export const DetailHead = styled(Heading)`
  color: #000;
  line-height: 25px;
`;

export const DetailsSubhead = styled.div``;
export const DetailSubhead = styled(Heading)`
  font-weight: 400;
  color: #000;
  line-height: 25px;
`;
export const DetailsSpec = styled.div`
  padding: 0.5rem 0;
`;

export const Price = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 4px;
`;

export const SizeTextDiv = styled.div``;
export const DetailText = styled(Text)`
  font-weight: 700;
  font-size: 18px;
  color: #000;
  line-height: 4px;
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

  &:hover {
    background-color: black;
    color: #fff;
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
//   #color-1 {
//     // background-color: #d3d2d5;
//   }
//   #color-2 {
//     background-color: #2b2b2b;
//   }
//   #color-3 {
//     background-color: #0f6450;
//   }
`;
export const ColorsBtn = styled.div`
  margin-right: 0.5rem;
`;
export const ColorBtn = styled(Button)`
  width: 32px;
  height: 45px;
  &:hover {
    border: 2px solid #5ece7b;
  }
`;

export const Horizon = styled.div`
padding: 0 5%;
`;

export const HorizonRule = styled.hr`
border: 1px solid #E5E5E5;
`;

export const ImgDiv = styled.div`
position: relative;

`;

export const ArrowDiv = styled.div`
position: absolute;
display: flex;
flex-direction: row;
justify-content: space-between;
z-index: 1;
right: 10px;
bottom: 10px;

#arrow--right {

}

#arrow--left {
    
}
`;
export const Arrow = styled.div`
  background-color: #000;
  width: 24px;
  height: 24px;
  color: #fff;
  margin: .2rem;
`;


