import React from 'react'
import { Heading } from '../../atoms/typography/index';
import styled from 'styled-components';


const CategoryHeadingDiv = styled.div`
    width: 30%;
    height: 2.5rem;
    margin: 3.5rem 0 0 .5rem;
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