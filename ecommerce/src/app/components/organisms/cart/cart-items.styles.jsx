import Text from "../../atoms/typography";
import styled from "styled-components";
import Button from "../../atoms/button/button.component";
import Image from "../../atoms/image/image.components";


export const GeneralDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 1rem 2rem;
height: 20rem;
`;

export const ItemsDiv = styled.div`
display: flex;
flex-direction: column;
// justify-content: space-between;
align-items: flex-start;
height: 100%;
`; 

export const ImageDiv = styled.div`
display: flex;
flex-direction: row;
`;

export const CardImage = styled.div`

`;
export const Img = styled(Image)`
width: 200px;
height: 288px;
`;
export const TextHead = styled(Text)`
font-family: raleway;
 font-weight:600;
 font-size: 30px;
`;

export const TextSubHead = styled(Text)`
 font-family: raleway;
 font-weight:400;
 font-size: 30px;
`;
export const CartPrice = styled(Text)`
font-family: raleway;
 font-weight:700;
 font-size: 24px;
`;
export const Sized = styled(Text)`
font-family: Roboto Condensed;
font-weight: 700;
font-size: 18px;
`;
export const Color = styled(Text)`
font-family: Roboto Condensed;
font-weight: 700;
font-size: 18px;
`;
export const Click = styled(Button)`

`;
export const HoverClick = styled(Button)`
background-color: #FFFFFF;
color: #000;
font-family: Source Sans Pro;
font-weight:400;
font-size: 16px;
`;
export const SubDiv1 = styled.div`

`;
export const SubDiv2 = styled.div`

`;
export const SubDiv3 = styled.div`
display: flex;
flex-direction: column;

`;
export const SubDivi = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
`;
export const SubDiv5 = styled.div`
display: flex;
flex-direction: column;
#color1{background-color: #D3D2D5}
#color2{background-color: #2B2B2B}
#color3{background-color: #0F6450}
`;
export const ButtonPlus = styled.div`

`;
export const Number = styled.div`
text-align: center;
`;
export const ButtonMinus = styled.div`

`;
export const SubRightDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;
export const IncrementButton = styled(Button)`
background-color: #FFFFFF;
color:#000;
font-size: 20px;
`;
export const DecrementButton = styled(Button)`
background-color: #FFFFFF;
color:#000;
font-size: 20px;
`;