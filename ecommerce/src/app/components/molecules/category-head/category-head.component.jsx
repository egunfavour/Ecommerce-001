import React from "react";
import { Heading } from "../../atoms/typography/index";
import styled from "styled-components";
import { pxToRem } from "../../../../utils/helpers/px-to-rem/pxToRem";

const CategoryHeadingDiv = styled.div`
  // width: 30%;
  position: relative;
  height: 2.5rem;
  margin: 3rem 0 3.5rem 0;
`;

const CategoryHeader = styled(Heading)`
position: absolute;
top: 0;
left: 5rem;
  size: ${({ size }) => size && pxToRem(size)};
  weight: ${({ weight }) => weight};
  color: ${({ color }) => color || "#012A4A"};
  text-transform: ${({ transform }) => transform};
  font-family: Raleway;
  line-height: ${({ lineHeight }) => lineHeight || "67.2px"};
  
`;

const CategoryHeading = ({
  name,
  fontSize,
  textColor,
  fontWeight,
  textTransform,
  lineHeight
}) => {
  return (
    <CategoryHeadingDiv>
      <CategoryHeader
        size={fontSize}
        color={textColor}
        weight={fontWeight}
        transform={textTransform}
        lineHeight={lineHeight}
      >
        {name}
      </CategoryHeader>
    </CategoryHeadingDiv>
  );
};

export default CategoryHeading;
