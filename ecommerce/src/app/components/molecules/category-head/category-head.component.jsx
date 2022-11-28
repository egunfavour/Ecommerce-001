import React from 'react'
import { Heading } from '../../atoms/typography/index';
import styled from 'styled-components';


const CategoryHeadingDiv = styled.div`
    width: 30%;
`;

const CategoryHeader = styled(Heading)`
    font-weight: 400;
    font-family: Raleway;
    font-size: 42px;
    line-height: 67.2px;
`;


const CategoryHeading = () => {
  return (
    <CategoryHeadingDiv>
          <CategoryHeader>
        Category name
    </CategoryHeader>
    </CategoryHeadingDiv>
  )
}

export default CategoryHeading