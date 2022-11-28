import styled from "styled-components";
import Image from "../../atoms/image/image.components";

export const MainDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: 60px;
  padding: 3rem;
`;

export const CardImageDiv = styled.div``;

export const CardFeatureDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 1rem;
`;

export const CardDiv = styled.div`
  display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 10px;
width: 386px;
height: 400px;
background: #FFFFFF;

&:hover {
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
}
`;

export const CardImage = styled.div``;

export const Img = styled(Image)`
  width: 356px;
  height: 338px;
`;

export const CardName = styled.div``;

export const CardPrice = styled.div`
font-weight: 500;
`;
