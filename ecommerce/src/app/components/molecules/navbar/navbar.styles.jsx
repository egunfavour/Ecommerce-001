import styled from 'styled-components';

 export const Nav = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 width: auto;
 height: 3rem;
 padding: .5rem 2rem;
 `;

export const NavLeft = styled.div`
  width: 40%;
`;

export const NavList = styled.ul`
 display: flex;
 flex-direction: row;
 justify-content: flex-start;
 list-style-type: none;
 width: auto;
`;

export const ItemSpan = styled.span`
 padding-top: 1rem;
`;

export const CurrencySpan = styled.span`
 margin-bottom: 1rem;
`;

export const ListItem = styled.li`
 margin: 0 1rem;

 &:hover {
    border-bottom: 2px solid #07a907;
    height: 2.5rem;
    width: 5rem;
  }
`;

export const NavMid = styled.div`
  background-color: #07a907;
  width: auto;
  margin-top: 1rem;
  padding: .5rem;
  border-radius: 5px 5px 0 0;
  position: relative;
`;

export const MidDiv = styled.div`
 /* background-color: #07a907;
  width: auto;
  padding: .5rem .7rem;
  border-radius: 5px 5px 0 0;
  position: absolute; */
`;

export const NavRight = styled.div`
  display: flex;
 flex-direction: row;
 justify-content: flex-end;
 width: 30%;
 margin-top: 1rem;
 padding-right: 5rem;
`;

export const NavDropdownDiv = styled.div`
 background-color: transparent;
  width: 3rem;
  height: auto;
  font-size: 18px;
  color: #000;
  font-weight: 400;
  border-radius: 5px;
  position: relative;
  user-select: none;
`;


export const NavDropdownHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  background: transparent;
  font-weight: 400;
  cursor: pointer;
`;

export const NavDropDownSpan = styled.div`
  padding-top: 0.2rem;
`;

export const NavDropdownItem = styled.div`
    padding: 10px;
   cursor: pointer;
   align-items: center;


  &:hover {
    background: #EEEEEE;
    width: auto;
  }
`;

export const NavDropdown = styled.div`
 background-color: transparent;
  width: 6rem;
  font-size: 16px;
  color: #333;
  font-weight: 400;
  position: absolute;
  top: 110%;
  left: 0;
  padding: 7px;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
`;

export const CartSpan = styled.div`
 margin-top: .3rem;
 margin-left: .3rem;
 font-size: 20px;
`;
