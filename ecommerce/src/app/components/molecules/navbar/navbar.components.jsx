import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineArrowUturnUp } from "react-icons/hi2";
import { RiArrowDropUpLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";

import {
  CartSpan,
  CurrencySpan,
  ItemSpan,
  ListItem,
  MidDiv,
  Nav,
  NavDropdown,
  NavDropdownDiv,
  NavDropdownHeader,
  NavDropdownItem,
  NavDropDownSpan,
  NavLeft,
  NavList,
  NavMid,
  NavRight,
} from "./navbar.styles";
import { dropdownItems } from "../../../assets/data/data";

const Navbar = () => {
  const initial = <BsCurrencyDollar />;

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(initial);

  return (
    <>
      <Nav>
        <NavLeft>
          <NavList>
            <ListItem>WOMEN</ListItem>
            <ListItem>MEN</ListItem>
            <ListItem>KIDS</ListItem>
          </NavList>
        </NavLeft>
        <NavMid>
          <MidDiv>
            <HiOutlineArrowUturnUp />
          </MidDiv>
        </NavMid>
        <NavRight>
          <NavDropdownDiv className="dropdown">
            <NavDropdownHeader
              className="dropdown-btn"
              onClick={(e) => setIsActive(!isActive)}
              //dropdown becomes true and is active on click
            >
              {selected}
              <NavDropDownSpan>
                <RiArrowDropUpLine />
              </NavDropDownSpan>
            </NavDropdownHeader>
            {isActive && 
            <NavDropdown>
              {dropdownItems.map((item, i) => {
                const { id, icon, currency } = item;
                return (
                  <NavDropdownItem
                    key={`${i}${id}`}
                    value="{currency}"
                    className="dropdown-item"
                    onClick={(e) => {
                      setSelected(currency);
                      //makes the dropdown false
                      setIsActive(false);
                    }}
                  >
                    <ItemSpan>{icon}</ItemSpan>
                    <CurrencySpan>{currency}</CurrencySpan>
                  </NavDropdownItem>
                );
              })}
            </NavDropdown> }
          </NavDropdownDiv>
          <CartSpan>
            <AiOutlineShoppingCart />
          </CartSpan>
        </NavRight>
      </Nav>
    </>
  );
};

export default Navbar;
