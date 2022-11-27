import styled from 'styled-components';

 export const Nav = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 width: auto;
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

export const ListItem = styled.li`
 margin: 0 1rem;
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
`;

export const NavDropdownDiv = styled.div`
 background-color: gold;
  margin: 1rem;
  width: 10%;
  height: 20px;
  font-size: 15px;
  color: #000;
  font-weight: 400;
  border-radius: 5px;
  position: relative;
  user-select: none;
`;


export const NavDropdownHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: transparent;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  font-weight: bold;
  cursor: pointer;
`;

export const NavDropDownSpan = styled.div`
  padding-top: 0.2rem;
`;

export const NavDropdownItem = styled.div`
 padding: 10px;
   cursor: pointer;
   transition: all 0.2s;


  &:hover {
    background: white;
    width: 100%;
    border-radius: 5px;
  }
`;

export const NavDropdown = styled.div`
 background-color: gold;
  width: 95%;
  font-size: 20px;
  color: #333;
  font-weight: 500;
  position: abssolute;
  top: 110%;
  left: 0;
  padding: 10px;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
`;

export const CartSpan = styled.div`
 margin-left: 1rem;
`;
