import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  background: white;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 7;
  align-text: center;
  width: 100vw;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


export const NavLink = styled(ScrollLink)`
  color: rgb(119, 119, 121);
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  align-text: center;
  cursor: pointer;
  &:hover {
    color: rgb(57, 134, 250);
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: darkgray;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; 
  margin-right: auto; 
  align-text: center;

  .menu-item + .menu-item {
    margin-left: 2rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

